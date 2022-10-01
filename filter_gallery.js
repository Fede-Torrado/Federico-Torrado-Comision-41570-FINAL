function seleccionar (category) {
    if (category == 'tipi' || category == 'deco'){
      let productosFiltrados = producto.filter((item) => item.categoria == category);
      let htmlFiltro = '';
        for (let i = 0; i < productosFiltrados.length; i++) {
          htmlFiltro += `
          <div class="card img-ani">
          <img src="${productosFiltrados[i].img}">
          <div class="card-body">
            <h5 class="card-title">${productosFiltrados[i].tipo}</h5>
            <p class="card-text">${productosFiltrados[i].modelo}.</p>
            <p class="card-text">$${productosFiltrados[i].precio}.</p>
            <p class="card-text">Disponible: ${productosFiltrados[i].disponible}.</p>
            <a><button onclick="addToCart(${productosFiltrados[i].id})">Agregar al carrito</button></a>
          </div>
        </div>`
      };
    document.getElementById('gallery').innerHTML = htmlFiltro;
    }else{
      let allProducts = [...producto];
      let htmlAll = '';
        for (let i = 0; i < allProducts.length; i++) {
          htmlAll += `
          <div class="card img-ani">
          <img src="${allProducts[i].img}">
          <div class="card-body">
            <h5 class="card-title">${allProducts[i].tipo}</h5>
            <p class="card-text">${allProducts[i].modelo}.</p>
            <p class="card-text">$${allProducts[i].precio}.</p>
            <p class="card-text">Disponible: ${allProducts[i].disponible}.</p>
            <a><button onclick="addToCart(${allProducts[i].id})">Agregar al carrito</button></a>
          </div>
        </div>`
        };
        document.getElementById('gallery').innerHTML = htmlAll;
    };
  };














// const opciones = document.querySelector('select');

// opciones.addEventListener('change', elegir);

// function elegir(categoria) {
//     console.log('click en' + categoria);
//     if (opciones.value === 'Carpitas'){
        
//     }else if (opciones.value === 'Deco'){
//         console.log(opciones.value);
//     } else {
//         console.log('todas')
//     }
// }

