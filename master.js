let nav_burger = document.querySelector(".nav_burger")
let nav_toggler = document.querySelector(".nav_toggler")
let nav = document.querySelector(".row nav")
let menu_product = document.querySelector(".menu_product")
let menu_product_item = document.querySelector(".menu_product_item")


nav_toggler.addEventListener("click", () => {
    nav_burger.classList.toggle("open_nav")
    nav.classList.toggle("nav_menu_open")
})




//adding and changing menu items




const filtering = (require) => {
    const cleaning = menu_product.innerHTML = ""

    for (let i = 0; i < data.length; i++) {
        if (data[i].type === require) {
            let div = document.createElement("div")
            div.classList.add("menu_product_item")
            div.style.animation = "fade_up 2s"
            let img = document.createElement("img")
            img.src = data[i].path
            let h1 = document.createElement("h1")
            h1.innerHTML = data[i].name
            let h2 = document.createElement("h2")
            h2.innerHTML = `${data[i].price} $`

            //appending element

            div.appendChild(img)
            div.appendChild(h1)
            div.appendChild(h2)
            menu_product.appendChild(div)

        }
    }

}


const menu_change = (x) => {
    document.querySelector(".active").classList.remove("active")
    const toFilter = (x.innerHTML).toLowerCase()
    console.log(toFilter)
    filtering(toFilter)

    x.classList.add("active")

}


//json data for the menu

let data = [{
        "name": "suci",
        "type": "lunch",
        "path": "image/menu/1.jpg",
        "price": 5
    },
    {
        "name": "fish",
        "type": "lunch",
        "path": "image/menu/2.jpg",
        "price": 10
    },
    {
        "name": "jelly_fish",
        "type": "lunch",
        "path": "image/menu/3.jpg",
        "price": 15
    },

    {
        "name": "rice",
        "type": "lunch",
        "path": "image/menu/4.jpg",
        "price": 20
    },
    {
        "name": "dont know it name",
        "type": "lunch",
        "path": "image/menu/5.jpg",
        "price": 2
    },
    {
        "name": "orangejuice",
        "type": "lunch",
        "path": "image/menu/6.jpg",
        "price": 20
    },
    {
        "name": "orangejuice",
        "type": "drink",
        "path": "image/menu/3.jpg",
        "price": 20
    },
    {
        "name": "orangejuice",
        "type": "drink",
        "path": "image/menu/4.jpg",
        "price": 20
    },
    {
        "name": "lemon juice",
        "type": "drink",
        "path": "image/menu/5.jpg",
        "price": 20
    },
    {
        "name": "orange drink",
        "type": "drink",
        "path": "image/menu/6.jpg",
        "price": 20
    },
    {
        "name": "melon drink",
        "type": "drink",
        "path": "image/menu/7.jpg",
        "price": 20
    },
    {
        "name": "melon drink",
        "type": "drink",
        "path": "image/menu/8.jpg",
        "price": 20
    },
    {
        "name": "orangejuice",
        "type": "dessert",
        "path": "image/menu/3.jpg",
        "price": 20
    },
    {
        "name": "orangejuice",
        "type": "dessert",
        "path": "image/menu/4.jpg",
        "price": 20
    },
    {
        "name": "lemon juice",
        "type": "dessert",
        "path": "image/menu/5.jpg",
        "price": 342675648
    },
    {
        "name": "orange drink",
        "type": "dessert",
        "path": "image/menu/6.jpg",
        "price": 3464
    },
    {
        "name": "melon drink",
        "type": "dessert",
        "path": "image/menu/7.jpg",
        "price": 20000
    },
    {
        "name": "melon drink",
        "type": "dessert",
        "path": "image/menu/8.jpg",
        "price": 2
    },
    {
        "name": "water",
        "type": "dinner",
        "path": "image/menu/6.jpg",
        "price": 3464
    },
    {
        "name": "dry water",
        "type": "dinner",
        "path": "image/menu/7.jpg",
        "price": 20000
    },
    {
        "name": "wet water",
        "type": "drink",
        "path": "image/menu/8.jpg",
        "price": 2
    }

]

let x = "lunch"
filtering(x)