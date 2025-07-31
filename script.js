const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  centeredSlides:true,
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },

 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

function openCart() {
  document.getElementById("cartSidebar").classList.add("open");
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
}


let cartItems = [];

function addToCart(name) {
  cartItems.push(name);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartItems");
  cartList.innerHTML = ""; 

  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}
