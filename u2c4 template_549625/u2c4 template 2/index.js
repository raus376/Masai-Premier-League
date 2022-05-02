// write js code here corresponding to index.html
// You should add submit event on the form

var masaiArr=JSON.parse(localStorage.getItem("schedule")) || [];

document.querySelector("#masaiForm").addEventListener("submit",masaiFormFunction)

function masaiFormFunction(){
    event.preventDefault();

    var masaiObj={
       matNum:masaiForm.matchNum.value,
       matTeamA:masaiForm.teamA.value,
       matTeamB:masaiForm.teamB.value,
       matDate:masaiForm.date.value,
       matVenue:masaiForm.venue.value
    }

    masaiArr.push(masaiObj)

    console.log(masaiArr)
    localStorage.setItem("schedule",JSON.stringify(masaiArr))
   
    window.location.href="matches.html"

}