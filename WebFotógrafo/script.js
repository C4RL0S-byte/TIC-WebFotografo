const button = document.querySelector(".arrow");
const nextPage = document.querySelector(".homepage1");

function transition (){
  
    preventDefault();

    const nextTop = nextPage.offsetTop;

    window.scrollTo({
        top: nextTop,
        behavior: "smooth"
  });
};