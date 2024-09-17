function focused() {
    let inputs = document.querySelectorAll('input')

    for(const input of inputs){
        input.addEventListener('focus', focus)
        input.addEventListener('blur', blur)
    }
    
    function focus(element){
        element.currentTarget.parentElement.classList.add('focused')
    }
    function blur(element){
        element.currentTarget.parentElement.classList.remove('focused')
    }
}