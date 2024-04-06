const menuBtn=document.getElementById("menu_btn")
const navLinks=document.getElementById("nav_links")
const menuBtnIcon=menuBtn.querySelector("i")

menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open")
    const isOpen=navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class",isOpen?"ri-close-line":"ri-menu-line")
})

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class","ri-menu-line")
})

const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
  });
ScrollReveal().reveal(".header_content h2",{
    ...scrollRevealOption,
   delay:500,

});
ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay:1000,

});

ScrollReveal.reveal(".order_card",{
    ...scrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".event_content",{
    duration:1000,
});