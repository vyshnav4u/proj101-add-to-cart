import {
  defaultImageUrl,
  mobileImageUrl,
  watchImageUrl,
  laptopImageUrl,
} from './helpers/imageUrls.js';
import {
  defaultProductTitle,
  defaultProductDescription,
  defaultProductPrice,
} from './helpers/defaultProductDetails.js';

class Product {
  title;
  imageUrl;
  description;
  price;

  constructor(
    title = defaultProductTitle,
    imageUrl = defaultImageUrl,
    price = defaultProductPrice,
    description = defaultProductDescription
  ) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

class productList {
  products = [
    new Product('Phone', mobileImageUrl, 8000),
    new Product('Laptop', laptopImageUrl, 24000),
    new Product('Watch', watchImageUrl, 780),
    new Product(),
  ];

  constructor() {}

  render() {
    const app = document.getElementById('app');
    const productConatiner = document.createElement('ul');
    productConatiner.classList.add('prod-container');
    this.products.forEach((prod) => {
      const singleProduct = document.createElement('li');
      singleProduct.classList.add('single-prod');
      const prodImage = document.createElement('img');
      prodImage.setAttribute('src', prod.imageUrl);
      const prodTitle = document.createElement('h3');
      prodTitle.textContent = prod.title;
      const prodPrice = document.createElement('h5');
      prodPrice.textContent = prod.price;
      const addToCartBtn = document.createElement('button');
      addToCartBtn.textContent = 'Add to Cart';

      singleProduct.append(prodImage);
      singleProduct.append(prodTitle);
      singleProduct.append(prodPrice);
      singleProduct.append(addToCartBtn);
      productConatiner.append(singleProduct);
    });
    app.append(productConatiner);
  }
}

const app = new productList();
app.render();
