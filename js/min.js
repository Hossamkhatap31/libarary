var name = document.getElementById("nameSite")
var url = document.getElementById("urlSite")
var allDataItem = [];



if( localStorage.getItem("ListData") !== null ){
    allDataItem = JSON.parse(localStorage.getItem("ListData"));
    displyData()
}


function gatVales(){
if(ValidURL() == true && ValidthinName() == true){
    var dataitem = {
        name:nameSite.value,
        url:urlSite.value,
     }
     allDataItem.push(dataitem) 
     displyData()
     ramovdata()
     localStorage.setItem("ListData",JSON.stringify(allDataItem))
     console.log(allDataItem)
}

}
function ramovdata(){

    nameSite.value= "";
    urlSite.value= "";
}



function displyData(){
    
    var dataAll = "";
    for(var i = 0 ; i <allDataItem.length ; i++){
     dataAll += ` 
     <tr class="text-center">
     <td>${[i + 1]}</td>
     <td>${allDataItem[i].name}</td>
      <td><a class="btn btn-submit text-white" id="Visit" target="_blank" href="${allDataItem[i].url}"  onclick="">Visit</a></td>
     <td><button class="btn btn-submit text-white" id="Delete" onclick="daletIeam(${i})">Delete</button></td>
     </tr>
    `
    }
    document.getElementById("table").innerHTML= dataAll;
}

function daletIeam(index){
    allDataItem.splice(index,1)
    localStorage.setItem("ListData",JSON.stringify(allDataItem))
    displyData()
}

function ValidURL() {
    
    var url = urlSite.value;
    var urlRegex = /^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/[\w\d-]+)*\/?(\?[\w\d%&=]*)?(#\w*)?$/i;

    if(urlRegex.test(url) == true){
        urlSite.classList.add("is-valid")
        urlSite.classList.remove("is-invalid")
        return true;
    }
    else{
         
        urlSite.classList.add("is-invalid")
        urlSite.classList.remove("is-valid")
        return false;
    }
}


function ValidthinName() {
    
    var name = nameSite.value;
    var Regex = /^[a-z]{3,}$/i;

    if(Regex.test(name) == true){
        nameSite.classList.add("is-valid")
        nameSite.classList.remove("is-invalid")
        return true;
    }
    else{
         
        nameSite.classList.add("is-invalid")
        nameSite.classList.remove("is-valid")
        return false;
    }
}