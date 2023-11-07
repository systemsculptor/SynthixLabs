const vue = Vue.createApp({
    
    data()
    {
        return{
            about: "About/about.html",
            home: "Home/labratory.html",
            research: "Research/research.html",
            contact: "Contact/contact.html",
            solutions: "Solutions/solutions.html",
            product: "Products/Products.html"

        };
    },
    method:
    {
        viewCOunter() 
        {
            

        },

        placeholder2()
        {


        }
    }


});
vue.mount('#links');