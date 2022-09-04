const numbers = document.querySelectorAll(".options button.number")
const typeDisplay = document.querySelector(".type")


numbers.forEach(number=>{
    number.addEventListener("click",showNumber)
})
let number 
function showNumber()
{
    let typeDisplayPara = document.createElement("p")
    typeDisplayPara.classList.add("style-num")
   number = Number(this.textContent)
   console.log(number)
   typeDisplayPara.innerText=number
   typeDisplay.append(typeDisplayPara)
   

}




const operators = document.querySelectorAll(".options button.operator")
operators.forEach(operator=>{
operator.addEventListener("click",showOper)
})



function showOper()
{
    console.log(this.textContent)
}
