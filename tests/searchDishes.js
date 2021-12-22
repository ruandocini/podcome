function searchDishes(restaurantName){
    var dishList = [];
    pratos_call = 'http://127.0.0.1:8080/api/v1/prato/pratos'
    const restaurantes = fetch(pratos_call)
    .then(response => response.json())
    .then(function(restaurantes){
        for (counter=0; counter<restaurantes.length; counter++){
            if(restaurantName == restaurantes[counter].nomeDoRestaurante){
                const prato = {
                    nomeDoPrato:restaurantes[counter].nomeDoPrato,
                    nomeDoRestaurante:restaurantes[counter].nomeDoRestaurante,
                    preco:restaurantes[counter].preco
                };
            dishList.push(prato);
            }
        }
        return dishList;
    });
}
module.exports = searchDishes;