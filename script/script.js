let bagItems = []
onLoad()

function onLoad(){
let bagitemstr=localStorage.getItem("bagItems")
bagItems=bagitemstr?JSON.parse(bagitemstr):[]
    displayitmonpage()
    displaybagicon()
}

function addToBag(itemId) {
 
    bagItems.push(itemId)
    localStorage.setItem("bagItems", JSON.stringify(bagItems))
    // console.log(bagItems)
    displaybagicon()
}


function displaybagicon() {


    let bagcounticon = document.querySelector(".bag-item-count")
    if (bagItems.length > 0) {
        bagcounticon.style.display = "block"
        bagcounticon.innerHTML = bagItems.length
    }
    else {
        bagcounticon.style.display = "none"
    }
}
function displayitmonpage() {
    let itemscontainer = document.querySelector(".items-container")
    if(!itemscontainer){
        return
    }

    let innerHTML = ''
    items.forEach(item => {
        innerHTML += ` 
    <div class="item-container">
    <img class="item-image" src="${item.image}" alt="">
    <div class="rating">
    ${item.rating.stars}⭐|${item.rating.count}
    </div>
                    <div class="company-name">${item.company}</div>
                    <div class="item-name">${item.item_name}</div>
                    <div class="price">
                        <span class="current-price">Rs${item.current_price}</span>
                        <span class="original-price">Rs ${item.original_price}</span>
                        <span class="discount">(${item.discount_percentage}% OFF)</span>
                    </div>
                    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
                    </div>
    `
    });
    itemscontainer.innerHTML = innerHTML
}




