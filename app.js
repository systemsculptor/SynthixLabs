const app = Vue.createApp({
    data()
    {
        return {
            about: "About/about.html",
            labratory: "Labratory/laboratory.html",
            product: "Products/Products.html",
            research: "Research/research.html",
            solution: "Solutions/solutions.html",
            login: "Login/login.html",
            register: "Register/register.html",
            contact: "Contact/contact.html",
            journal : "Journal/journal.html",
            timeline : "Timeline/timeline.html",
            andes: "https://www.andestech.com/en/",
            risc : "https://riscv.org",
            goals: "Goals/goals.html",
            journal2: "Journal2/journal2.html",
            bibli: "Bibliography/bib.index",
        };
    },
});

app.mount('#body');