// ═══════════════════════════════════════
//  SUPABASE SETUP — paste your keys here
// ═══════════════════════════════════════

const SUPABASE_URL = 'https://rimwtghdelsbfczylfup.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpbXd0Z2hkZWxzYmZjenlsZnVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NTA1MDYsImV4cCI6MjA4OTQyNjUwNn0.2VcXJlONFKv4aQoizoeOunBHcAxSzoo1f-rp2BfjrDc';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


// ═══════════════════════════════════════
//  APP STATE
// ═══════════════════════════════════════

const state = {
  currentUser: null,
  quizQuestions: [],
  currentQ: 0,
  traitScores: { wisdom:0, cunning:0, authority:0, military:0, diplomacy:0, compassion:0, strategy:0 },
  selectedOption: null,
};


// ═══════════════════════════════════════
//  ROUTER
// ═══════════════════════════════════════

function navigate(page) {
  const app = document.getElementById('app');
  app.innerHTML = '';
  if (page === 'login')  renderLogin();
  if (page === 'home')   renderHome();
  if (page === 'quiz')   renderQuiz();
  if (page === 'result') renderResult();
}


// ═══════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function cosineSim(a, b) {
  const keys = Object.keys(a);
  let dot = 0, magA = 0, magB = 0;
  for (const k of keys) {
    dot  += (a[k] || 0) * (b[k] || 0);
    magA += (a[k] || 0) ** 2;
    magB += (b[k] || 0) ** 2;
  }
  return magA && magB ? dot / (Math.sqrt(magA) * Math.sqrt(magB)) : 0;
}

function getSession()  { return localStorage.getItem('hm_session'); }
function setSession(u) { localStorage.setItem('hm_session', u); }
function clearSession(){ localStorage.removeItem('hm_session'); }
function getUsers()    { return JSON.parse(localStorage.getItem('hm_users') || '{}'); }
function saveUsers(u)  { localStorage.setItem('hm_users', JSON.stringify(u)); }

function navbar(showLogout = true) {
  return `
    <nav>
      <div class="nav-brand">⚔️ History Matchup</div>
      <div class="nav-right">
        <span class="nav-user">${state.currentUser || ''}</span>
        ${showLogout ? `<button class="nav-logout" onclick="logout()">Logout</button>` : ''}
      </div>
    </nav>
  `;
}

function logout() {
  clearSession();
  state.currentUser = null;
  navigate('login');
}


// ═══════════════════════════════════════
//  LOGIN PAGE
// ═══════════════════════════════════════

function renderLogin() {
  document.getElementById('app').innerHTML = `
    <div class="login-wrap">
      <div class="login-box">
        <div class="crest">⚔️</div>
        <h1>Who Are You In History?</h1>
        <p>A personality matchup across 14 historical figures</p>
        <div class="tabs">
          <button class="tab active" id="tabSignin" onclick="switchTab('signin')">Sign In</button>
          <button class="tab" id="tabRegister" onclick="switchTab('register')">Register</button>
        </div>
        <div id="signinForm">
          <div class="form-group">
            <label>Username</label>
            <input type="text" id="siUser" placeholder="Enter username"/>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" id="siPass" placeholder="Enter password"/>
          </div>
          <div id="siErr" class="form-error"></div>
          <button class="btn-primary" onclick="doLogin()">Sign In</button>
        </div>
        <div id="registerForm" style="display:none">
          <div class="form-group">
            <label>Username</label>
            <input type="text" id="regUser" placeholder="Choose username"/>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" id="regPass" placeholder="Choose password"/>
          </div>
          <div id="regErr" class="form-error"></div>
          <button class="btn-primary" onclick="doRegister()">Create Account</button>
        </div>
        <button class="btn-ghost" onclick="guestLogin()">Continue as Guest</button>
      </div>
    </div>
  `;
}

function switchTab(tab) {
  document.getElementById('tabSignin').classList.toggle('active', tab === 'signin');
  document.getElementById('tabRegister').classList.toggle('active', tab === 'register');
  document.getElementById('signinForm').style.display   = tab === 'signin'   ? 'block' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
}

function doLogin() {
  const u = document.getElementById('siUser').value.trim();
  const p = document.getElementById('siPass').value.trim();
  if (!u || !p) { document.getElementById('siErr').textContent = 'Fill all fields'; return; }
  const users = getUsers();
  if (!users[u])      { document.getElementById('siErr').textContent = 'User not found'; return; }
  if (users[u] !== p) { document.getElementById('siErr').textContent = 'Wrong password'; return; }
  setSession(u);
  state.currentUser = u;
  navigate('home');
}

function doRegister() {
  const u = document.getElementById('regUser').value.trim();
  const p = document.getElementById('regPass').value.trim();
  if (!u || !p) { document.getElementById('regErr').textContent = 'Fill all fields'; return; }
  const users = getUsers();
  if (users[u]) { document.getElementById('regErr').textContent = 'Username already taken'; return; }
  users[u] = p;
  saveUsers(users);
  setSession(u);
  state.currentUser = u;
  navigate('home');
}

function guestLogin() {
  setSession('Guest');
  state.currentUser = 'Guest';
  navigate('home');
}


// ═══════════════════════════════════════
//  HOME PAGE
// ═══════════════════════════════════════

function renderHome() {
  const cards = LEADERS.map(l => `
    <div class="leader-card">
      <span class="leader-emoji">${l.emoji}</span>
      <h3>${l.name}</h3>
      <span class="leader-tag ${l.tagClass}">${l.category}</span>
      <p>${l.desc}</p>
    </div>
  `).join('');

  document.getElementById('app').innerHTML = `
    ${navbar()}
    <div class="hero">
      <div class="hero-tag">Personality Matchup · DBMS Project</div>
      <h1>Which historical figure<br/><span>thinks like you?</span></h1>
      <p>Answer 10 questions drawn from 60 scenarios. Your decisions reveal your personality. We match you to one of 14 rulers, philosophers, conquerors, or strategists.</p>
      <button class="btn-start" onclick="startQuiz()">Begin Matchup →</button>
    </div>
    <div class="divider"></div>
    <div class="section-title">
      <h2>The 14 Personalities</h2>
      <p>Philosophers, conquerors, strategists, and rulers across 2,500 years</p>
    </div>
    <div class="leaders-grid">${cards}</div>
    <div class="how-section">
      <div class="section-title"><h2>How It Works</h2></div>
      <div class="steps">
        <div class="step">
          <span class="step-num">01</span>
          <h4>Answer 10 Questions</h4>
          <p>Randomly drawn from a pool of 60 historical dilemmas. No two rounds are the same.</p>
        </div>
        <div class="step">
          <span class="step-num">02</span>
          <h4>Trait Scoring</h4>
          <p>Every option maps to 7 traits — wisdom, cunning, authority, military, diplomacy, compassion, strategy.</p>
        </div>
        <div class="step">
          <span class="step-num">03</span>
          <h4>Personality Matched</h4>
          <p>Your trait scores are compared to each leader's profile. Highest similarity is your match.</p>
        </div>
      </div>
    </div>
  `;
}


// ═══════════════════════════════════════
//  QUIZ PAGE
// ═══════════════════════════════════════

function startQuiz() {
  const byCategory = {};
  ALL_QUESTIONS.forEach(q => {
    if (!byCategory[q.category]) byCategory[q.category] = [];
    byCategory[q.category].push(q);
  });

  Object.keys(byCategory).forEach(cat => {
    byCategory[cat] = shuffle(byCategory[cat]);
  });

  const categories = shuffle(Object.keys(byCategory));
  const selected = [];
  let i = 0;
  while (selected.length < 10) {
    const cat = categories[i % categories.length];
    if (byCategory[cat].length > 0) {
      selected.push(byCategory[cat].pop());
    }
    i++;
  }

  state.quizQuestions = shuffle(selected);
  state.currentQ = 0;
  state.traitScores = { wisdom:0, cunning:0, authority:0, military:0, diplomacy:0, compassion:0, strategy:0 };
  state.selectedOption = null;
  navigate('quiz');
}

function renderQuiz() {
  const q = state.quizQuestions[state.currentQ];
  const letters = ['A', 'B', 'C', 'D'];
  const pct = ((state.currentQ + 1) / 10) * 100;

  const options = q.options.map((o, i) => `
    <button class="option-btn" onclick="selectOption(${i})">
      <span class="option-letter">${letters[i]}</span>
      <span class="option-text">${o.text}</span>
    </button>
  `).join('');

  document.getElementById('app').innerHTML = `
    ${navbar(false)}
    <div class="quiz-header">
      <span class="quiz-progress-text">Question <span>${state.currentQ + 1}</span> of 10</span>
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" style="width:${pct}%"></div>
      </div>
      <span class="quiz-category">${q.category}</span>
    </div>
    <div class="question-area">
      <div class="question-num">Question ${state.currentQ + 1}</div>
      <div class="question-text">${q.text}</div>
      <div class="options-list">${options}</div>
    </div>
    <div class="quiz-footer">
      <button class="btn-next" id="nextBtn" onclick="nextQuestion()">Next →</button>
    </div>
  `;
}

function selectOption(idx) {
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  document.querySelectorAll('.option-btn')[idx].classList.add('selected');
  state.selectedOption = idx;
  document.getElementById('nextBtn').classList.add('ready');
}

function nextQuestion() {
  if (state.selectedOption === null) return;
  const q = state.quizQuestions[state.currentQ];
  const chosen = q.options[state.selectedOption].traits;
  for (const [trait, val] of Object.entries(chosen)) {
    state.traitScores[trait] = (state.traitScores[trait] || 0) + val;
  }
  state.currentQ++;
  state.selectedOption = null;
  if (state.currentQ < 10) {
    navigate('quiz');
  } else {
    navigate('result');
  }
}


// ═══════════════════════════════════════
//  RESULT PAGE
// ═══════════════════════════════════════

function renderResult() {
  const scores = LEADERS
    .map(l => ({ leader: l, sim: cosineSim(state.traitScores, l.traits) }))
    .map(r => ({ ...r, pct: Math.round(r.sim * 100) }))
    .sort((a, b) => b.sim - a.sim);

  const top = scores[0];
  const l   = top.leader;

  const traitLabels = {
    wisdom:'Wisdom', cunning:'Cunning', authority:'Authority',
    military:'Military', diplomacy:'Diplomacy', compassion:'Compassion', strategy:'Strategy'
  };
  const maxVal = Math.max(...Object.values(state.traitScores)) || 1;

  const traitBars = Object.entries(state.traitScores).map(([k, v]) => `
    <div class="trait-row">
      <label><span>${traitLabels[k]}</span><span>${v}</span></label>
      <div class="trait-bar-bg">
        <div class="trait-bar-val" data-w="${Math.round((v / maxVal) * 100)}"></div>
      </div>
    </div>
  `).join('');

  const whyItems = l.why.map(w =>
    `<li><span class="why-icon">→</span>${w}</li>`
  ).join('');

  const otherCards = scores.slice(1, 4).map(s => `
    <div class="other-card">
      <span class="em">${s.leader.emoji}</span>
      <h4>${s.leader.name}</h4>
      <div class="pct">${s.pct}%</div>
      <div class="mini-bar-bg">
        <div class="mini-bar-val" style="width:${s.pct}%"></div>
      </div>
    </div>
  `).join('');

  document.getElementById('app').innerHTML = `
    ${navbar()}
    <div class="result-hero">
      <div class="result-label">Your Personality Match</div>
      <span class="result-emoji">${l.emoji}</span>
      <div class="result-name">${l.name}</div>
      <div class="result-tag-display ${l.tagClass}">${l.category}</div>
      <div class="result-pct">${top.pct}<span>%</span></div>
      <div class="result-match-label">similarity match</div>
      <blockquote class="result-quote">${l.quote}</blockquote>
    </div>
    <div class="result-body">
      <div>
        <div class="result-section-title">Why You Are Similar</div>
        <ul class="why-list">${whyItems}</ul>
      </div>
      <div>
        <div class="result-section-title">Your Trait Profile</div>
        <div class="trait-bar-list">${traitBars}</div>
      </div>
    </div>
    <div class="other-matches">
      <div class="result-section-title">Other Close Matches</div>
      <div class="other-grid">${otherCards}</div>
    </div>
    <div class="result-actions">
      <button class="btn-retry" onclick="startQuiz()">Try Again</button>
    </div>
  `;

  setTimeout(() => {
    document.querySelectorAll('.trait-bar-val').forEach(bar => {
      bar.style.width = bar.dataset.w + '%';
    });
  }, 100);

  saveResult(l.id, state.traitScores, top.pct);
}


// ═══════════════════════════════════════
//  SUPABASE — SAVE RESULT
// ═══════════════════════════════════════

async function saveResult(leaderId, traits, matchPct) {
  try {
    const { data, error } = await sb
      .from('simulation_results')
      .insert([{
        username:       state.currentUser || 'guest',
        matched_leader: leaderId,
        match_pct:      matchPct,
      }])
      .select();

    if (error) { console.error('Supabase error:', error.message); return; }

    const resultId = data[0].id;
    const traitRows = Object.entries(traits).map(([trait_name, score]) => ({
      result_id:  resultId,
      trait_name: trait_name,
      score:      score,
    }));

    const { error: traitError } = await sb
      .from('result_traits')
      .insert(traitRows);

    if (traitError) console.error('Trait error:', traitError.message);
    else console.log('Saved successfully!');

  } catch (e) {
    console.error('Error:', e.message);
  }
}


// ═══════════════════════════════════════
//  INIT
// ═══════════════════════════════════════

window.onload = () => {
  const saved = getSession();
  if (saved) {
    state.currentUser = saved;
    navigate('home');
  } else {
    navigate('login');
  }
};