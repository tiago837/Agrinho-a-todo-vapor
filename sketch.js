var img;

function preload(){
  img = loadImage("imagem.png");
}

function setup() {
  createCanvas(700, 700);
}

function draw() {
  //usando a imagem como fundo
  background(img)
   text("🌿", 350, 350); // Exibe o emoji no centro da tela
   text("🌿", 400, 500); // Exibe o emoji no centro da tela
   text("🌿", 500, 400); // Exibe o emoji no centro da tela
   text("🌿", 50, 150); // Exibe o emoji no centro da tela
   text("🌿", 200, 100); // Exibe o emoji no centro da tela
   text("🌿", 600, 100); // Exibe o emoji no centro da tela
   text("🌿", 250, 550); // Exibe o emoji no centro da tela
   text("🌿", 100, 350); // Exibe o emoji no centro da tela
   text("🌿", 350, 100); // Exibe o emoji no centro da tela
   text("🌿", 50, 600); // Exibe o emoji no centro da tela
}
{ img = loadImage("");
}