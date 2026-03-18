// ═══════════════════════════════════════
//  LEADERS
// ═══════════════════════════════════════

const LEADERS = [
  {
    id: 'socrates',
    name: 'Socrates',
    emoji: '🏛️',
    category: 'Philosopher',
    tagClass: 'tag-philosopher',
    desc: 'Father of Western philosophy. Died for truth.',
    quote: '"The unexamined life is not worth living."',
    traits: { wisdom:10, cunning:3, authority:2, military:1, diplomacy:6, compassion:8, strategy:4 },
    why: [
      'You question before acting — truth matters more than comfort',
      'You challenge power even when it costs you personally',
      'You believe people can be guided by reason, not just force',
      'You accept consequences without flinching'
    ]
  },
  {
    id: 'plato',
    name: 'Plato',
    emoji: '📜',
    category: 'Philosopher',
    tagClass: 'tag-philosopher',
    desc: 'Believed the ideal state requires philosopher-kings.',
    quote: '"Those who tell the stories rule society."',
    traits: { wisdom:10, cunning:4, authority:6, military:1, diplomacy:5, compassion:6, strategy:7 },
    why: [
      'You think in systems — you want the right structure, not just the right person',
      'You believe knowledge should lead power',
      'You are willing to shape truth for a higher ideal',
      'You plan long-term, not just for today'
    ]
  },
  {
    id: 'aristotle',
    name: 'Aristotle',
    emoji: '🔬',
    category: 'Philosopher',
    tagClass: 'tag-philosopher',
    desc: 'Logic, ethics, politics — he studied everything.',
    quote: '"Knowing yourself is the beginning of all wisdom."',
    traits: { wisdom:10, cunning:3, authority:5, military:1, diplomacy:7, compassion:5, strategy:8 },
    why: [
      'You observe before judging — evidence first',
      'You categorize situations rather than react emotionally',
      'You believe balance is the key to everything',
      'You mentor rather than command'
    ]
  },
  {
    id: 'marcus',
    name: 'Marcus Aurelius',
    emoji: '⚖️',
    category: 'Philosopher-Emperor',
    tagClass: 'tag-philosopher',
    desc: 'Emperor who ruled by Stoic principles alone.',
    quote: '"You have power over your mind, not outside events."',
    traits: { wisdom:9, cunning:3, authority:7, military:5, diplomacy:7, compassion:9, strategy:5 },
    why: [
      'You lead by internal discipline, not external force',
      'You feel responsibility as a weight, not a privilege',
      'You do the right thing even when no one is watching',
      'You accept loss without collapsing'
    ]
  },
  {
    id: 'sun_tzu',
    name: 'Sun Tzu',
    emoji: '🥷',
    category: 'Strategist',
    tagClass: 'tag-strategist',
    desc: 'Wrote the Art of War. Never fought without a plan.',
    quote: '"Supreme excellence is to defeat the enemy without fighting."',
    traits: { wisdom:7, cunning:7, authority:4, military:7, diplomacy:4, compassion:2, strategy:10 },
    why: [
      'You think three moves ahead before acting',
      'You prefer winning without direct confrontation',
      'You study your enemy as carefully as yourself',
      'Information is your most valuable weapon'
    ]
  },
  {
    id: 'machiavelli',
    name: 'Machiavelli',
    emoji: '🎭',
    category: 'Strategist',
    tagClass: 'tag-strategist',
    desc: 'Wrote The Prince. Power is its own morality.',
    quote: '"It is better to be feared than loved, if you cannot be both."',
    traits: { wisdom:5, cunning:10, authority:6, military:4, diplomacy:5, compassion:1, strategy:8 },
    why: [
      'You separate emotion from decision — completely',
      'You see politics as a game, not a moral test',
      'You use people strategically, not carelessly',
      "Ends justify means — that's just reality to you"
    ]
  },
  {
    id: 'alexander',
    name: 'Alexander the Great',
    emoji: '🦁',
    category: 'Conqueror',
    tagClass: 'tag-conqueror',
    desc: 'Conquered the known world before age 33.',
    quote: '"There is nothing impossible to him who will try."',
    traits: { wisdom:5, cunning:6, authority:9, military:10, diplomacy:4, compassion:3, strategy:8 },
    why: [
      'Limits exist to be broken — that is your philosophy',
      'You lead from the front, not the back',
      'Your ambition does not stop at reasonable',
      'You inspire loyalty through shared glory'
    ]
  },
  {
    id: 'genghis',
    name: 'Genghis Khan',
    emoji: '🐺',
    category: 'Conqueror',
    tagClass: 'tag-conqueror',
    desc: 'Built the largest land empire in history.',
    quote: '"I am the flail of God."',
    traits: { wisdom:4, cunning:7, authority:10, military:10, diplomacy:2, compassion:1, strategy:9 },
    why: [
      'You build systems to win — not just battles',
      'You reward loyalty absolutely and punish betrayal the same way',
      'You do not fight fair — you fight to win',
      'You see the big picture when others see only the moment'
    ]
  },
  {
    id: 'napoleon',
    name: 'Napoleon Bonaparte',
    emoji: '👑',
    category: 'Conqueror',
    tagClass: 'tag-conqueror',
    desc: 'Reshaped Europe through brilliance and ego.',
    quote: '"Impossible is a word found only in the dictionary of fools."',
    traits: { wisdom:6, cunning:7, authority:9, military:9, diplomacy:4, compassion:2, strategy:10 },
    why: [
      'You turn chaos into opportunity faster than others realize it is chaos',
      'You believe talent should outrank birth or privilege',
      'You work harder than everyone around you',
      'Ambition is not a flaw — it is a fuel'
    ]
  },
  {
    id: 'caesar',
    name: 'Julius Caesar',
    emoji: '🏅',
    category: 'Ruler',
    tagClass: 'tag-ruler',
    desc: 'Crossed the Rubicon. Rewrote Roman history.',
    quote: '"I came, I saw, I conquered."',
    traits: { wisdom:6, cunning:7, authority:9, military:8, diplomacy:6, compassion:3, strategy:7 },
    why: [
      'You take decisive action when others hesitate',
      'You understand that rules are made by those who win',
      'You use popularity as a political weapon',
      'You are calculating even when you appear impulsive'
    ]
  },
  {
    id: 'cleopatra',
    name: 'Cleopatra',
    emoji: '🐍',
    category: 'Ruler',
    tagClass: 'tag-ruler',
    desc: "Played Rome's greatest men like instruments.",
    quote: '"I will not be triumphed over."',
    traits: { wisdom:7, cunning:8, authority:7, military:3, diplomacy:10, compassion:3, strategy:7 },
    why: [
      'You use every resource available — including yourself',
      'You make powerful people feel like equals',
      'You think diplomatically even in crisis',
      'Your real weapon has always been your mind'
    ]
  },
  {
    id: 'saladin',
    name: 'Saladin',
    emoji: '🌙',
    category: 'Military Commander',
    tagClass: 'tag-military',
    desc: 'Reclaimed Jerusalem. Even his enemies respected him.',
    quote: '"Do not suppose that I shall oppress you, for it is not my custom."',
    traits: { wisdom:7, cunning:5, authority:8, military:9, diplomacy:8, compassion:8, strategy:7 },
    why: [
      'You are fierce in war and generous in victory',
      'You believe honor is not separate from power — it is power',
      'You unite people through purpose, not fear',
      'Your enemies respect you — that is rare'
    ]
  },
  {
    id: 'khalid',
    name: 'Khalid ibn Walid',
    emoji: '⚔️',
    category: 'Military Commander',
    tagClass: 'tag-military',
    desc: 'Never lost a battle. 100+ victories.',
    quote: '"Do not imagine for a moment that I am fighting for any worldly gains."',
    traits: { wisdom:5, cunning:6, authority:7, military:10, diplomacy:4, compassion:5, strategy:9 },
    why: [
      'You see the battle before it begins',
      'You adapt tactics mid-fight without hesitation',
      'You demand the best from yourself before demanding it from others',
      'Defeat is not in your vocabulary — it is calibration'
    ]
  },
  {
    id: 'hitler',
    name: 'Adolf Hitler',
    emoji: '💀',
    category: 'Dictator',
    tagClass: 'tag-conqueror',
    desc: 'Rose from nothing. Destroyed everything, including himself.',
    quote: '"Make the lie big, make it simple, keep saying it."',
    traits: { wisdom:2, cunning:7, authority:10, military:5, diplomacy:1, compassion:1, strategy:5 },
    why: [
      'You can move crowds — you understand mass psychology',
      'You operate through conviction, not calculation',
      'You see enemies everywhere and act on it completely',
      'You do not compromise — for better or worse'
    ]
  }
];


// ═══════════════════════════════════════
//  ALL 60 QUESTIONS — REBALANCED TRAITS
//  Each answer scores MAX 2 points per trait
//  Spread evenly so all personalities can win
// ═══════════════════════════════════════

const ALL_QUESTIONS = [
  {
    text: "A drought hits. You cannot save everyone.",
    category: "Crisis",
    options: [
      { text: "Save those who can fight later",       traits: { military:2 } },
      { text: "Save those who cannot survive alone",  traits: { compassion:2 } },
      { text: "Save those who keep order intact",     traits: { authority:2 } },
      { text: "Let scarcity decide naturally",        traits: { strategy:2 } }
    ]
  },
  {
    text: "Your enemy trusts you completely.",
    category: "Power",
    options: [
      { text: "Use that trust to end them",           traits: { cunning:2 } },
      { text: "Maintain trust and delay conflict",    traits: { diplomacy:2 } },
      { text: "Break contact before it binds you",    traits: { authority:2 } },
      { text: "Test how far their trust goes",        traits: { strategy:2 } }
    ]
  },
  {
    text: "A rebellion rises from injustice — but threatens stability.",
    category: "Control",
    options: [
      { text: "Crush it before it spreads",                 traits: { military:2 } },
      { text: "Fix the injustice and absorb it",            traits: { compassion:2 } },
      { text: "Let it grow to expose deeper cracks",        traits: { wisdom:2 } },
      { text: "Turn factions within it against each other", traits: { cunning:2 } }
    ]
  },
  {
    text: "You love someone tied to your enemy.",
    category: "Dark",
    options: [
      { text: "Choose love and risk power",           traits: { compassion:2 } },
      { text: "Use the bond as leverage",             traits: { cunning:2 } },
      { text: "End it before it weakens you",         traits: { authority:2 } },
      { text: "Hide it and play both sides",          traits: { diplomacy:2 } }
    ]
  },
  {
    text: "A lie can prevent chaos, but will shape future truth.",
    category: "Philosophy",
    options: [
      { text: "Tell the lie and control outcome",         traits: { authority:2 } },
      { text: "Bend the truth slightly",                  traits: { diplomacy:2 } },
      { text: "Refuse and accept instability",            traits: { wisdom:2 } },
      { text: "Let others lie while you stay silent",     traits: { cunning:2 } }
    ]
  },
  {
    text: "A powerful group demands dominance.",
    category: "Power",
    options: [
      { text: "Give them control and gain loyalty",   traits: { diplomacy:2 } },
      { text: "Resist and risk conflict",             traits: { military:2 } },
      { text: "Divide them internally",               traits: { cunning:2 } },
      { text: "Make them dependent on you",           traits: { strategy:2 } }
    ]
  },
  {
    text: "War can end now — but at a moral cost.",
    category: "War",
    options: [
      { text: "End it regardless of cost",            traits: { authority:2 } },
      { text: "Continue until a cleaner victory",     traits: { military:2 } },
      { text: "Shift the cost onto others",           traits: { cunning:2 } },
      { text: "Let the war reshape itself",           traits: { strategy:2 } }
    ]
  },
  {
    text: "A trusted ally is slowly becoming a threat.",
    category: "Power",
    options: [
      { text: "Remove them before they rise",         traits: { military:2 } },
      { text: "Keep them close and limit them",       traits: { cunning:2 } },
      { text: "Strengthen them and bind loyalty",     traits: { diplomacy:2 } },
      { text: "Wait and understand their intent",     traits: { wisdom:2 } }
    ]
  },
  {
    text: "Your people demand justice, but truth is unclear.",
    category: "Justice",
    options: [
      { text: "Deliver justice quickly",              traits: { authority:2 } },
      { text: "Delay until truth emerges",            traits: { wisdom:2 } },
      { text: "Shape the truth for stability",        traits: { cunning:2 } },
      { text: "Let conflict resolve itself",          traits: { strategy:2 } }
    ]
  },
  {
    text: "You can rule through fear, respect, or unpredictability.",
    category: "Control",
    options: [
      { text: "Make fear your foundation",            traits: { authority:2 } },
      { text: "Build respect slowly",                 traits: { compassion:2 } },
      { text: "Stay unpredictable",                   traits: { cunning:2 } },
      { text: "Shift between all without pattern",    traits: { strategy:2 } }
    ]
  },
  {
    text: "A mistake defines your image.",
    category: "Legacy",
    options: [
      { text: "Hide it completely",                   traits: { cunning:2 } },
      { text: "Admit and control narrative",          traits: { diplomacy:2 } },
      { text: "Shift blame subtly",                   traits: { authority:2 } },
      { text: "Turn it into strength",                traits: { strategy:2 } }
    ]
  },
  {
    text: "A weak enemy today may be dangerous tomorrow.",
    category: "Strategy",
    options: [
      { text: "Destroy them now",                     traits: { military:2 } },
      { text: "Keep them weak",                       traits: { strategy:2 } },
      { text: "Turn them into ally",                  traits: { diplomacy:2 } },
      { text: "Ignore and observe",                   traits: { wisdom:2 } }
    ]
  },
  {
    text: "Your success depends on someone you cannot trust.",
    category: "Power",
    options: [
      { text: "Use them anyway",                      traits: { cunning:2 } },
      { text: "Limit their role",                     traits: { authority:2 } },
      { text: "Replace them early",                   traits: { military:2 } },
      { text: "Let them think they control you",      traits: { strategy:2 } }
    ]
  },
  {
    text: "You can unify people through a shared enemy.",
    category: "Control",
    options: [
      { text: "Create that enemy",                    traits: { cunning:2 } },
      { text: "Use an existing one",                  traits: { authority:2 } },
      { text: "Avoid such unity",                     traits: { wisdom:2 } },
      { text: "Let divisions remain",                 traits: { strategy:2 } }
    ]
  },
  {
    text: "A decision strengthens you but weakens your values.",
    category: "Philosophy",
    options: [
      { text: "Choose strength",                      traits: { authority:2 } },
      { text: "Protect values",                       traits: { wisdom:2 } },
      { text: "Redefine your values",                 traits: { cunning:2 } },
      { text: "Delay until forced",                   traits: { diplomacy:2 } }
    ]
  },
  {
    text: "Two communities grow in silent hatred.",
    category: "Society",
    options: [
      { text: "Let them clash and settle",            traits: { military:2 } },
      { text: "Control both strictly",                traits: { authority:2 } },
      { text: "Favor one side quietly",               traits: { cunning:2 } },
      { text: "Redirect hatred outward",              traits: { strategy:2 } }
    ]
  },
  {
    text: "A person is blamed for problems they did not cause.",
    category: "Justice",
    options: [
      { text: "Protect them",                         traits: { compassion:2 } },
      { text: "Use them as a shield",                 traits: { cunning:2 } },
      { text: "Expose the truth",                     traits: { wisdom:2 } },
      { text: "Let blame continue",                   traits: { authority:2 } }
    ]
  },
  {
    text: "A famine creates desperation and crime.",
    category: "Crisis",
    options: [
      { text: "Enforce strict punishment",            traits: { authority:2 } },
      { text: "Provide controlled relief",            traits: { compassion:2 } },
      { text: "Ignore and let balance return",        traits: { strategy:2 } },
      { text: "Use crisis to restructure power",      traits: { cunning:2 } }
    ]
  },
  {
    text: "Your inner circle starts doubting you.",
    category: "Control",
    options: [
      { text: "Remove doubters",                      traits: { authority:2 } },
      { text: "Rebuild trust",                        traits: { diplomacy:2 } },
      { text: "Divide their influence",               traits: { cunning:2 } },
      { text: "Let doubt exist",                      traits: { wisdom:2 } }
    ]
  },
  {
    text: "A rival gains power through love and loyalty.",
    category: "Power",
    options: [
      { text: "Break those bonds",                    traits: { military:2 } },
      { text: "Build stronger ones yourself",         traits: { diplomacy:2 } },
      { text: "Turn loyalty into weakness",           traits: { cunning:2 } },
      { text: "Let it grow and study it",             traits: { wisdom:2 } }
    ]
  },
  {
    text: "Your rule survives because people believe in you — not because of truth.",
    category: "Philosophy",
    options: [
      { text: "Protect belief at any cost",           traits: { authority:2 } },
      { text: "Align truth slowly with belief",       traits: { diplomacy:2 } },
      { text: "Break illusion and rebuild",           traits: { wisdom:2 } },
      { text: "Let belief evolve without control",    traits: { compassion:2 } }
    ]
  },
  {
    text: "A loyal follower commits an unforgivable act — for your benefit.",
    category: "Dark",
    options: [
      { text: "Protect them",                         traits: { compassion:2 } },
      { text: "Punish them publicly",                 traits: { authority:2 } },
      { text: "Distance quietly",                     traits: { strategy:2 } },
      { text: "Use them once more",                   traits: { cunning:2 } }
    ]
  },
  {
    text: "You can end corruption by destroying the system that feeds you.",
    category: "Power",
    options: [
      { text: "Destroy it",                           traits: { military:2 } },
      { text: "Reform it slowly",                     traits: { wisdom:2 } },
      { text: "Control it from within",               traits: { cunning:2 } },
      { text: "Let it continue",                      traits: { strategy:2 } }
    ]
  },
  {
    text: "A decision today will harm you but protect future stability.",
    category: "Strategy",
    options: [
      { text: "Take the loss now",                    traits: { compassion:2 } },
      { text: "Shift burden to others",               traits: { cunning:2 } },
      { text: "Delay until unavoidable",              traits: { strategy:2 } },
      { text: "Avoid and adapt later",                traits: { wisdom:2 } }
    ]
  },
  {
    text: "You discover your enemy thinks exactly like you.",
    category: "Psychology",
    options: [
      { text: "Mirror them exactly",                  traits: { cunning:2 } },
      { text: "Change your approach",                 traits: { wisdom:2 } },
      { text: "Predict and trap them",                traits: { strategy:2 } },
      { text: "Let similarity play out",              traits: { diplomacy:2 } }
    ]
  },
  {
    text: "A powerful truth can destroy your authority.",
    category: "Philosophy",
    options: [
      { text: "Hide it",                              traits: { cunning:2 } },
      { text: "Reveal it selectively",                traits: { diplomacy:2 } },
      { text: "Accept and lose control",              traits: { wisdom:2 } },
      { text: "Twist its meaning",                    traits: { authority:2 } }
    ]
  },
  {
    text: "A group follows you out of fear, not loyalty.",
    category: "Control",
    options: [
      { text: "Strengthen fear",                      traits: { military:2 } },
      { text: "Replace fear with trust",              traits: { compassion:2 } },
      { text: "Keep them uncertain",                  traits: { cunning:2 } },
      { text: "Let them drift away",                  traits: { wisdom:2 } }
    ]
  },
  {
    text: "A peaceful solution makes you irrelevant.",
    category: "Power",
    options: [
      { text: "Accept peace",                         traits: { compassion:2 } },
      { text: "Delay peace",                          traits: { military:2 } },
      { text: "Shape peace around you",               traits: { diplomacy:2 } },
      { text: "Disrupt peace",                        traits: { cunning:2 } }
    ]
  },
  {
    text: "You must choose between being loved or being obeyed.",
    category: "Power",
    options: [
      { text: "Choose love",                          traits: { compassion:2 } },
      { text: "Choose obedience",                     traits: { authority:2 } },
      { text: "Alternate both",                       traits: { diplomacy:2 } },
      { text: "Reject both",                          traits: { wisdom:2 } }
    ]
  },
  {
    text: "A system works only because people do not question it.",
    category: "Philosophy",
    options: [
      { text: "Keep it unquestioned",                 traits: { authority:2 } },
      { text: "Strengthen it logically",              traits: { strategy:2 } },
      { text: "Let it be challenged",                 traits: { wisdom:2 } },
      { text: "Replace it entirely",                  traits: { military:2 } }
    ]
  },
  {
    text: "Someone understands your weaknesses completely.",
    category: "Psychology",
    options: [
      { text: "Eliminate them",                       traits: { military:2 } },
      { text: "Bring them closer",                    traits: { cunning:2 } },
      { text: "Mislead them",                         traits: { strategy:2 } },
      { text: "Expose yourself deliberately",         traits: { wisdom:2 } }
    ]
  },
  {
    text: "You can control outcomes by controlling information.",
    category: "Strategy",
    options: [
      { text: "Restrict information",                 traits: { authority:2 } },
      { text: "Filter information",                   traits: { cunning:2 } },
      { text: "Open all information",                 traits: { wisdom:2 } },
      { text: "Flood with noise",                     traits: { strategy:2 } }
    ]
  },
  {
    text: "A failure will reveal your true nature.",
    category: "Dark",
    options: [
      { text: "Avoid failure at all cost",            traits: { cunning:2 } },
      { text: "Control its perception",               traits: { authority:2 } },
      { text: "Accept and learn",                     traits: { wisdom:2 } },
      { text: "Turn it into narrative",               traits: { diplomacy:2 } }
    ]
  },
  {
    text: "Your enemy grows stronger by waiting.",
    category: "War",
    options: [
      { text: "Attack now",                           traits: { military:2 } },
      { text: "Wait longer than them",                traits: { strategy:2 } },
      { text: "Force them to act",                    traits: { cunning:2 } },
      { text: "Change the battlefield",               traits: { wisdom:2 } }
    ]
  },
  {
    text: "You can maintain order only through constant pressure.",
    category: "Control",
    options: [
      { text: "Maintain pressure",                    traits: { authority:2 } },
      { text: "Reduce pressure gradually",            traits: { diplomacy:2 } },
      { text: "Remove pressure entirely",             traits: { compassion:2 } },
      { text: "Redirect pressure elsewhere",          traits: { strategy:2 } }
    ]
  },
  {
    text: "A person is loyal only when watched.",
    category: "Psychology",
    options: [
      { text: "Watch constantly",                     traits: { authority:2 } },
      { text: "Trust them anyway",                    traits: { compassion:2 } },
      { text: "Test them unpredictably",              traits: { cunning:2 } },
      { text: "Replace them",                         traits: { military:2 } }
    ]
  },
  {
    text: "Win by being predictable — or by being unknown?",
    category: "Strategy",
    options: [
      { text: "Stay predictable",                     traits: { diplomacy:2 } },
      { text: "Stay unpredictable",                   traits: { cunning:2 } },
      { text: "Switch patterns",                      traits: { strategy:2 } },
      { text: "Remain hidden entirely",               traits: { wisdom:2 } }
    ]
  },
  {
    text: "Your presence keeps things stable — but stops growth.",
    category: "Legacy",
    options: [
      { text: "Stay and control",                     traits: { authority:2 } },
      { text: "Step back",                            traits: { compassion:2 } },
      { text: "Change your role",                     traits: { wisdom:2 } },
      { text: "Let instability happen",               traits: { strategy:2 } }
    ]
  },
  {
    text: "A small lie protects a large truth.",
    category: "Philosophy",
    options: [
      { text: "Use the lie",                          traits: { cunning:2 } },
      { text: "Avoid lying",                          traits: { wisdom:2 } },
      { text: "Replace truth altogether",             traits: { authority:2 } },
      { text: "Let truth collapse",                   traits: { strategy:2 } }
    ]
  },
  {
    text: "Choose between clarity and control.",
    category: "Power",
    options: [
      { text: "Be clear",                             traits: { wisdom:2 } },
      { text: "Maintain control",                     traits: { authority:2 } },
      { text: "Blur both",                            traits: { cunning:2 } },
      { text: "Remove both",                          traits: { diplomacy:2 } }
    ]
  },
  {
    text: "A community becomes powerful through unity you cannot control.",
    category: "Society",
    options: [
      { text: "Break their unity",                    traits: { military:2 } },
      { text: "Join their unity",                     traits: { diplomacy:2 } },
      { text: "Redirect their purpose",               traits: { cunning:2 } },
      { text: "Let them grow",                        traits: { compassion:2 } }
    ]
  },
  {
    text: "People follow you for very different reasons.",
    category: "Control",
    options: [
      { text: "Strengthen one reason only",           traits: { authority:2 } },
      { text: "Balance all reasons",                  traits: { diplomacy:2 } },
      { text: "Remove weak motives",                  traits: { cunning:2 } },
      { text: "Let motives clash",                    traits: { strategy:2 } }
    ]
  },
  {
    text: "You can end hatred by creating a greater fear.",
    category: "Dark",
    options: [
      { text: "Create the fear",                      traits: { authority:2 } },
      { text: "Reduce hatred directly",               traits: { compassion:2 } },
      { text: "Balance both",                         traits: { wisdom:2 } },
      { text: "Let hatred continue",                  traits: { military:2 } }
    ]
  },
  {
    text: "A crisis reveals who matters and who does not.",
    category: "Crisis",
    options: [
      { text: "Protect the valuable",                 traits: { strategy:2 } },
      { text: "Protect the vulnerable",               traits: { compassion:2 } },
      { text: "Protect the system",                   traits: { authority:2 } },
      { text: "Let crisis decide",                    traits: { wisdom:2 } }
    ]
  },
  {
    text: "Your rule depends on constant approval.",
    category: "Power",
    options: [
      { text: "Maintain approval",                    traits: { diplomacy:2 } },
      { text: "Reduce dependency",                    traits: { authority:2 } },
      { text: "Ignore approval",                      traits: { military:2 } },
      { text: "Manipulate approval",                  traits: { cunning:2 } }
    ]
  },
  {
    text: "A powerful individual gains influence outside your control.",
    category: "Power",
    options: [
      { text: "Absorb them",                          traits: { diplomacy:2 } },
      { text: "Destroy their influence",              traits: { military:2 } },
      { text: "Compete with them",                    traits: { authority:2 } },
      { text: "Let them rise and study it",           traits: { wisdom:2 } }
    ]
  },
  {
    text: "A decision benefits the present but weakens the future.",
    category: "Strategy",
    options: [
      { text: "Choose present",                       traits: { cunning:2 } },
      { text: "Choose future",                        traits: { wisdom:2 } },
      { text: "Shift impact",                         traits: { strategy:2 } },
      { text: "Avoid decision",                       traits: { diplomacy:2 } }
    ]
  },
  {
    text: "A group demands justice you cannot fully deliver.",
    category: "Justice",
    options: [
      { text: "Give partial justice",                 traits: { compassion:2 } },
      { text: "Delay justice",                        traits: { cunning:2 } },
      { text: "Redefine justice",                     traits: { authority:2 } },
      { text: "Ignore demands",                       traits: { military:2 } }
    ]
  },
  {
    text: "Your enemies respect you — but your allies fear you.",
    category: "Power",
    options: [
      { text: "Change allies",                        traits: { diplomacy:2 } },
      { text: "Change behavior",                      traits: { compassion:2 } },
      { text: "Use both dynamics",                    traits: { cunning:2 } },
      { text: "Ignore both",                          traits: { authority:2 } }
    ]
  },
  {
    text: "You can maintain control by limiting choices.",
    category: "Control",
    options: [
      { text: "Limit choices strictly",               traits: { authority:2 } },
      { text: "Expand choices",                       traits: { compassion:2 } },
      { text: "Control perception of choice",         traits: { cunning:2 } },
      { text: "Remove structure entirely",            traits: { wisdom:2 } }
    ]
  },
  {
    text: "You can shape reality — but not truth.",
    category: "Philosophy",
    options: [
      { text: "Shape reality",                        traits: { authority:2 } },
      { text: "Seek truth",                           traits: { wisdom:2 } },
      { text: "Balance both",                         traits: { diplomacy:2 } },
      { text: "Ignore both",                          traits: { military:2 } }
    ]
  },
  {
    text: "Your identity becomes your limitation.",
    category: "Psychology",
    options: [
      { text: "Reinforce it",                         traits: { authority:2 } },
      { text: "Break it",                             traits: { cunning:2 } },
      { text: "Redefine it",                          traits: { wisdom:2 } },
      { text: "Hide it",                              traits: { strategy:2 } }
    ]
  },
  {
    text: "Choose between legacy and survival.",
    category: "Legacy",
    options: [
      { text: "Build legacy",                         traits: { wisdom:2 } },
      { text: "Ensure survival",                      traits: { military:2 } },
      { text: "Delay both",                           traits: { strategy:2 } },
      { text: "Reject both",                          traits: { cunning:2 } }
    ]
  },
  {
    text: "A decision defines you forever.",
    category: "Legacy",
    options: [
      { text: "Accept that",                          traits: { wisdom:2 } },
      { text: "Avoid the decision",                   traits: { strategy:2 } },
      { text: "Shift responsibility",                 traits: { cunning:2 } },
      { text: "Change its meaning later",             traits: { authority:2 } }
    ]
  },
  {
    text: "You can win without being recognized.",
    category: "Strategy",
    options: [
      { text: "Accept invisibility",                  traits: { wisdom:2 } },
      { text: "Claim recognition",                    traits: { authority:2 } },
      { text: "Share credit strategically",           traits: { diplomacy:2 } },
      { text: "Hide influence completely",            traits: { cunning:2 } }
    ]
  },
  {
    text: "Your power depends on others believing in it.",
    category: "Control",
    options: [
      { text: "Strengthen belief",                    traits: { authority:2 } },
      { text: "Prove power through action",           traits: { military:2 } },
      { text: "Remove dependency",                    traits: { wisdom:2 } },
      { text: "Let belief collapse",                  traits: { cunning:2 } }
    ]
  },
  {
    text: "A rival reflects everything you avoid in yourself.",
    category: "Psychology",
    options: [
      { text: "Destroy them",                         traits: { military:2 } },
      { text: "Learn from them",                      traits: { wisdom:2 } },
      { text: "Ignore them",                          traits: { authority:2 } },
      { text: "Become them",                          traits: { cunning:2 } }
    ]
  },
  {
    text: "You can control people — or free them.",
    category: "Philosophy",
    options: [
      { text: "Control them",                         traits: { authority:2 } },
      { text: "Free them",                            traits: { compassion:2 } },
      { text: "Alternate both",                       traits: { diplomacy:2 } },
      { text: "Remove yourself",                      traits: { wisdom:2 } }
    ]
  },
  {
    text: "End conflict by removing its cause — or its memory.",
    category: "War",
    options: [
      { text: "Remove cause",                         traits: { compassion:2 } },
      { text: "Remove memory",                        traits: { cunning:2 } },
      { text: "Control both",                         traits: { authority:2 } },
      { text: "Let conflict remain",                  traits: { military:2 } }
    ]
  },
  {
    text: "Your existence maintains order — but prevents change.",
    category: "Legacy",
    options: [
      { text: "Maintain order",                       traits: { authority:2 } },
      { text: "Allow change",                         traits: { compassion:2 } },
      { text: "Control transition",                   traits: { strategy:2 } },
      { text: "Step aside entirely",                  traits: { wisdom:2 } }
    ]
  },
  {
    text: "Your army is outnumbered 3 to 1 on open ground.",
    category: "War",
    options: [
      { text: "Charge before they organize",          traits: { military:2 } },
      { text: "Fall back to better terrain",          traits: { strategy:2 } },
      { text: "Send a false surrender offer",         traits: { cunning:2 } },
      { text: "Split and hit from two sides",         traits: { wisdom:2 } }
    ]
  },
  {
    text: "A city has been under siege for months. Supplies running low on both sides.",
    category: "War",
    options: [
      { text: "Final assault before you weaken",      traits: { military:2 } },
      { text: "Wait them out",                        traits: { strategy:2 } },
      { text: "Offer terms and enter peacefully",     traits: { diplomacy:2 } },
      { text: "Cut their last supply line secretly",  traits: { cunning:2 } }
    ]
  },
  {
    text: "Enemy cavalry is faster. Your infantry is stronger.",
    category: "War",
    options: [
      { text: "Force them into narrow terrain",       traits: { strategy:2 } },
      { text: "Bait them into a trap",                traits: { cunning:2 } },
      { text: "Hit their supply lines instead",       traits: { wisdom:2 } },
      { text: "Meet them directly and absorb losses", traits: { military:2 } }
    ]
  },
  {
    text: "You have one naval fleet. The enemy has two.",
    category: "War",
    options: [
      { text: "Strike one fleet before they unite",   traits: { military:2 } },
      { text: "Destroy their port instead",           traits: { strategy:2 } },
      { text: "Blockade and starve them",             traits: { cunning:2 } },
      { text: "Negotiate from this position",         traits: { diplomacy:2 } }
    ]
  },
  {
    text: "Victory is certain but will cost 40% of your army.",
    category: "War",
    options: [
      { text: "Pay the cost",                         traits: { military:2 } },
      { text: "Find a slower but cheaper path",       traits: { strategy:2 } },
      { text: "Trick the enemy into surrendering",    traits: { cunning:2 } },
      { text: "Protect your men above the victory",   traits: { compassion:2 } }
    ]
  },
  {
    text: "The enemy offers peace after a battle you barely won.",
    category: "War",
    options: [
      { text: "Accept and recover",                   traits: { diplomacy:2 } },
      { text: "Reject and press advantage",           traits: { military:2 } },
      { text: "Accept but prepare secretly",          traits: { cunning:2 } },
      { text: "Set terms that weaken them long term", traits: { strategy:2 } }
    ]
  },
  {
    text: "Your army is winning but morale is breaking from a long campaign.",
    category: "War",
    options: [
      { text: "Push to finish before collapse",       traits: { military:2 } },
      { text: "Rest and rebuild morale first",        traits: { compassion:2 } },
      { text: "Promise reward at final victory",      traits: { authority:2 } },
      { text: "Rotate units to hide the weakness",    traits: { cunning:2 } }
    ]
  },
  {
    text: "A fortified city cannot be taken by force. It can only fall from within.",
    category: "War",
    options: [
      { text: "Bribe someone inside",                 traits: { cunning:2 } },
      { text: "Cut food and water supply",            traits: { strategy:2 } },
      { text: "Psychological pressure on civilians",  traits: { authority:2 } },
      { text: "Storm the walls regardless",           traits: { military:2 } }
    ]
  },
  {
    text: "Your cavalry has broken the enemy line but gone too far ahead.",
    category: "War",
    options: [
      { text: "Send infantry to support immediately", traits: { military:2 } },
      { text: "Let them fight and encircle the enemy",traits: { strategy:2 } },
      { text: "Signal retreat before they are cut off",traits: { wisdom:2 } },
      { text: "Use the gap to strike the enemy center",traits: { cunning:2 } }
    ]
  },
  {
    text: "You can win this naval battle by ramming — but risk losing your own ship.",
    category: "War",
    options: [
      { text: "Ram and accept the risk",              traits: { military:2 } },
      { text: "Maneuver and wait for better position",traits: { strategy:2 } },
      { text: "Board their ship instead",             traits: { cunning:2 } },
      { text: "Withdraw and regroup the fleet",       traits: { wisdom:2 } }
    ]
  },
  {
    text: "Rain has made the battlefield mud. Your heavy cavalry is useless.",
    category: "War",
    options: [
      { text: "Delay the battle entirely",            traits: { strategy:2 } },
      { text: "Use archers and infantry only",        traits: { wisdom:2 } },
      { text: "Attack anyway — surprise matters more",traits: { military:2 } },
      { text: "Lure enemy onto worse ground",         traits: { cunning:2 } }
    ]
  },
  {
    text: "A siege has lasted a year. Your men want to go home.",
    category: "War",
    options: [
      { text: "Hold — victory is close",              traits: { authority:2 } },
      { text: "Rotate troops to keep morale",         traits: { compassion:2 } },
      { text: "One final brutal assault to end it",   traits: { military:2 } },
      { text: "Negotiate surrender with dignity",     traits: { diplomacy:2 } }
    ]
  },
  {
    text: "Your supply ships have been intercepted. Army has 10 days of food.",
    category: "War",
    options: [
      { text: "Attack immediately and live off the land", traits: { military:2 } },
      { text: "Retreat before starvation sets in",    traits: { strategy:2 } },
      { text: "Steal enemy supplies in a night raid", traits: { cunning:2 } },
      { text: "Negotiate — hunger changes everything",traits: { diplomacy:2 } }
    ]
  },
  {
    text: "Enemy archers are destroying your advancing infantry.",
    category: "War",
    options: [
      { text: "Charge fast to close the distance",    traits: { military:2 } },
      { text: "Flank with cavalry from the side",     traits: { strategy:2 } },
      { text: "Use your own archers to suppress",     traits: { wisdom:2 } },
      { text: "Advance under cover of fire and smoke",traits: { cunning:2 } }
    ]
  },
  {
    text: "You have captured the enemy commander alive mid-battle.",
    category: "War",
    options: [
      { text: "Execute him to break enemy morale",    traits: { military:2 } },
      { text: "Use him to negotiate surrender",       traits: { diplomacy:2 } },
      { text: "Parade him to demoralize their army",  traits: { authority:2 } },
      { text: "Release him — earn loyalty and fear",  traits: { cunning:2 } }
    ]
  },
];