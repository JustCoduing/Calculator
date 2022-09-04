const numbers = document.querySelectorAll(".options button.number")
numbers.forEach(number=>{
    number.addEventListener("click",showNumber)
})

function showNumber()
{
   let number = Number(this.textContent)
   console.log(number)

}

