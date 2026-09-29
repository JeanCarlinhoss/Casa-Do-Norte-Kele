function adicionarAoCarrinho(nome, preco) {
  const item = { nome: nome, preco: preco };
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(item);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(nome + " adicionado ao carrinho!");
  mostrarCarrinho();
}
function limparHistorico() {
  // Pergunta pra não limpar sem querer
  if (confirm("Tem certeza que quer limpar o pedido?")) {
    localStorage.removeItem('carrinho');
    // Ou localStorage.clear() se quiser limpar tudo
    
    // Atualiza a tela
    mostrarCarrinho();
    
    alert("Pedido limpo! Carrinho vazio agora.");
  }
}

  const item = { nome: nome, preco: preco };
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(item);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(nome + " adicionado ao carrinho!");
  mostrarCarrinho();

function mostrarCarrinho() { 
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let lista = document.getElementById('lista-carrinho');
  let totalEl = document.getElementById('total');
  if(!lista) return;
  
  lista.innerHTML = "";
  let total = 0;
  carrinho.forEach(item => {
    lista.innerHTML += `<li>${item.nome} - R$ ${item.preco}</li>`;
    total += item.preco;
  });
  totalEl.innerText = total.toFixed(2);
}

function finalizarPedido() {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  if(carrinho.length === 0){ alert("Carrinho vazio!"); return; }
  
  let mensagem = "Olá Kelé! Quero pedir:\n";
  let total = 0;
  carrinho.forEach(item => {
    mensagem += `- ${item.nome} R$ ${item.preco}\n`;
    total += item.preco;
  });
  mensagem += `Total: R$ ${total.toFixed(2)}`;

  let link = "https://wa.me/5538992614467?text=" + encodeURIComponent(mensagem);
  window.open(link, "_blank");
}

// Mostra o carrinho quando abre a página
mostrarCarrinho();