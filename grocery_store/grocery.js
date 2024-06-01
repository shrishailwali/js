document.addEventListener('click', function(e){
    const input = document.querySelector('#input').value
    const feedback = document.querySelector('#feedback');
    const ul =document.querySelector('.itemlist')
    if (input ==='' || !isNaN(input)){
        feedback.textContent = `Please Enter a Valid Grocery Item - Correct it "${input}"`;
        feedback.style.color = 'red';
    }
    else{
        feedback.textContent =`Successfully Collected the Item ${input}`
        feedback.style.color = 'green'
        const li = document.createElement('li')
        li.textContent = input
        ul.append(li)
        document.querySelector('#input').value = ''
    }
})
