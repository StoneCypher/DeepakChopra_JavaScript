var Data = {

  starts : [
    "Experiential truth ",
    "The physical world ",
    "Non-judgment ",
    "Infinity ",
    "Unity ",
    "Good health ",
    "Totality ",
    "Social science ",
    "Rambunctious cause ",
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
    "Quantum physics ",
    "Cerebrolinguistics ",
    "Dubstep as a metaphor for liberty "
  ],

  middles : [
    "nurtures ",
    "unifies ",
    "separates ",
    "distributes widely ",
    "appreciates ",
    "deprecates ",
    "conglomerates ",
    "gives meaning to ",
    "displays ",
    "permeates ",
    "clarifies ",
    "asceticizes ",
    "recapitulates ",
    "sanctifies via ",
    "trivializes ",
    "justifies with ",
    "rarifies ",
    "codifies ",
    "reduces ",
    "explores ",
    "dissociates from within ",
    "exposes ",
    "builds, using ",
    "teaches through ",
    "projects onto ",
    "imparts reality to ",
    "constructs with "
  ],
  
  qualifiers : [
    "abundance of ",
    "ostentatious ",
    "the barrier of ",
    "self-righteous ",
    "species specific ",
    "heterodynamic ",
    "epistemological ",
    "synchronistic ",
    "timely ",
    "unpredictable ",
    "unassailable ",
    "dishonest ",
    "factual ",
    "highly descriptive ",
    "location based ",
    "describably pure ",
    "bounded ",
    "unbounded ",
    "trans-boundary ",
    "expedient ",
    "ontogenous ",
    "geopolitical ",
    "popular ",
    "advocatory ",
    "pluripotentialistic" ,
    "media driven ",
    "global ",
    "local ",
    "world regarding ",
    "provably optimal ",
    "potential "
  ],
  
  finishes : [
    "marvel.",
    "choices.",
    "harmony.",
    "phylogeny.",
    "disharmony.",
    "traversal.",
    "ostracism.",
    "escapism.",
    "criarchy.",
    "platitudinality.",
    "creosophy.",
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
    "monopoly.",
    "monosophism.",
    "polyarchy.",
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
