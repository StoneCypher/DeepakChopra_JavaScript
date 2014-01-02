var Data = {

  starts     : ["Experiential truth ", "The physical world ", "Non-judgment ", "Quantum physics "],
  middles    : ["nurtures ", "projects onto ", "imparts reality to ", "constructs with "],
  qualifiers : ["abundance of ", "the barrier of ", "self-righteous ", "potential "],
  finishes   : ["marvel.", "choices.", "creativity.", "actions."]

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