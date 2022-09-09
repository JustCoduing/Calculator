const numbers = document.querySelectorAll(".options button.number")
const typeDisplay = document.querySelector(".type")
const typeDisplayPara = document.querySelector(".type p")
const result = document.querySelector(".result")
const resultDisplayPara = document.querySelector(".result p")
const clear = document.querySelector(".clear")
const deleteButton = document.querySelector(".delete")
const equalButton = document.querySelector(".equal")
let number



numbers.forEach(number=>{
    number.addEventListener("click",showNumber)
    
})

let str=""
function showNumber()
{
    str+=this.textContent
    typeDisplayPara.append(this.textContent)
    typeDisplayPara.classList.add("style-num")

}










clear.addEventListener("click",clearDisplay)

function clearDisplay()
{
    typeDisplayPara.textContent=" "
    resultDisplayPara.textContent=" "
    str=""

}


/*deleteButton.addEventListener("click",deletePrevNumber)




function deletePrevNumber()
{
    typeDisplayPara.removeChild(typeDisplayPara.lastChild)
    numberArray.pop()
    console.log(numberArray)
    
}*/


function add(arr)
{
    return arr.reduce((num1,num2)=>num1+num2)
}
function sub(arr)
{
    return arr.reduce((num1,num2)=>num1-num2)
}
function mult(arr)
{
    return arr.reduce((num1,num2)=>num1*num2)
}
function div(arr)
{
    return arr.reduce((num1,num2)=>num1/num2)
}

function operate(op,arr)
{
    if(typeof op==="string" && op.includes("+"))
    {
        
        
            return add(arr)
        
    }

    if(typeof op==="string" && op.includes("-"))
    {
        
            return sub(arr)
        
    }

    if(typeof op==="string" && op.includes("×"))
    {
          return mult(arr)
        
    }


    if(typeof op==="string" && op.includes("÷"))
    {
        
            return div(arr)
        
    }

    
}

equalButton.addEventListener("click",showResult)

function showResult()
{
   
    
    console.log(str)
    let regEx = /[+\-\×÷]/g
    let strArray = str.split(" ")
    console.log(strArray)
    let getOperator = ""
    for(let i = 0; i<strArray.length;i++)
    {
        if(strArray[i].match(regEx))
        {
            getOperator+=strArray[i]
        }
    }
    console.log(getOperator)
    // let position
    for(let i = 0; i<strArray.length;i++)
    {
        if(strArray[i].match(regEx))
        {
           let position = strArray.indexOf(strArray[i])
           strArray.splice(position,1)
        }
    }
    console.log(strArray)

    let numberArray = strArray.map(item=>Number(item))
    console.log(numberArray)

    console.log(operate(getOperator,numberArray))
    
    
    
}





