const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const cartBtn = document.querySelector(".bx-cart");
const cart = document.querySelector(".CartSection");
const AddToCart = document.querySelector(".addToCart");
const LoginBtn = document.querySelector(".bx-user");
const LoginArea = document.querySelector(".d-flex");
const LoginForm = document.querySelector(".login-form");
const SignInBtn = document.querySelector(".sign-btn");




if(LoginBtn){

  LoginBtn.addEventListener("click",()=>{
    if(LoginForm){
      LoginForm.classList.add("submit");

    };}
  
  )
}

console.log(AddToCart)

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}

// Cart Functionality

if(cart){
  cartBtn.addEventListener("click",() => {
    cart.classList.toggle("CartActive");
  })
}


SignInBtn.addEventListener('click',(events)=>{
  events.preventDefault();
  console.log(events);
  const name = document.querySelector(".name-input").value;
  LoginForm.style.display="none";
  console.log(LoginBtn);
  LoginBtn.innerHTML= `Welcome, ${name}`;
  
})



function cartIncrement(){
    let cartVal = parseInt(document.querySelector("#cartVal").innerHTML);
    cartVal++;
    document.querySelector("#cartVal").innerHTML=cartVal;
}