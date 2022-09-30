
const producto = [];
let cart = JSON.parse(localStorage.getItem('carrito'));

const renderProducts = ()=> {
fetch ('../data.json')
.then ((res) => res.json())
.then ((json) => {
  let html = '';
  for (let i = 0; i < json.length; i++) {
      producto.push (json[i]);
      html += `
      <div class="card img-ani">
      <img src="${json[i].img}">
      <div class="card-body">
        <h5 class="card-title">${json[i].tipo}</h5>
        <p class="card-text">${json[i].modelo}.</p>
        <p class="card-text">$${json[i].precio}.</p>
        <p class="card-text">Disponible: ${json[i].disponible}.</p>
        <a><button onclick="addToCart(${json[i].id})">Agregar al carrito</button></a>
      </div>
    </div>`
  };
  document.getElementById('gallery').innerHTML = html;
})
.catch ((e) =>{
  console.log(e);
}); 
};

const addToCart = (id) => {
  const productoCompleto = producto.find((item) => item.id == id);
  cart.push(productoCompleto);
  let storage = () =>{ 
    return localStorage.setItem('carrito', JSON.stringify(cart));}
  storage();
 
  Toastify({
    text: "Agregado al Carrito",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top",
    position: "left", 
    stopOnFocus: true, 
    style: {
      background: "#6e77a6",
    },
    onClick: function(){} 
  }).showToast();
    
};

renderProducts();

