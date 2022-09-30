let cart = JSON.parse(localStorage.getItem('carrito'));

const cartLleno = [...cart];

const renderCart = ()=> {
  let html = '';
  for (let i = 0; i < cartLleno.length; i++) {
      html += `
      <div class="contentCart">
        <img src="${cartLleno[i].img}">
        <h5 class="card-title">${cartLleno[i].tipo} |</h5>
        <p class="card-text">${cartLleno[i].modelo}</p>
        <p class="card-text"><b> | $${cartLleno[i].precio}</b></p>
        <img class="xRemove" src="../assets/borrar.svg" onclick="removeFromCart(${i})"></img>
      </div>`
  };
  document.getElementById('mostrarProducto').innerHTML = html;
};

const llenoVacio = ()=> {
  if (cartLleno.length==0) {
    document.getElementById('mostrarProducto').innerHTML = '<h2>El carrito esta vacio</h2>';
    document.getElementById('total').innerHTML = '';
  } else {
    renderCart();
  };
}
llenoVacio();
  
//----------------precio-------------------------------------//
  const alertaCompra = ()=> {
    Swal.fire('Gracias por tu compra!');
  }
  const renderPrecio = ()=> {
    let html =[];
    for (let i = 0; i < cartLleno.length; i++) {
      parseInt(html.push(cartLleno[i].precio))
    };
    
    let resultado = 0;
    for (let i = 0; i <html.length; i++){
      resultado += html[i];
    };
    document.getElementById('sumaTotal').innerHTML = `<b>$${resultado}</b><button onclick="alertaCompra()" class="btnComprar">Comprar</button>`;
  };

  //-----------------------------------------------------------//

const removeFromCart = (i) => {
  let arrayStorage = cartLleno;
  arrayStorage.splice(i, 1);
  let arrayStorageJSON = JSON.stringify(arrayStorage);
  localStorage.setItem('carrito', arrayStorageJSON);
  renderCart();
  renderPrecio();
  llenoVacio();
};

renderPrecio();