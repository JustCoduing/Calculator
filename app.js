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
    let regEx= /[+\-\×÷]/g
    
    typeDisplayPara.append(this.textContent)
    typeDisplayPara.classList.add("style-num")
    
   
    

}

clear.addEventListener("click",clearDisplay)
let strArray

function clearDisplay()
{
    typeDisplayPara.textContent=" "
    resultDisplayPara.textContent=" "
    str=""
    clickCounter=0

}


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
    
    let result = arr.reduce((num1,num2)=>num1/num2)
    if(result===Infinity || Number.isNaN(result))
    {
        return "You Can't Divide By Zero"
    }
    else return result
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

equalButton.addEventListener("click",()=>{
    showResult()
})

    

// deleteButton.addEventListener("click",clearResultAndDisplayNewResult)
let clickCounter = 0

function showResult()
{
   
    clickCounter++
    console.log(str)
    let regEx = /[+\-\×÷]/g
     strArray = str.split(" ")
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
   

    let numberArray = strArray.filter(item=>item!==(''))
    let operateNumberArray = numberArray.map(item=>Number(item))
    console.log(operateNumberArray)
    

    let calculate = operate(getOperator,operateNumberArray)
    console.log(calculate)
    
    
    resultDisplayPara.append(calculate)
    resultDisplayPara.classList.add("result-style")
    
    if(clickCounter>1)
    {
        
        resultDisplayPara.replaceChildren(calculate)
    }
    if(strArray.length<=1)
    {
        resultDisplayPara.textContent=""
    }
    if(strArray[0]=="" || strArray[strArray.length-1]=="")
    {
        resultDisplayPara.textContent=""
    }

   
    
}
function test()
{
    console.log("hello")
}


deleteButton.addEventListener("click",delValue)

function delValue()
{
    typeDisplayPara.lastChild.remove()
    str=typeDisplayPara.textContent
    console.log(str)
    
}



// function clearResultAndDisplayNewResult()
// {
//     // console.log(resultDisplayPara.firstChild.remove())
//     resultDisplayPara.remove(resultDisplayPara.firstChild())
// }





