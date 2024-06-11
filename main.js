var toggleClick = document.querySelector(".toggleBox");
var container = document.querySelector(".container_box");
var catWalk = document.querySelector(".cat-walk");
var catAnimation = document.getElementById("cat-animation");

catAnimation.addEventListener("click", function (){
    console.log(catAnimation)
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
})

toggleClick.addEventListener("click", () => {
  console.log(toggleClick);
  toggleClick.classList.toggle("active");
  container.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  if (scrollPosition > windowHeight * 0.25) {
    catAnimation.classList.remove("hidden");
    catWalk.classList.remove("hidden");
  } else if (scrollPosition < windowHeight * 0.25) {
    catAnimation.classList.add("hidden");
    catWalk.classList.add("hidden");
  }
});


document.querySelector('#open-popup').addEventListener("click", function(){
    document.body.classList.add("active-popup")
});

document.querySelector('.popup .close-btn').addEventListener("click", function(){
    document.body.classList.remove("active-popup")
});