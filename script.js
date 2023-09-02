let idveiculo = 0;
class Veiculo {
  constructor(modelo, ano, cor, preço) {
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.preço = preço;
  }
}

class Locadora {
  constructor() {
    this.Vdisponiveis = []
    this.Valugados = []
  }
  LerDados(){
    const modeloV = document.getElementById("modeloV");
    const anoV = document.getElementById("anoV");
    const corV = document.getElementById("corV");
    const precoV = document.getElementById("precoV");
  }
  Cadastrar() {
    locadora.LerDados()
    idveiculo++
    const veiculo = new Veiculo(
      modeloV,anoV,corV,precoV)
      locadora.Vdisponiveis.push(veiculo)
      locadora.CriarCard(idveiculo)
  }
  CriarCard(idV){
    locadora.LerDados()
    const cardbody = document.createElement("div");
    cardbody.classList.add("card-body");
    
    //card
    const card = document.createElement("div");
    card.classList.add("card");
    card.id=idveiculo;
  
    //modelo
    const titulocard = document.createElement("h5");
    titulocard.classList.add("card-tittle");
    titulocard.textContent = modeloV.value
    cardbody.appendChild(titulocard);
    
    //ano
    const ano =document.createElement("div");
    ano.textContent=`Ano: ${anoV.value}`
    cardbody.appendChild(ano)

    //cor
    const cor =document.createElement("div");
    cor.textContent=`Cor: ${corV.value}`
    cardbody.appendChild(cor)

    //preço
    const preco =document.createElement("div");
    preco.textContent=`Preço: R$${precoV.value},00`
    cardbody.appendChild(preco)

    //botão
    const botao1=document.createElement("button");
    botao1.classList.add("btn");
    botao1.classList.add("btn-success")
    botao1.textContent = "Selecionar"
    botao1.setAttribute(
      "onclick","locadora.Alugar("+idV+")")
    botao1.id="bot"+idV
    cardbody.appendChild(botao1)
    
    card.appendChild(cardbody);
    disponiveis.appendChild(card);
  }
  
  Alugar(idV) { 
    const veiculodisponivel = document.getElementById(idV);
    const veiculoalugado=veiculodisponivel.cloneNode(true);
    const alugados=document.getElementById("alugados");
    alugados.appendChild(veiculoalugado)
    veiculodisponivel.remove()
    
    const botao=document.getElementById("bot"+idV);
    botao.setAttribute(
      "onclick","locadora.Retornar("+idV+")")
  }
  Retornar(idV) {
    const veiculoalugado = document.getElementById(idV);
    const veiculodisponivel=veiculoalugado.cloneNode(true);
    const disponiveis=document.getElementById("disponiveis");
    disponiveis.appendChild(veiculodisponivel)
    
    veiculoalugado.remove()

    const botao=document.getElementById("bot"+idV);
    botao.setAttribute(
      "onclick","locadora.Alugar("+idV+")")
  }
}

const locadora=new Locadora()