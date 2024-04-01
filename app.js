const app = Vue.createApp({
    data() {
        return {
            about: "about/about.html",
            labratory: "labratory/laboratory.html",
            product: "products/Products.html",
            research: "research/research.html",
            solution: "solutions/solutions.html",
            login: "login/login.html",
            register: "register/register.html",
            contact: "contact/contact.html",
            journals : "journals/journal.html",
            timeline : "timeline/timeline.html",
            andes: "https://www.andestech.com/en/",
            risc : "https://riscv.org",
            goals: "goals/goals.html",
            journal2: "journal2/journal2.html",
            bibli: "bibliography/bib.html",
            journals: "journals/journal.html",
        };
    },

    methods: {
        onClick() {
            


        }

    }
});


app.mount('#body');