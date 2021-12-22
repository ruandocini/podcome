function NewRest() {
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("restaurant_name").value;
    const address = document.getElementById("restaurant_address").value;
    const contact = document.getElementById("restaurant_contact").value;
    let price = '';
    let restriction = '';
    let delivery = false;

    infos = JSON.stringify({
        "nome":name,
    });

    return infos;

}