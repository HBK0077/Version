var form = document.getElementById("addForm");

var itemList = document.getElementById("items");

var filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener("click", editQuantity);

//filter event
filter.addEventListener("keyup", filterItems);

//add item function
function addItem(e){
    e.preventDefault();
    //getinput value
    var newItem = document.getElementById("itemName").value;
    var discription = document.getElementById("discription").value;
    var itemQuantity = document.getElementById("quantity").value;
    var itemPrice = document.getElementById("price").value;

    // create new li element

    var li = document.createElement("li");

    //add class
    li.className = "list-group-item";
    //add text node with input node
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(discription));
    li.appendChild(document.createTextNode(itemQuantity));
    //li.appendChild(document.createTextNode(itemPrice));

    //create delete button element

    var buy1Button = document.createElement("button");
    var buy2Button = document.createElement("button");
    var buy3Button = document.createElement("button");
    
    //add id's to these buttons
    buy1Button.setAttribute("id","button1");
    buy2Button.setAttribute("id","button2");
    buy3Button.setAttribute("id","button3");

    //append the text node
    buy1Button.appendChild(document.createTextNode("Buy1"));
    buy2Button.appendChild(document.createTextNode("Buy2"));
    buy3Button.appendChild(document.createTextNode("Buy3"));
    //append button to li
    li.appendChild(buy1Button);
    li.appendChild(buy2Button);
    li.appendChild(buy3Button);

    itemList.appendChild(li);
    //create a obj of array
    var myObj = {
        ItemName: newItem,
        Description: discription,
        Quantity: itemQuantity,
        Price: itemPrice
    };

    //sedning the data to the cloud CrudCrud
    axios.post("https://crudcrud.com/api/f306daae6e4443bca14b935927cdcf9c/InventoryData",myObj)
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    });
}
//Depedning on the button edit the quantity
function editQuantity(e){
    e.preventDefault();
    //var newItem = document.getElementById("itemName").value;
    var newItem = document.getElementById("itemName").value;
    var discription = document.getElementById("discription").value;
    var itemQuantity = document.getElementById("quantity").value;
    var itemPrice = document.getElementById("price").value;
    if(e.target.id.contains("button1")){
        itemQuantity = itemQuantity - 1;
        axios.put("https://crudcrud.com/api/f306daae6e4443bca14b935927cdcf9c/InventoryData")
        .then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error);
        })
    }
    else if(e.target.id.contains("button2")){
        itemQuantity = itemQuantity - 2;
        axios.put("https://crudcrud.com/api/f306daae6e4443bca14b935927cdcf9c/InventoryData")
        .then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error);
        })
    }
    else{
        itemQuantity = itemQuantity - 3;
        axios.put("https://crudcrud.com/api/f306daae6e4443bca14b935927cdcf9c/InventoryData")
        .then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error);
        })
    }

}

//filter items
function filterItems(e){
    //convert to lowercase
    var text = e.target.value.toLowerCase();
    //get list
    var items = itemList.getElementsByTagName("li");
    

    //convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var discription = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1 || discription.toLowerCase().indexOf(text)!= -1){
            item.style.display = "block";
        }
        else{
            item.style.display = "none"; 
        }
    });
}