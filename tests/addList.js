function addList(x){
    var list = ''
    var item = 1;

    for (counter=0; counter<x.length; counter++) {
        list += "<div class='card'><h2> Nome do prato: " + x[counter].nomeDoPrato + "</h2>";
        list += "<p> Preço: " + x[counter].preco + '</p></div>';
    }

    return list;
}
module.exports = addList;