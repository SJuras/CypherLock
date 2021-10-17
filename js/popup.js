// nova verzija
const cookieContainer = document.querySelector('.cookie-container');
const cookieBtn = document.querySelector(".cookie-button");

cookieBtn.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("CypherLockCookie", "true");
});

setTimeout( () => {
  if(!localStorage.getItem("CypherLockCookie")){
    cookieContainer.classList.add("active");
  }
}, 2000);
