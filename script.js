
let input = document.getElementById('num');
let multiple = document.getElementById('multiple');
let values = document.getElementById('ul')

function output() {
    let num = input.value;
    let multiples = multiple.value;

    for(let i=1; i <= multiples; i++) {
        let list = document.createElement("li"); //creating the li tag
        values.appendChild(list); //appending the li tag to the values(ul tag)

        let result = num * i;
        list.innerText = `${num} x ${i} = ${result}`; //inserting the statement and result to li tag
    }
}