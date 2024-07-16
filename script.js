const faqs = document.querySelectorAll(".faq-block");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "100vh";
    menuList.style.height = "100vh";

    document.body.classList.add("no-scroll");
  } else {
    menuList.style.maxHeight = "0px";
    document.body.classList.remove("no-scroll");
  }
}

const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuList.style.maxHeight = "0px";
    document.body.classList.remove("no-scroll");
  });
});
