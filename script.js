let counterValue=document.getElementById("counter-value")

function increment(){
    let updatedCounterValue=parseInt(counterValue.textContent)+1;
    
    counterValue.textContent=updatedCounterValue;
    if (updatedCounterValue>0){
        counterValue.style.color="green"
    }
    else if (updatedCounterValue<0){
        counterValue.style.color="red"
    }
    else{
        counterValue.style.color="white"
    }
}
function decrement(){
    let updatedCounterValue=parseInt(counterValue.textContent)-1;
   
    counterValue.textContent=updatedCounterValue;
    if (updatedCounterValue>0){
        counterValue.style.color="green"
    }
    else if (updatedCounterValue<0){
        counterValue.style.color="red"
    }
    else{
        counterValue.style.color="white"
    }
}
function reset(){
    let updatedCounterValue=0;
    counterValue.textContent=updatedCounterValue;
    if (updatedCounterValue>0){
        counterValue.style.color="green"
    }
    else if (updatedCounterValue<0){
        counterValue.style.color="red"
    }
    else{
        counterValue.style.color="white"
    }
}