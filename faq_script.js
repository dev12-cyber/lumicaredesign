document.addEventListener("DOMContentLoaded", function () {
    const faqs = document.querySelectorAll(".faq-question");

    faqs.forEach((faq) => {
        faq.addEventListener("click", function () {
            this.classList.toggle("active");

            const answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
                this.querySelector(".icon").textContent = "+";
            } else {
                answer.style.display = "block";
                this.querySelector(".icon").textContent = "-";
            }
        });
    });
});