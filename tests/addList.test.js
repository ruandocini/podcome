const addlist = require('./addList');

test('Lista de pratos a ser mostrada', () => {
    expect(addlist([{nomeDoPrato: 'Pizza', preco: 'R$ 20,00'}, {nomeDoPrato: 'Pão', preco: 'R$ 2,00'}])).toBe("<div class='card'><h2> Nome do prato: Pizza</h2><p> Preço: R$ 20,00</p></div><div class='card'><h2> Nome do prato: Pão</h2><p> Preço: R$ 2,00</p></div>");
});

test('Lista vazia', () => {
    expect(addlist([])).toBe("");
});