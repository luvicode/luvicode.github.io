//scrollbar
const bar = document.querySelector('.scroll-bar');



//Scroll bar
window.addEventListener("scroll", () =>{
    const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
    const scrolled= (scrollTop /(scrollHeight - clientHeight) * 100);
    bar.style.width = `${scrolled}%`;
});