let total = 0;
limpar();

function adicionar(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let carrinho = document.getElementById('lista-produtos');
    let valorProdutos = valorProduto * quantidade;
    total += valorProdutos;
    let campoTotal = document.getElementById('valor-total')
    campoTotal.textContent = `R$${total}`;
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProdutos}</span>
  </section>`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'Total: R$0';
}