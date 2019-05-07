var orderButton = document.querySelector('.order-button');
var cartPopup = document.querySelector('.to-cart');
var closePopup = document.querySelector('.to-cart__button');

orderButton.addEventListener('click', function(evt){
  evt.preventDefault();
  if (!cartPopup.classList.contains('to-cart--opened')){
    cartPopup.classList.add('to-cart--opened');
  }
});

closePopup.addEventListener('click', function(evt){
  evt.preventDefault();
  if (cartPopup.classList.contains('to-cart--opened')){
    cartPopup.classList.remove('to-cart--opened');
  }
});

window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27){
    evt.preventDefault();
    if(cartPopup.classList.contains("to-cart--opened")){
      cartPopup.classList.remove("to-cart--opened");
    }
  }
});
