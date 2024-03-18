let form = document.querySelector('.contact-form-button');
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
toggle.onclick = function(){
  toggle.classList.toggle('active');
  body.classList.toggle('active');
}

form.onclick = function() {
alert('Адрес ' + email.value + ' успешно добавлен в список рассылки.')}



let popUp = document.getElementById("cookiePopup");
//When user clicks the accept button
document.getElementById("acceptCookie").addEventListener("click", () => {
//Create date object
let d = new Date();
//Increment the current time by 1 minute (cookie will expire after 1 minute)
d.setMinutes(2 + d.getMinutes());
//Create Cookie withname = myCookieName, value = thisIsMyCookie and expiry time=1 minute
document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
//Hide the popup
popUp.classList.add("hide");
popUp.classList.remove("show");
});
//Check if cookie is already present
const checkCookie = () => {
//Read the cookie and split on "="
let input = document.cookie.split("=");
//Check for our cookie
if (input[0] == "myCookieName") {
  //Hide the popup
  popUp.classList.add("hide");
  popUp.classList.remove("show");
} else {
  //Show the popup
  popUp.classList.add("show");
  popUp.classList.remove("hide");
}
};
//Check if cookie exists when page loads
window.onload = () => {
setTimeout(() => {
  checkCookie();
}, 2000);
};