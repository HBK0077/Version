// when submit the data it should be stiored in crudcrud
var form = document.getElementById("addForm");

var itemList = document.getElementById("items");

//fetching the data for browser
axios.get("https://crudcrud.com/api/3d0cdc88b686434b92f0fdff3b5ef711/InventoryData")
    .then((response)=>{
        showOnBrowser(response.data);
    })
    .catch((error)=>{
        console.error(error);
    });

    function showOnBrowser(show){
        //
        var parentNode = itemList;
        for(var i=0;i<show.length;i++){
           //console.log(show[i]);
        var childNode = `<li id=${show[i]._id}>${show[i].Name}-${show[i].Description}-${show[i].Quantity}-${show[i].Price}
        <button onclick="buy1Product('${show[i]._id}','${show[i].Quantity}','${show[i].Name}','${show[i].Description}','${show[i].Price}')">BUY1</button>
        <button onclick="buy2Product('${show[i]._id}','${show[i].Quantity}','${show[i].Name}','${show[i].Description}','${show[i].Price}')">BUY2</button>
        <button onclick="buy3Product('${show[i]._id}','${show[i].Quantity}','${show[i].Name}','${show[i].Description}','${show[i].Price}')">BUY3</button></li>`
        parentNode.innerHTML = parentNode.innerHTML+childNode;
        
    }
    updateInventory(show);
    //console.log(show[2]);
}

//storing in crudcrud
form.addEventListener("submit", addItem);

//add to crudcrud
function addItem(e){
    e.preventDefault();
    //input Values
    var newItem = document.getElementById("itemName").value;
    var discription = document.getElementById("discription").value;
    var itemQuantity = document.getElementById("quantity").value;
    var itemPrice = document.getElementById("price").value;
    var obj={
        Name : newItem,
        Description : discription,
        Price : itemPrice,
        Quantity : itemQuantity
    };
    axios.post("https://crudcrud.com/api/3d0cdc88b686434b92f0fdff3b5ef711/InventoryData", obj)
    .then((response)=>{
        showOnScreen(response.data);
    })
    .catch((error)=>{
        console.error(error);
    });

    function showOnScreen(show){
        //console.log(show);
        var parentNode = itemList;

        var childNode = `<li id=${show._id}>${show.Name}-${show.Description}-${show.Quantity}-${show.Price}
        <button onclick="buy1Product('${show._id}','${show.Quantity}','${show.Name}','${show.Description}','${show.Price}')">BUY1</button>
        <button onclick="buy2Product('${show._id}','${show.Quantity}','${show.Name}','${show.Description}','${show.Price}')">BUY2</button>
        <button onclick="buy3Product('${show._id}','${show.Quantity}','${show.Name}','${show.Description}','${show.Price}')">BUY3</button></li>`
        parentNode.innerHTML = parentNode.innerHTML+childNode;
    
    }
}
function buy1Product(key,value,name,description,price){
    //console.log(...show);
    value = value - 1;
    //onsole.log(value);
    axios.put(`https://crudcrud.com/api/3d0cdc88b686434b92f0fdff3b5ef711/InventoryData/${key}`,
    {
        Name:name,
        Description:description,
        Quantity:value,
        Price:price

    })
    .then((response)=>{
        showOnBrowser(response.data);
        //updateInventory(response.data);
        //console.log(response);
    }).catch((error)=>{
        console.log(error);
    });
    
}
function buy2Product(key,value,name,description,price){
    //console.log(...show);
    value = value - 2;
    //onsole.log(value);
    axios.put(`https://crudcrud.com/api/3d0cdc88b686434b92f0fdff3b5ef711/InventoryData/${key}`,
    {
        Name:name,
        Description:description,
        Quantity:value,
        Price:price

    })
    .then((response)=>{
        showOnBrowser(response.data);
        //console.log(response);
    }).catch((error)=>{
        console.log(error);
    });
}
function buy3Product(key,value,name,description,price){
    //console.log(...show);
    value = value - 3;
    //onsole.log(value);
    axios.put(`https://crudcrud.com/api/3d0cdc88b686434b92f0fdff3b5ef711/InventoryData/${key}`,
    {
        Name:name,
        Description:description,
        Quantity:value,
        Price:price

    })
    .then((response)=>{
        showOnBrowser(response.data);
        //console.log(response);
        updateInventory(response.data);
    }).catch((error)=>{
        console.log(error);
    });
    function updateInventory(inventory){
        var parent = itemList;
        var child = document.getElementById(key);
        if(child){
            parent.appendChild(child);
        }
    }
}

// function updateInventory(inventory){
//     var parent = itemList;
//     var child = document.getElementById(key);
//     if(child){
//         parent.appendChild(child);
//     }
// }

        // var childNode = `<li id=${inventory._id}>${inventory.Name}-${inventory.Description}-${inventory.Quantity}-${inventory.Price}
        // <button onclick="buy1Product('${inventory._id}','${show.Quantity}','${inventory.Name}','${inventory.Description}','${inventory.Price}')">BUY1</button>
        // <button onclick="buy2Product('${inventory._id}','${show.Quantity}','${inventory.Name}','${inventory.Description}','${inventory.Price}')">BUY2</button>
        // <button onclick="buy3Product('${inventory._id}','${show.Quantity}','${inventory.Name}','${inventory.Description}','${inventory.Price}')">BUY3</button></li>`
        // parentNode.innerHTML = parentNode.innerHTML+childNode;

