fetch('/api/products')
  .then(res => res.json())
  .then(products => {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <img src="${product.image}" width="100">
      `;
      productList.appendChild(productDiv);
    });
  })
  .catch(err => console.log(err));