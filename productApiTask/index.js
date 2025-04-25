async function getProductData() {
  let response = await fetch("https://fakestoreapi.com/products");

  let data = await response.json();
  console.log(data);

  let parentDiv = document.querySelector(".parent");

  data.forEach((product) => {
    let productCard = document.createElement("div");

    let productImage = document.createElement("img");
    productImage.src = product.image;

    let productTitle = document.createElement("h1");
    productTitle.textContent = product.title;

    let productDescription = document.createElement("h2");
    productDescription.textContent = product.description;

    let productPrice = document.createElement("p");
    productPrice.textContent = product.price;

    productCard.append(
      productImage,
      productTitle,
      productDescription,
      productPrice
    );

    productCard.classList.add("product-card");

    parentDiv.append(productCard);
  });
}

getProductData();
