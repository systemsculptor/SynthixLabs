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
        journal : "Journal/journal.html",
        timeline : "Timeline/timeline.html"
        };
    },
});
app.mount('#body');