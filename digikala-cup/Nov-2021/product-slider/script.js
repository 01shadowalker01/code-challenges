// Elements
const nextBtn = document.querySelector(".js-next-btn");
const productCard = document.querySelector(".js-product-card");
const previousBtn = document.querySelector(".js-previous-btn");
const productCardLink = document.querySelector(".js-product-link");
const productCardImage = document.querySelector(".js-product-card-image");
const productCardTitle = document.querySelector(".js-product-card-title");
const productCardPrice = document.querySelector(".js-product-card-price");
const productCardDiscountOldPrice = document.querySelector(
  ".js-product-card-discount-old-price"
);
const productCardDiscountContainer = document.querySelector(
  ".js-product-card-discount-container"
);
const productCardDiscountPercentage = document.querySelector(
  ".js-product-card-discount-percentage"
);

const PRODUCTS = window.productsListData || [];

function showProduct(product) {
  if (!product) return;
  viewHistory.push(product);
  productCardTitle.innerHTML = product.title;
  productCardLink.setAttribute("href", product.url);
  productCardImage.setAttribute("src", product.image);
  productCard.setAttribute("data-product-id", product.id);
  productCardPrice.innerHTML = window.formatPrice(product.price.selling_price);
  if (product.price.discount_percent > 0) {
    productCardDiscountContainer.classList.remove("hidden");
    productCardDiscountOldPrice.innerHTML = window.formatPrice(
      product.price.main_price
    );
    productCardDiscountPercentage.innerHTML = `${window.formatPrice(
      product.price.discount_percent
    )}٪`;
  } else {
    productCardDiscountContainer.classList.add("hidden");
  }
}

let viewHistory = []
let intervalRef;

function init() {
  intervalRef = setInterval(showNextProduct, 4000);
}

function nextProduct() {
  if (intervalRef) clearInterval(intervalRef);
  showNextProduct()
  init()
}

function previousProduct() {
  if (intervalRef) clearInterval(intervalRef);
  showPreviousProduct();
  init();
}

function showNextProduct() {
  let randomIndex;
  const productCount = PRODUCTS.length -1;
  do {
    randomIndex = Math.floor(Math.random() * productCount);
  } while (isInLastTwo(PRODUCTS[randomIndex].id));
  showProduct(PRODUCTS[randomIndex]);
}

function showPreviousProduct() {
  showProduct(PRODUCTS[PRODUCTS.length -1]);
}

function isInLastTwo(randomProductId) {
  if (viewHistory.length < 2) return false; 
  const lastIndex = viewHistory.length -1;
  if (viewHistory[lastIndex].id == randomProductId
   || viewHistory[lastIndex -1].id == randomProductId) {
    return true;
  }
  return false;
}

// Start
init();
showProduct(PRODUCTS[PRODUCTS.length - 1]);
// Navigation
nextBtn.addEventListener("click", () => nextProduct());
previousBtn.addEventListener("click", () => previousProduct());
