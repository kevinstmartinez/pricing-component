const checkbox = document.querySelector('#checkbox')
const $price = document.querySelector('#price')
checkbox.addEventListener('change', function(event){
    $price.classList.toggle('show-anually')
    
})

