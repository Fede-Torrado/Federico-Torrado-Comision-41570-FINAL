let cart = JSON.parse(localStorage.getItem('carrito'));

const cartLleno = [...cart];

const renderCart = ()=> {
    let html = '';
    for (let i = 0; i < cartLleno.length; i++) {
        html += `
        <div class="card img-ani">
        <img src="${cartLleno[i].img}">
        <div class="card-body">
          <h5 class="card-title">${cartLleno[i].tipo}</h5>
          <p class="card-text">${cartLleno[i].modelo}.</p>
          <p class="card-text">$${cartLleno[i].precio}.</p>
          <p class="card-text">Disponible: ${cartLleno[i].disponible}.</p>
          <img src="../assets/borrar.svg" onclick="removeFromCart(${i})" width=40px></img>
        </div>
      </div>`
    };

    document.getElementById('mostrarProducto').innerHTML = html;
  };

let vacio = document.getElementById('mostrarProducto').innerHTML = '<h2>El carrito esta vacio</h2>';

cartLleno == '' ? vacio : renderCart();

const removeFromCart = (i) => {
  let arrayStorage = cartLleno;
  arrayStorage.splice(i, 1);
  let arrayStorageJSON = JSON.stringify(arrayStorage);
  localStorage.setItem('carrito', arrayStorageJSON);
  renderCart();
};