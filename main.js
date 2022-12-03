const btn = document.querySelector ("#send");



const swiperContent = document.getElementById("myjs-swiper-content");

const pessoasDaFamila = [
  {
    cor: "#7d2ae8",
    nome: "Edith Rainha",
    apelido: "Vó",
    image: "edith.jpeg",
    tamanhos: {
      camisa: "G",
      calca: "42",
      tenis: "36",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Claudia",
    apelido: "Tia Claudia",
    image: "claudia.jpeg",
    tamanhos: {
      camisa: "P",
      calca: "38",
      tenis: "34",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Patricia",
    apelido: "Tia Patinha",
    image: "patricia.jpeg",
    tamanhos: {
      camisa: "M",
      calca: "40",
      tenis: "37",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Cristina",
    apelido: "Tia Cris",
    image: "cris.jpeg",
    tamanhos: {
      camisa: "G",
      calca: "46",
      tenis: "36",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Luciana",
    apelido: "Tia Lu",
    image: "luciana.jpeg",
    tamanhos: {
      camisa: "G",
      calca: "42",
      tenis: "36",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Silvio",
    apelido: "Silvão",
    image: "silvio.jpeg",
    tamanhos: {
      camisa: "M",
      calca: "42",
      tenis: "41",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Valdemir",
    apelido: "Coquinho",
    image: "coquinho.jpeg",
    tamanhos: {
      camisa: "G",
      calca: "40",
      tenis: "40",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Phelipe",
    apelido: "Ph ou Porcão",
    image: "ph.jpeg",
    tamanhos: {
      camisa: "GG",
      calca: "46",
      tenis: "41",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Marianne",
    apelido: "Mari",
    image: "marianne.jpeg",
    tamanhos: {
      camisa: "M",
      calca: "38",
      tenis: "36",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Liz Maria",
    apelido: "Lizoca",
    image: "lizoca.png",
    tamanhos: {
      camisa: "6",
      calca: "3",
      tenis: "23",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Pedro",
    apelido: "Pedrinho",
    image: "pedro.jpeg",
    tamanhos: {
      camisa: "10",
      calca: "10",
      tenis: "34",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Alessandra",
    apelido: "Dudu",
    image: "dudu.jpeg",
    tamanhos: {
      camisa: "M/G",
      calca: "42",
      tenis: "36",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Marcelo",
    apelido: "Marcelo kk",
    image: "marcelo.jpeg",
    tamanhos: {
      camisa: "M",
      calca: "42",
      tenis: "42",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Bernardo",
    apelido: "Bê",
    image: "bernardo.jpeg",
    tamanhos: {
      camisa: "8",
      calca: "8",
      tenis: "29/30",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Sofia",
    apelido: "Sosô",
    image: "sofia.jpeg",
    tamanhos: {
      camisa: "4",
      calca: "4",
      tenis: "25",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Lethicia",
    apelido: "Lê",
    image: "lethicia.jpeg",
    tamanhos: {
      camisa: "M",
      calca: "40/42",
      tenis: "36",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Adriano",
    apelido: "Didico",
    image: "adriano.jpeg",
    tamanhos: {
      camisa: "G",
      calca: "44",
      tenis: "42",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Raiany",
    apelido: "Ray ou Fofuxa",
    image: "raiany.jpeg",
    tamanhos: {
      camisa: "GG",
      calca: "GG",
      tenis: "38/39",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Ana Clara",
    apelido: "Ana",
    image: "ana.jpeg",
    tamanhos: {
      camisa: "G",
      calca: "46",
      tenis: "39",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Gabriel",
    apelido: "Minha vida e meu tudo",
    image: "gabriel.jpeg",
    tamanhos: {
      camisa: "G",
      calca: "42",
      tenis: "40",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Mauricio",
    apelido: "Mauricião",
    image: "mauricio.jpeg",
    tamanhos: {
      camisa: "G",
      calca: "40",
      tenis: "41",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Álvaro",
    apelido: "Alvinho",
    image: "alvinho.jpeg",
    tamanhos: {
      camisa: "G",
      calca: "44",
      tenis: "39",
    },
  },
  {
    cor: "#7d2ae8",
    nome: "Eduardo",
    apelido: "Duduco",
    image: "edu.jpeg",
    tamanhos: {
      camisa: "G",
      calca: "38",
      tenis: "41",
    },
  },
    {
      cor: "#7d2ae8",
      nome: "Bruno",
      apelido: "Pirulito",
      image: "bruno.jpeg",
      tamanhos: {
        camisa: "M",
        calca: "42",
        tenis: "40",
      },
    },
      {
        cor: "#7d2ae8",
        nome: "Giovanna",
        apelido: "Giovanna",
        image: "giovana.jpeg",
        tamanhos: {
          camisa: "P",
          calca: "36",
          tenis: "35",
        },
      },
      

];

const html_card = (pessoa) => `
<div class="swiper-slide card">
<div class="card-content">
  <div class="image">
    <img src="./imgs/${pessoa.image}" alt="" />
  </div>

  

  <div class="name-profession">
    <span class="name">${pessoa.nome}</span>
    <span class="name-profession">${pessoa.apelido}</span>
  </div>

  <div class="rating">
    <i class="fa-solid fa-shirt"></i>
    <img src="./imgs/sneakers.png" width="22.5px" height="18.13px" />
    <img src="./imgs/jeans.png" width="22.5px" height="18.13px" />
  </div>
  <div class="button">
    <button class="aboutMe" onclick="openModalUser('${pessoa.nome}')" >Mais informaçoes</button>
  </div>
</div>
</div>
`;

const modalHtml = ({ nome, apelido, tamanhos }) => `
<div id="close-modal" class="closed-icon" onclick="closedModalUser()"><i class="fa-solid fa-xmark fa-2xl"></i></div>
      <div class="name-profession modal-header">
        <span class="name">${nome}</span>
        <span class="name-profession">${apelido}</span>
      </div>
      <div class="modal-body">
        <div class="sizes">
          <div class="item-size">
            <i class="fa-solid fa-shirt fa-2xl"></i>
            <span>Tamanho ${tamanhos.camisa}</span>
          </div>
          <div class="item-size">
            <img src="./imgs/jeans.png" />
            <span>Tamanho ${tamanhos.calca}</span>
          </div>
          <div class="item-size">
            <img src="./imgs/sneakers.png" />
            <span>Tamanho ${tamanhos.tenis}</span>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <div class="name-profession footer">
          <span class="name">Sobre</span>
          <span class="name-profession">By Porcolinos</span>
        </div>
      </div>
`;

let filter = "";

const sortLetters = (array) => {
  return array.sort((a, b) => {
    if (a.nome < b.nome) return -1;
    if (a.name > b.name) return 1
    return 0;
  });
}

function init() {
  let todoHtml = "";
  pessoasDaFamila.forEach((pessoa) => {
    const ap = pessoa.apelido.toLowerCase().replace("á", "a");
    const nome = pessoa.nome.toLowerCase().replace("á", "a");
    if(ap.includes(filter) || nome.includes(filter)){
      todoHtml = todoHtml + html_card(pessoa);
      }
  });

  swiperContent.innerHTML = todoHtml;
}

init();

const closedModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const modalIsClosed = modal.style.display.includes("none");
const bgcolor = document.getElementById("bg-modal");

const openModalUser = (nome) => {
  const pessoa = pessoasDaFamila.find((pessoa) => pessoa.nome === nome);
  modal.innerHTML = modalHtml(pessoa);
  modal.style.display = "block";
  bgcolor.style.display = "block"  
};





const closedModalUser = () => {
  modal.style.display = "none";
  bgcolor.style.display = "none"
}

bgcolor.addEventListener("click", closedModalUser)
closedModal.addEventListener("click", closedModalUser);
const input = document.getElementById("inputBusca");
input.addEventListener("input", (event) => {
  filter = event.target.value.toLowerCase().trim();
  init()
})