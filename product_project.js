
//ADDING ITEMS
var data = [
    {
        name: "LAKME BLUSH AND GLOW SHIT MASK VALUE SET OF 10",
        image_url:
          "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/27474_H_8901030858710_300x.jpg?v=1634889505",
        price: 699,
      },
      {
        name: "LAKME 9 TO 5 VITAMIN C +  SKINCARE VALUE SET",
        image_url:
          "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/1000x1000-hero_1_300x.jpg?v=1620801652",
        price: 450,
      },
      {
        name: "LAKME GREENTEA ESSENTIALS KIT",
        image_url:
          "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/img1_3_1_300x.jpg?v=1620910668",
        price: 699,
      },
      {
        name: "LAKME 9 TO 5 PRIMER + MATTE LIP COLOR",
        image_url:
          "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5Primer_MatteLipColorRedLetter_300x.jpg?v=1598243140",
        price: 450,
      },
      
      {
        name: "LAKME FOREVER MATTE LIQUID LIP COLOR",
        image_url:
          "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24544_H-8901030758850_3e09b888-1276-44a2-9665-fa293cbd5d3_300x.jpg?v=1601470864",
        price:295,
      },
      {
        name: "LAKME ABSOLUTE MATTE ULTIMATE LIP COLOR WITH<br>ARGON OIL",
        image_url:
          "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeAbsoluteMatteUltimateLipColorwithArganOilPetalPink_41b560b6-3f0d-47b2-bfd5-075cf7bc0934_300x.jpg?v=1599200805",
        price: 800,
      },
      {
        name: "LAKME ABSOLUTE GEL STYLISH GEL NAIL COLOR",
        image_url:
          "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Blackjack_300x.png?v=1598528925",
        price: 250,
      },
      {
        name: "LAKME EYECONIC KAJAL ",
        image_url:
          "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/LakmeEyeconicKajalBlack_300x.jpg?v=1598358347",
        price:  185,
      },
      {
        name: "LAKME COLOR CRUSH NAIL ART",
        image_url:
          "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/M1_300x.jpg?v=1601551574",
        price: 155,
      },
      {
          name: "LAKME 9 TO 5 CC COMPLEXION CARE CREAM , 9GM",
          image_url:
            "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Lakme9to5CCComplexionCareCream_9gmBeige_300x.jpg?v=1598101798",
          price: 99,
        },
        {
          name: "LAKME ABSOLUE SPOTLIGHT EYESHADOW PALLETTE",
          image_url:
            "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/2-fop-smokin-glam_1_300x.jpg?v=1603894790",
          price: 597,
        },
        {
          name: "LAKME TRUE WEAR NAIL COLOR",
          image_url:
            "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Pinks-N238_300x.jpg?v=1603185561",
          price:88,
        },
        {
          name: "LAKME INSTA EYELINER",
          image_url:
            "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24329_S1-8901030719165_300x.jpg?v=1633765701",
          price: 130,
        },
        {
          name: "LAKME 9 TO 5 PRIMER + MATTE PERFECT COVER FOUNDATION",
          image_url:
            "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24451_S1-8901030742439_300x.jpg?v=1611755731",
          price: 352,
        },
        {
          name: "LAKME CUSHION MATTE",
          image_url:
            "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24704_H-8901030776533_300x.jpg?v=1601452154",
          price: 275,
        }, 
  ];

  var body = document.querySelector("body");
  var mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "container");
  body.append(mainDiv);
  showProducts();

//MAPPING ITEMS
var product= JSON.parse(localStorage.getItem("cartItems"));
console.log("product:", product)
showProducts(product);
var cart = JSON.parse(localStorage.getItem("cartItems"))|| [];

  function showProducts(){
    data.map(function(item){

      var imageDiv = document.createElement("div");
var img = document.createElement("img");
img.setAttribute("src" , item.image_url);

var h1 = document.createElement("h1");
h1.textContent = item.name;

var h2 = document.createElement("h2");
h2.textContent = item.price;

var h3 = document.createElement("h3");
h3.textContent = item.rating;

var btn = document.createElement("button");
btn.textContent = "Add to Cart";
btn.addEventListener("click",function(){
  addToCart(item);
});

imageDiv.append(img,h1,h2, h3, btn);

mainDiv.append(imageDiv);

    });
  }

function addToCart(items){
  cart.push(items);

  localStorage.setItem("cartItems", JSON.stringify(cart));
}


document.getElementById("cart").addEventListener("click", function(){
  window.location.href = "cart_project.html"
})
