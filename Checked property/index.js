const subscribe= document.getElementById("subscribe");
const visa= document.getElementById("visa");
const Mastercard = document.getElementById("Mastercard");
const  paypal= document.getElementById("paypal");
const  l1= document.getElementById("l1");
const  l2= document.getElementById("l2");
const  submit= document.getElementById("submit");

submit.onclick = function(){
    if(subscribe.checked)
        l1.textContent = " You are subscribed";
    else{
        l1.textContent = " You are not subscribed";
    }
    if(visa.checked)
        l2.textContent = " You paid through visa ";
    else if(Mastercard.checked)
        l2.textContent = " You paid through Mastercard ";
     else if(paypal.checked)
        l2.textContent = " You paid through Paypal "; 
    else {
      l2.textContent = " You must select a payment mode ";  
    }
    
}
