// write js code here corresponding to matches.html


var masaiArr=JSON.parse(localStorage.getItem("schedule"))

// console.log(masaiArr)
var favouriteArr=JSON.parse(localStorage.getItem("favourites")) || [];

document.querySelector("#filterVenue").addEventListener("change",filterFun)

function filterFun()
{
    var search=document.querySelector("#filterVenue").value;
    // console.log(search)
   var filterList= masaiArr.filter(function(ele){
        return ele.matVenue==search
    })
    // console.log(masaiArr)
    displayData(filterList)
}


displayData(masaiArr);

function displayData(masaiArr)
{
    // console.log(masaiArr)
    document.querySelector("tbody").innerHTML="";
    masaiArr.forEach(function(ele){

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
      td6.innerText="Favourite";
      td6.style.color="green";
      td6.style.cursor="pointer"

      td6.addEventListener("click",function(){
          favouriteData(ele)
      })

      tr.append(td1,td2,td3,td4,td5,td6)
      document.querySelector("tbody").append(tr)
       
    })

    function favouriteData(ele){
    // console.log(ele)
    favouriteArr.push(ele)
    // console.log(favouriteArr)
    localStorage.setItem("favourites",JSON.stringify(favouriteArr))
    // console.log(favouriteArr)
    window.location.href="favourites.html"
    }
}
