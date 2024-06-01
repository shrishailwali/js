document.addEventListener('click', function(e){
    const input = document.querySelector('#input').value
    const feedback = document.querySelector('#feedback');
    if (input ==='' || !isNaN(input)){
        feedback.textContent = `Please Enter a Valid Grocery Item - Correct it "${input}"`;
        feedback.style.color = 'red';
    }
    else{
        const ul =document.querySelector('itemlist')
        console.log(ul)
        ul.textContent = `${input}`
    }
})
