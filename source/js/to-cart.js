var orderButtons = document.querySelectorAll('.order-button');
var cartPopup = document.querySelector('.to-cart');
var closePopup = document.querySelector('.to-cart__button');
var overlay = document.querySelector(".modal-overlay");

for (var j=0; j<=orderButtons.length-1; j++) {
  orderButtons[j].addEventListener('click', function(evt){
  evt.preventDefault();
  if (!cartPopup.classList.contains('to-cart--opened')){
    cartPopup.classList.add('to-cart--opened');
    overlay.classList.add('modal-overlay--opened');
  }
});
}


closePopup.addEventListener('click', function(evt){
  evt.preventDefault();
  if (cartPopup.classList.contains('to-cart--opened')){
    cartPopup.classList.remove('to-cart--opened');
    overlay.classList.remove('modal-overlay--opened');
  }
});

window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27){
    evt.preventDefault();
    if(cartPopup.classList.contains("to-cart--opened")){
      cartPopup.classList.remove("to-cart--opened");
      overlay.classList.remove('modal-overlay--opened');
    }
  }
});
