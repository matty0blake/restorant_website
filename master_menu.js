let data = [{
        "name": "suci",
        "type": "lunch",
        "path": "image/menu/1.jpg"
    },
    {
        "name": "cola",
        "type": "drink",
        "path": "image/menu/2.jpg"
    },
    {
        "name": "fish",
        "type": "lunch",
        "path": "image/menu/3.jpg"
    },

    {
        "name": "orangejuice",
        "type": "drink",
        "path": "image/menu/4.jpg"
    },
    {
        "name": "orangejuice",
        "type": "drink",
        "path": "image/menu/5.jpg"
    },
    {
        "name": "orangejuice",
        "type": "drink",
        "path": "image/menu/6.jpg"
    },
    {
        "name": "orangejuice",
        "type": "drink",
        "path": "image/menu/7.jpg"
    },
    {
        "name": "orangejuice",
        "type": "drink",
        "path": "image/menu/8.jpg"
    }

]




//decluring


const filtering = (require) => {
    let cleaning = menu_product_item.innerHTML = ""

    for (let i = 0; i < data.length; i++) {

        if (data[i].type === require) {

            let div = document.createElement("div")
            div.classList.add("item")
            div.style.transition = " transition: all 1s ease-in-out;"
            let img = document.createElement("img")
            img.src = data[i].path
            img.style.transition = " transition: all 1s ease-in-out;"
            let h3 = document.createElement("h3")
            h3.innerHTML = data[i].name
            h3.style.transition = " transition: all 1s ease-in-out;"

            div.appendChild(img)
            div.appendChild(h3)
            menu_product_item.appendChild(div)
        }
    }
}


filtering("lunch")