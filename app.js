const app = Vue.createApp({
    data()
    {
        return {
            about: "About/about.html",
            labratory: "Labratory/labratory.html",
            product: "Products/Products.html",
            research: "Research/research.html",
            solution: "Solutions/solutions.html",
            login: "Login/login.html",
            contact: "Contact/contact.html",
<<<<<<< Updated upstream
            journal : "Journal/journal.html",
            timeline : "Timeline/timeline.html",
            andes: "https://www.andestech.com/en/",
            risc : "https://riscv.org"
            };
=======
            riscv: "https://riscv.org/",
            andes: "https://www.andestech.com/en/"
        };
>>>>>>> Stashed changes
    },
});

app.mount('#body');