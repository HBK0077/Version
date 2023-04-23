// when submit the data it should be stored in crudcrud
var form = document.getElementById("addForm");

var itemList = document.getElementById("items");

//fetching the data for browser
    //just to check is there any data already present in the cloud. if true it will display the list in browser.
const getData = async()=>{
    try{
        const response = await axios.get("https://crudcrud.com/api/cb1080d3e7514efb999809be33573b90/InventoryData");
        showOnBrowser(response.data);
    }
    catch{
        console.error(error);
    }
};
getData();
// function show on browser will show the list in the broswer. This is before we insert any data.
function showOnBrowser(show){
    var parentNode = itemList;
    for(var i=0;i<show.length;i++){
           //console.log(show[i]);
        var childNode = `<li id=${show[i]._id}>${show[i].Name}-${show[i].Description}-${show[i].Quantity}-${show[i].Price}
        <button onclick="buy1Product('${show[i]._id}','${show[i].Quantity}','${show[i].Name}','${show[i].Description}','${show[i].Price}')">BUY1</button>
        <button onclick="buy2Product('${show[i]._id}','${show[i].Quantity}','${show[i].Name}','${show[i].Description}','${show[i].Price}')">BUY2</button>
        <button onclick="buy3Product('${show[i]._id}','${show[i].Quantity}','${show[i].Name}','${show[i].Description}','${show[i].Price}')">BUY3</button></li>`
        parentNode.innerHTML = parentNode.innerHTML+childNode;
        //console.log(`${show[i]._id}`);
       //window.location.reload();
    }
    //window.location.reload();
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
    const showData = async()=>{
        try{
            const response = await axios.post("https://crudcrud.com/api/cb1080d3e7514efb999809be33573b90/InventoryData", obj);
            showOnScreen(response.data);}//Call back function
        catch{
            console.error(error);
        }
    
    };
    showData();
    
    //Once we input the values the showOnscreen function will be called so that elements can be shown in the broswer.
    function showOnScreen(show){
        //console.log(show);
        var parentNode = itemList;

        var childNode = `<li id=${show._id}>${show.Name}-${show.Description}-${show.Quantity}-${show.Price}
        <button onclick="buy1Product('${show._id}','${show.Quantity}','${show.Name}','${show.Description}','${show.Price}')">BUY1</button>
        <button onclick="buy2Product('${show._id}','${show.Quantity}','${show.Name}','${show.Description}','${show.Price}')">BUY2</button>
        <button onclick="buy3Product('${show._id}','${show.Quantity}','${show.Name}','${show.Description}','${show.Price}')">BUY3</button></li>`
        parentNode.innerHTML = parentNode.innerHTML+childNode;
        //console.log(show._id);
        //window.location.reload();
    }
    //window.location.reload();
}

//These function will update the Quantity and update it in the cloud.
async function buy1Product(key,value,name,description,price){
    try{
    //console.log(...show);
    value = value - 1;
    //onsole.log(value);

    let response = await axios.put(`https://crudcrud.com/api/cb1080d3e7514efb999809be33573b90/InventoryData/${key}`,
    {
        Name:name,
        Description:description,
        Quantity:value,
        Price:price

    })
    showOnBrowser(response.data);
    }catch(error){
        console.log(error);
    }
    
}
async function buy2Product(key,value,name,description,price){
    try{
        //console.log(...show);
        value = value - 2;
        //onsole.log(value);
    
        let response = await axios.put(`https://crudcrud.com/api/cb1080d3e7514efb999809be33573b90/InventoryData/${key}`,
        {
            Name:name,
            Description:description,
            Quantity:value,
            Price:price
    
        })
        showOnBrowser(response.data);
        }catch(error){
            console.log(error);
        }
}
async function buy3Product(key,value,name,description,price){
    try{
        //console.log(...show);
        value = value - 3;
        //onsole.log(value);
    
        let response = await axios.put(`https://crudcrud.com/api/cb1080d3e7514efb999809be33573b90/InventoryData/${key}`,
        {
            Name:name,
            Description:description,
            Quantity:value,
            Price:price
    
        })
        showOnBrowser(response.data);
        }catch(error){
            console.log(error);
        }
}
