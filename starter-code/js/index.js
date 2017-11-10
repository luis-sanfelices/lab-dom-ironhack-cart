function deleteItem(e){

}

function getPriceByProduct(itemNode){
  return itemNode.getAttribute("value");
}

function updatePriceByProduct(productPrice, index){
  var text = document.createTextNode(productPrice);
  var productTotalPrice = document.getElementsByClassName("total-price");
  productTotalPrice[index].innerHTML = productPrice.toFixed(2);
  return productPrice;
}

function getTotalPrice() {
  var productPrices = document.getElementsByClassName('unit-price');
  var inputValue = document.getElementsByClassName('qty-input');
  var productsTotalPrice = document.getElementById('products-price')
  var totalPrice = 0;
  for(var i = 0; i < productPrices.length; i++) {
    totalPrice += updatePriceByProduct(getPriceByProduct(productPrices[i])*inputValue[0].value,i);
  }
  productsTotalPrice.innerHTML = totalPrice.toFixed(2);
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
