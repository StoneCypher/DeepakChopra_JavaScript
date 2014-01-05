
var Data = {

  starts : [
    "Experiential truth ", 
    "The physical world ", 
    "Non-judgment ", 
    "Infinity ", 
    "Unity ", 
    "Totality ", 
    "Social science ", 
    "Deconstrutionist wisdom ", 
    "Science intersecting religion ", 
    "The role of a leader ", 
    "The soul of a calm person ", 
    "The idea of God ", 
    "Mechanistic reaction ", 
    "Semiotic involvement ", 
    "Quantum physics "
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
    "justifies with ", 
    "builds, using ", 
    "teaches through ", 
    "projects onto ", 
    "imparts reality to ", 
    "constructs with "
  ],
  
  qualifiers : [
    "abundance of ", 
    "the barrier of ", 
    "self-righteous ", 
    "species specific ", 
    "heterodynamic ", 
    "epistemological ", 
    "synchronistic ", 
    "timely ", 
    "world regarding ", 
    "provably optimal ", 
    "potential "
  ],
  
  finishes : [
    "marvel.", 
    "choices.", 
    "harmony.", 
    "disharmony.", 
    "transdoctrinal inference.", 
    "creativity.", 
    "significance.", 
    "materialization.", 
    "generosity.", 
    "togetherness.", 
    "voluminous reaction.", 
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
