const countValue = document.getElementById('input')

const decrement = () =>{
    // get the value 
    let  value = parseInt(countValue.innerText);
    // updating value 
    value = value - 1;
    // set the value 
    countValue.innerText = value;
}


const increment = () =>{
    // get the value 
    let  value = parseInt(countValue.innerText);
    // updating value 
    value = value + 1;
    // value = value.toString()
    // set the value 
    countValue.innerText = value;
}