//get input form button click
const btn_click=document.getElementById("serach");
//listen event when button click
btn_click.addEventListener("click",additems);
//function add items
function additems(click)
{
    //get input from user
    const user_input=document.getElementById("input_data").value;
    
    //create div tag
    const MyDiv=document.createElement("div");

    //create class for my div tag
    MyDiv.classList.add("mydiv");

    //create delete button
    const del_button=document.createElement("button");
    del_button.classList.add("delete_btn");
    del_button.textContent="Remove";

    //append user input data to mydiv tag
    MyDiv.appendChild(document.createTextNode(user_input));

    //append delte button to my div tag
    MyDiv.appendChild(del_button);

    //delte button code
    del_button.addEventListener("click",delete_btn);
    function delete_btn(click){
        click.target.parentNode.remove(MyDiv);
    }

    //last append mydiv to webpage tag
    const list_item=document.getElementById("listitems");
    list_item.appendChild(MyDiv);
}


