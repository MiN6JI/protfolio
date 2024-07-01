const faqs = document.querySelectorAll(".faq-block");

faqs.forEach((faq) =>{
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("active")
    });
});