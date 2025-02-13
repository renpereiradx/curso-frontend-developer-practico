const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburgerMenu = document.querySelector(".menu");
const carritoMenu = document.querySelector(".navbar-shopping-cart");
const productCartContainer = document.querySelector("#shoppingCartContainer");
const productDetail = document.querySelector("#singleProductDetail");
const productDetailClose = document.querySelector(".product-detail-close");
const cardsContainer = document.querySelector(".cards-container");
let productList = [];

/* * Se agregan controladores de eventos a los elementos
    @param MyParam es un parametro
*/
menuEmail.addEventListener("click", toggleDesktopMenu);
hamburgerMenu.addEventListener("click", toggleMobileMenu);
carritoMenu.addEventListener("click", toggleProductCartContainer);
productDetailClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isProductCartContainerClosed = productCartContainer.classList.contains("inactive");
  if (!isProductCartContainerClosed) {
    productCartContainer.classList.toggle("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isProductCartContainerClosed = productCartContainer.classList.contains("inactive");
  if (!isProductCartContainerClosed) {
    productCartContainer.classList.toggle("inactive");
  }
  const isProductDetailContainer =productDetail.classList.contains("inactive");
if (!isProductDetailContainer) {
  productDetail.classList.add('inactive');
}

  mobileMenu.classList.toggle("inactive");
}

function toggleProductCartContainer() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isProductDetailContainer =productDetail.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.toggle("inactive");
  }
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.toggle("inactive");
  }
  if (!isProductDetailContainer) {
    productDetail.classList.add('inactive');  
  }
  productCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  productCartContainer.classList.add('inactive');
  productDetail.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetail.classList.add('inactive');
}

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Book",
  price: 15,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Monitor",
  price: 420,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfContainer = document.createElement("div");
    productInfContainer.classList.add("product-info");

    const productInf = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;
    productInf.appendChild(productPrice);
    productInf.appendChild(productName);
    productInfContainer.appendChild(productInf);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productInfoFigure.appendChild(productImgCart);
    productInfContainer.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfContainer);
    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);