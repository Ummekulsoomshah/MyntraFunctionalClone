let bagitemobjects;
onLoad()
function onLoad() {
  loadbagitemobjects()
  displaybagitems()
  displaybagsummary()
}
function displaybagsummary(){
  let bagsummary=document.querySelector(".bag-summary")
  
  let totalitem=bagitemobjects.length;
  let totalmrp=0;
  let totaldiscount=0;
  let totalpayment=0;
  
  bagitemobjects.forEach(bagitem=>{
    totalmrp+=bagitem.original_price
    totaldiscount+=bagitem.original_price-bagitem.current_price
  })
  const ConvenienceFEE=99
  totalpayment=totalmrp-totaldiscount+ConvenienceFEE

  bagsummary.innerHTML=`<div class="bag-details-container">
  <div class="price-header">PRICE DETAILS (${totalitem} Items) </div>
  <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
    <span class="price-item-value">Rs ${totalmrp}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
    <span class="price-item-value priceDetail-base-discount">-Rs ${totaldiscount}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Convenience Fee</span>
    <span class="price-item-value">Rs 99</span>
  </div>
  <hr>
  <div class="price-footer">
    <span class="price-item-tag">Total Amount</span>
    <span class="price-item-value">Rs ${totalpayment}</span>
  </div>
</div>
<button class="btn-place-order">
  <div class="css-xjhrni">PLACE ORDER</div>
</button>
</div>
  `
}


function loadbagitemobjects() {

  bagitemobjects = bagItems.map(bagitemid => {
    for (let i = 0; i < items.length; i++) {
      if (bagitemid == items[i].id) {
        return items[i]

      }
    }
  })
  console.log(bagitemobjects)

}

function displaybagitems() {
  let shoppeditemscontainer = document.querySelector(".bag-items-container")
  let innerHTML= " ";
  bagitemobjects.forEach( bagitem => {
    innerHTML+= generateitemHTML(bagitem)

  });
  shoppeditemscontainer.innerHTML =innerHTML
}




function removeFromBag(itemId){
  console.log("deeleee")
  bagItems=bagItems.filter(bagItemId=>bagItemId!=itemId)
  localStorage.setItem("bagItems",JSON.stringify(bagItems))
  loadbagitemobjects()
  displaybagicon()
  displaybagitems()
  displaybagsummary()
}

function generateitemHTML(item) {

  return `<div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
          </div>
          `

}















