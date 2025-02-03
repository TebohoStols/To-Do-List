/*Get ahold of the input and list-container*/
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Input space empty! Type something!");
    }
    else{
        /*Create space in the li tag*/
        let li = document.createElement("li");

        /*Feed that li space created with what is typed in the box */
        li.innerHTML = inputBox.value;

        /*Append that li tag to the ul*/
        listContainer.appendChild(li);


        /*Dynamically add an X at the end of the li element */
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    saveData();
    inputBox.value = "";
}
/*Update status of the task(completed or uncompleted)) and 
delete it also when span is pressed*/
listContainer.addEventListener("click", function(e){
    /*Check where did we click on the list container*/
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


/*Persist the data within the local storage that is stored in the ul */
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
/*Display the save info from the local database */
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();