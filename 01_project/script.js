const form = document.querySelector('form')
console.log(form)

document.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    console.log(height, weight)
    if(height ==='' || isNaN(height) || height < 0){
        result.innerHTML = `Height values should be Integer`
    }
    if(weight ==='' || isNaN(weight) || height < 0){
        result.innerHTML = `Weight values should be Integer`
    }
    else{
        const bmi = (weight/(height*height)).toFixed(2)
        result.innerHTML = bmi
        
    }
})