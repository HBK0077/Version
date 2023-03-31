var form = document.getElementById("addForm");

var expenseList = document.getElementById("expenses");

//submit the form
form.addEventListener("submit", addItem);

//delete Item event listener
expenseList.addEventListener("click", removeExpenses);

//Edit Expense event listener
expenseList.addEventListener("click", editExpenses);


// add Item Function
function addItem(e){
    e.preventDefault();
    //get Input value
    var newExpense = document.getElementById("discription").value;
    var expenseAmount = document.getElementById("amount").value;
    //append it to list
    //create li element
    var li = document.createElement("li");
    // add class for the created li
    li.className = "list-group-item";
    // add a textNode by appending the inputNode while appending to the list
    li.appendChild(document.createTextNode(newExpense));
    li.appendChild(document.createTextNode(expenseAmount));
    //storing in local storage
    window.localStorage.setItem("Expense", newExpense);
    window.localStorage.setItem("Amount", expenseAmount);

    //add a delete and edit button
    var deleteButton = document.createElement("button");
    var editButton = document.createElement("button");
    //add class to button
    deleteButton.className = "btn btn-danger btn-sm float-right delete";
    editButton.className = "btn btn-danger btn-sm";
    //append text Node to the button
    deleteButton.appendChild(document.createTextNode("X"));
    editButton.appendChild(document.createTextNode("Edit"));
    //append buttons to list
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    expenseList.append(li);

}


//Delete Item function
function removeExpenses(e){
    var newExpense = document.getElementById("discription").value;
    var expenseAmount = document.getElementById("amount").value;
    if(e.target.classList.contains("delete")){
        if(confirm("are you sure?")){
            var li = e.target.parentElement;
            expenseList.removeChild(li);
            window.localStorage.removeItem(newExpense);
            window.localStorage.removeItem(expenseAmount);
        }
    }
}

// Edit expense fUNCTION
function editExpenses(e){
    document.getElementById("edit_button"+e).style.display="none";
    //document.getElementById("save_button"+no).style.display="block";
	
    var expenseName=document.getElementById("discription"+e);
    var expAmount=document.getElementById("amount"+e);
    
	
    var expense_name_data=expenseName.innerHTML;
    var expAmount_data=expAmount.innerHTML;
  
	
    expenseName.innerHTML="<input type='text' id='discription"+e+"' value='"+expense_name_data+"'>";
    expAmount.innerHTML="<input type='text' id='amount"+e+"' value='"+expAmount_data+"'>";

}

