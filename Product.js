let sample_data = [
    {
        Brand:"VTEXX",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/i/s/-original-imaghgchxvgkactc.jpeg?q=70",
        names:"Men Regular Fit Solid Spread Collar Formal Shirt",
        price:"₹299",
        actualprice:"₹99959%",
        image:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    },
    {
        Brand:"MUFTI",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/p/c/40-arfkosh0024-arrow-original-imagszket7qcdbze.jpeg?q=70",
        names:"Men Slim Fit Self",
        image:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
        price:"₹400  off",
        actualprice:"₹99959%",
    },
    {
        Brand:"Roadster",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/r/x/d/50-anaesh1035-arrow-newyork-original-imagg48fqgxezpnk.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"1,286",
        actualprice:"2,499",
        image:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    }, {
        Brand:"Roadster",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/2/z/o/46-ares02011a-arrow-sport-original-imagknbgg4dcqvvv.jpeg?q=70",
        names:"Men Slim Self Shirt",
        price:"1,758",
        actualprice:"2,099",
        image:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    },
    {
        Brand:"Puma",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/n/m/e/m-int-ts-203-f-ns1-r-l-bk-integriti-original-imaggaqsqaqj5pyu.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558",
        actualprice:"1,399",
        image:"https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
    },
   

];


localStorage.setItem("productsdata", JSON.stringify(sample_data));

let collection = JSON.parse(localStorage.getItem("productsdata")) || [];

Product();



function Product() {
    collection.map((element) => {
        let box = document.createElement("div");

        let innerbox = document.createElement("div");
        innerbox.className = "innerbox";

        let price1 = document.createElement("span");
        price1.innerHTML = element.price;

        let price2 = document.createElement("span");
        price2.style.textDecoration = "line-through";
        price2.innerHTML = element.actualprice;

        let image = document.createElement("img");
        image.src = element.image;
        image.style.width = "70px";

        let price = document.createElement("span");
        price.innerHTML = element.actualprice;

        innerbox.append(price1, price2,);

        let avatar = document.createElement("img");
        avatar.src = element.img_src;
        avatar.className = "avatar";
        

        let brand = document.createElement("p");
        brand.innerHTML = element.Brand;

        let names = document.createElement("p");
        names.innerHTML = element.names;

   

        box.append(avatar, brand, names,image, innerbox );
        document.getElementById("collection").append(box);
    });
}


