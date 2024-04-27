let palavra
let palavras

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatória();
  
}

function palavraAleatória() { 
  palavras = ["parasite","eve","TheEnd"];
  return random(palavras);}

function iniciarProj() {
  background("red");
  fill("black")
  textSize(60)
  textAlign(CENTER,CENTER)
}

function palavraParcial(minimo, maximo) { 
  let quantidadeletras = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(minimo,quantidadeletras);
 return parcial;
}

function draw() {
  
  iniciarProj();
  
 let textoAser = palavraParcial(0, width);
  text(textoAser,200,200);

  /* texto é desenhado de acordo com a posiçao do mouse na tela, pedaço por pedaço */
}