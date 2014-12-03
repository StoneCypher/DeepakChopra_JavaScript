var Data = {

  starts : [
    "Experiential truth ",
    "Coffee ",
    "Geopolitics ",
    "Javascript ",
    "Glory ",
    "Espresso ",
    "Heuristic thought ",
    "Absinthe ",
    "Cave dwelling ",
    "Cuthbertine ",
    "Autonomous solace ",
    "Equestrian ",
    "Salacilic ",
    "Glitch Mob ",
    "Surrogate birth ",
    "Scurrilous ",
    "Rishathra ",
    "Irradiation ",
    "Megalomania ",
    "Solar radiation ",
    "Autosomy ",
    "Boba tea ",
    "Domain-specific languages ",
    "Practical economics ",
    "Activism ",
    "Dental plaque ",
    "Consternation ",
    "Vanilla nougat ",
    "The physical world ",
    "Sadness ",
    "Chicken ",
    "Non-judgment ",
    "Parsimony ",
    "Hodor ",
    "Salacity ",
    "Grunge music ",
    "Clarity ",
    "Antagonism ",
    "Heterodoxity ",
    "Erudition ",
    "Amalgamation ",
    "Remuneration ",
    "Primacy ",
    "Bran Van 3000 ",
    "The empty set ",
    "Bergamot marmalade ",
    "Amelioration ",
    "Apostasy ",
    "Reprobacy ",
    "Aquaculture ",
    "Infinity ",
    "Rubric ",
    "Email ",
    "Calamity ",
    "Loquacity ",
    "Honesty ",
    "Cosmology ",
    "Aperture science ",
    "Temporal quaquaversality ",
    "Derrida ",
    "Mellow vibe ",
    "Prosody ",
    "Selectivity ",
    "Unity ",
    "Good health ",
    "A quantum leap ",    // thanks Francis Veilleux-Gaboury
    "A clean brain ",
    "Entreaty ",
    "Brusque temperment ",
    "A flexible thought pattern ",
    "Insightful visage ",
    "Mindfulness in action ",
    "Automated translation ",
    "Facebook ",
    "Compassion ",
    "Altruism ",
    "Totality ",
    "Rhetorical training ",
    "Insoucinace ",
    "Dynamic mutative creation ",
    "The graspably non-considerable ",
    "Social science ",
    "Stone age philosophy ",
    "Interpretive dance ",
    "Meditative physics ",
    "Rambunctious cause ",
    "Biology ",
    "Multitudinality ",
    "Nascent luminence ",
    "True randomness ",
    "Deconstrutionist wisdom ",
    "Science intersecting religion ",
    "The role of a leader ",
    "The soul of a calm person ",
    "The idea of God ",
    "Mechanistic reaction ",
    "Semiotic involvement ",
    "Herotodeus ",
    "Quantum physics ",
    "Cerebrolinguistics ",
    "Dubstep as a metaphor for liberty "
  ],

  middles : [
    "nurtures ",
    "colocates by way of ",
    "unifies ",
    "stymies ",
    "separates ",
    "distributes widely ",
    "appreciates ",
    "deprecates ",
    "conglomerates ",
    "gives meaning to ",
    "displays ",
    "projects ",
    "permeates ",
    "eviscerates ",
    "clarifies ",
    "macerates ",
    "asceticizes ",
    "recapitulates ",
    "satisfies ",
    "sanctifies via ",
    "trivializes ",
    "justifies with ",
    "rarifies ",
    "enjoins ",
    "codifies ",
    "socializes by way of ",
    "promulgates ",
    "reclaims ",
    "disintegrates ",
    "integrates ",
    "racemizes ",
    "reduces ",
    "explores ",
    "dissociates from within ",
    "cosequences ",
    "exposes ",
    "masticates ",
    "builds, using ",
    "teaches through ",
    "projects onto ",
    "imparts reality to ",
    "colloquializes ",
    "loftializes ",
    "enriches ",
    "substratifies ",
    "loathes thoroughly ",
    "abrogates ",
    "conceptualizes ",
    "constructs with "
  ],

  qualifiers : [
    "abundance of ",
    "ostentatious ",
    "the barrier of ",
    "self-righteous ",
    "collective ",
    "species specific ",
    "heterodynamic ",
    "clarity within ",
    "epistemological ",
    "synchronistic ",
    "timely ",
    "unpredictable ",
    "unassailable ",
    "glassy eyed ",
    "dishonest ",
    "indefatigable ",
    "factual ",
    "highly descriptive ",
    "location based ",
    "describably pure ",
    "bounded ",
    "unbounded ",
    "trans-boundary ",
    "expedient ",
    "ontogenous ",
    "parallelizes ",
    "serendipitous ",
    "geopolitical ",
    "popular ",
    "advocatory ",
    "pluripotentialistic ",
    "atomized ",
    "rhythmatic ",
    "dimensional ",
    "sophist ",
    "Etruscan ",
    "reliquary ",
    "escapist ",
    "aerated ",
    "anarchist ",
    "conformist ",
    "erudite ",
    "epistemic ",
    "cromulent ",
    "poker faced ",
    "miniscule ",
    "Manichean ",
    "Hadrean ",
    "media driven ",
    "global ",
    "local ",
    "post-",
    "hyper-",
    "trans-",
    "extra-",
    "super-",
    "supra-",
    "world regarding ",
    "provably optimal ",
    "potential ",
    "munctional "
  ],

  finishes : [
    "marvel.",
    "choices.",
    "harmony.",
    "phylogeny.",
    "disharmony.",
    "traversal.",
    "ostracism.",
    "semiotics.",
    "deconstructionism.",
    "post-logic.",
    "escapism.",
    "criarchy.",
    "permaculture.",
    "platitudinality.",
    "creosophy.",
    "journalism.",
    "preternaturality.",
    "glossolalia.",
    "idolatry.",
    "conscience confluence.",
    "hapto-ergonomics.",
    "mental rigor.",
    "spiritual fortitude.",
    "wisdom.",
    "secret genius.",
    "inner brilliance.",
    "unseen internal gift.",
    "combobulation.",
    "transdoctrinal inference.",
    "creativity.",
    "significance.",
    "materialization.",
    "generosity.",
    "infinitude.",
    "plurality.",
    "asceticism.",
    "truism.",
    "horizontal scaling.",
    "monopoly.",
    "temerity.",
    "neo-Platonism."
    "monosophism.",
    "polyarchy.",
    "heredity.",
    "togetherness.",
    "voluminous reaction.",
    "joyous revelation.",
    "stimulation.",
    "numbing.",
    "intuition.",
    "actions."
  ]

};





function randFrom(X) {
  return X[Math.floor(Math.random() * X.length)];
}

function makeDC() {
  return randFrom(Data.starts) + randFrom(Data.middles) + randFrom(Data.qualifiers) + randFrom(Data.finishes);
}

function go() {
  document.getElementById('txt').innerHTML = '"' + makeDC() + '"';
}
