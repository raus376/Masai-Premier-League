// write js code here corresponding to favourites.html

var favouriteArr=JSON.parse(localStorage.getItem("favourites"));
// console.log(favouriteArr)

displayData(favouriteArr)

function displayData(favouriteArr){
    // console.log(favouriteArr)
    favouriteArr.forEach(function(ele,index){

        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=ele.matNum;
  
        var td2=document.createElement("td");
        td2.innerText=ele.matTeamA;
  
        var td3=document.createElement("td");
        td3.innerText=ele.matTeamB;
  
        var td4=document.createElement("td");
        td4.innerText=ele.matDate;
  
        var td5=document.createElement("td");
        td5.innerText=ele.matVenue;

        var td6=document.createElement("td");
        td6.innerText="Delete";
         td6.style.color="red";
         td6.style.cursor="pointer";

         td6.addEventListener("click",function(){
             deleteFunction(ele,index)
         })

         tr.append(td1,td2,td3,td4,td5,td6)
         document.querySelector("tbody").append(tr)
         
    })

    function deleteFunction(ele,index){
      favouriteArr.splice(index,1)
   
   localStorage.setItem("favourites",JSON.stringify(favouriteArr))
   var updateData=JSON.parse(localStorage.getItem("favourites"))
   window.location.reload()
displayData(updateData)
}
}