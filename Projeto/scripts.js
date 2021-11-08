/* Usuário e senha */
var user = "duda";
var password = "123";

/* Função para o login da página */
function Login() {
  /* Pega o valor digitado em usuário, coloca em letra minuscula e coloca dentro de uma variável */
  var usuario = document.querySelector("#usuario").value.toLowerCase();
  /* Pega o valor digitado em senha e coloca dentro de uma variável */
  var senha = document.querySelector("#senha").value;

  /*   Se o usuário digitado for igual ao que está cadastrado e a senha digitado for igual, abre uma página que é a página principal. Se forem diferentes aparece que os dados são incorretos
   */ if (user === usuario && password === senha) {
    window.open("menu.html");
  } else {
    alert("Dados incorretos, tente novamente.");
  }
}

/* Variavel para guardar a data de hoje */
var datetoday = new Date();

/* Função para mostrar o valor do ranger */
var inputvar = document.getElementById("slider"),
  number_mqs = document.getElementById("slideout");
inputvar.addEventListener(
  "input",
  function () {
    number_mqs.innerHTML = inputvar.value;
  },
  false
);

/* Função para mostrar a foto da tag quando for apertado*/
function FotoTag(id) {
  var imghttp = new XMLHttpRequest();
  imghttp.onreadystatechange = function () {
    if (imghttp.readyState == 4 && imghttp.status == 200) {
      document.getElementById("tags").innerHTML = imghttp.responseText;
    }
  };
  /*   Se o id da imagem for igual a title, abre o documento fototitle e assim por diante*/
  if (id == "Title") {
    imghttp.open("GET", "FotoTitle.html", true);
  } else if (id == "Lista") {
    imghttp.open("GET", "FotoLista.html", true);
  } else {
    imghttp.open("GET", "FotoTable.html", true);
  }
  imghttp.send();
}

/* Função para aparecer qual valor a pessoa selecionou */
function choiceMade(choice) {
  alert("Você selecionou: " + choice);
}

/* Função de data */
function showDate() {
  var showDate = document.getElementById("datetoday");
  showDate.innerHTML += datetoday.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* Procurar por todos os elementos da classe card */
const cards = document.querySelectorAll(".card");
/* Procurar por todos os elementos da classe dropzone (lugares para soltar) */
const dropzones = document.querySelectorAll(".dropzone");

/* Eventos - Para cada um dos cards colocar eventos.  */
cards.forEach((card) => {
  /* Disparado quando o arrasto começa. */
  card.addEventListener("dragstart", dragstart);
  /* Quando o elemento está sendo arrastado ao redor.  */
  card.addEventListener("drag", drag);
  /*Disparado quando o arrasto para.*/
  card.addEventListener("dragend", dragend);
});

/* Função para quando o arrasto começa. */
function dragstart() {
  /* Para mudar de cor quando passar o card em cima*/
  dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));
  /*Para chamar o is-dragging no CSS enquanto estiver mexendo (mudar o cursor e opacidade mostrando no fundo)*/
  this.classList.add("is-dragging");
}

/* Função para Quando o elemento está sendo arrastado ao redor. */
function drag() {}
/* Função para quando o arrasto para. */
function dragend() {
  /* Para parar de mudar de cor quando estiver mexendo no card*/
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));
  /*Para parar de chamar o is-dragging no CSS quando parar de ficar mexendo*/
  this.classList.remove("is-dragging");
}

/* Local para soltar os cartões */
/* Para cada um dos dropzones colocar eventos.  */
dropzones.forEach((dropzone) => {
  /*Entrou na zona para ser soltado*/
  dropzone.addEventListener("dragenter", dragenter);
  /*Está no local que precisa ser solto*/
  dropzone.addEventListener("dragover", dragover);
  /*Ele saiu do local que precisava ser solto*/
  dropzone.addEventListener("dragleave", dragleave);
  /* Foi solto */
  dropzone.addEventListener("drop", drop);
});

function dragenter() {}

function dragover() {
  /* This = dropzone */
  /* Para mudar de cor quando passar o card em cima*/
  this.classList.add("over");

  /*Pegar o cartão que está sendo com a class de is-dragging e guardar na variável*/
  const cardBeingDragged = document.querySelector(".is-dragging");
  /*Enquanto estiver no dragover, o card que está arrastado e guardamos na variável, já coloca dentro do dropzone*/
  this.appendChild(cardBeingDragged);

  /*Mudar o traço de cor conforme muda de lado*/
  switch (this.id) {
    case "do":
      toggleColor(cardBeingDragged, "yellow");
      break;
    case "doing":
      toggleColor(cardBeingDragged, "green");
      break;
    case "done":
      toggleColor(cardBeingDragged, "red");
      break;
  }
}

function dragleave() {
  /* Para parar de mudar de cor quando passar o card em cima*/
  this.classList.remove("over");
}

function drop() {
  /* Para parar de mudar de cor quando passar o card em cima*/
  this.classList.remove("over");
}

/*Tira a cor atual e coloca a nova cor*/
function toggleColor(card, color) {
  card.children[0].classList.remove("yellow");
  card.children[0].classList.remove("green");
  card.children[0].classList.remove("red");
  card.children[0].classList.add(color);
}
