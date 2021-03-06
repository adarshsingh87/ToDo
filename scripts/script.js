let items=[];
function additem(){
  let input = document.getElementById('input-list');
  let items_wrapper = document.getElementById('items');
  let p = createItemElement(input.value);
  items_wrapper.appendChild(p);
  let new_item = document.getElementById(items.length+input.value);
  input.value="";
  new_item.setAttribute('onclick','removeItem(this)');
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("confirm-button").click();
    }
});
}
function removeItem(elm){
  elm.remove();
}
function createItemElement(name){
  let element = document.createElement('p');
  items.push(element);
  element.classList.add('item');
  element.innerHTML=name;
  element.id=items.length+name;
  return element;
}
