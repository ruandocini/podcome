global.fetch = jest.fn(() =>
    Promise.resolve({
            'lancheonete': {
                "nomeDoPrato": "suco-de-goiaba",
                "nomeDoRestaurante": "lancheonete",
                "preco": 10.0
            }
    })
);


const searchDishes = require('./searchDishes');

payload = {
        "nomeDoPrato": "suco-de-goiaba",
        "nomeDoRestaurante": "lancheonete",
        "preco": 10.0
    }

// it('Lista de pratos a ser mostrada',  async () => {
//     expect(await searchDishes('lancheonete')).toEqual(payload);
// });
