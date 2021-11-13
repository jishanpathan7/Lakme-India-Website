var cartItems = JSON.parse(localStorage.getItem("cartItems"));
    console.log("cartItems:", cartItems);

    displayItem(cartItems);

    function displayItem(product){

        product.map(function(item){

            var h1 = document.createElement("h1");
    h1.textContent = item.name;

    var h3 = document.createElement("h3");
    h3.textContent = item.rating;

    var img = document.createElement("img");
    img.setAttribute("src" , item.image_url);

    var h2 = document.createElement("h2");
    h2.textContent = item.price;


    document.querySelector("body").append(h1,h3,img,h2);
});
    
    
    }