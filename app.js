const numbers = document.querySelectorAll(".options button.number")
const typeDisplay = document.querySelector(".type")
const typeDisplayPara = document.querySelector(".type p")


numbers.forEach(number=>{
    number.addEventListener("click",showNumber)
})
let number 
function showNumber()
{
    number = Number(this.textContent)
    typeDisplayPara.append(number)
    typeDisplayPara.classList.add("style-num")
}




const operators = document.querySelectorAll(".options button.operator")
operators.forEach(operator=>{
operator.addEventListener("click",showOper)
})



function showOper()
{
    console.log(this.textContent)
    typeDisplayPara.append(this.textContent)
}
