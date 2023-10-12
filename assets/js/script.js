const divContainer = document.querySelectorAll('.inner-div'),
paragraph = document.querySelectorAll('.paragraph'),
btnContainer = document.querySelectorAll('.btn'),
button = document.querySelectorAll('.button');

button.forEach((element, index) => {
    element.addEventListener('click', () => {
       
        removeAllActive();

        btnContainer[index].classList.toggle('active-button');
        paragraph[index].classList.toggle('active-paragraph');
        divContainer[index].classList.toggle('inner-div-active');
        
        button[index].innerText == 'Read More' ? button[index].innerText = 'show less' : button[index].innerText = 'Read More';
    })
})

function removeAllActive() {
    btnContainer.forEach(btnc => {
         if(btnc.querySelector('active-button')) {
             btnc.classList.remove('active-button')
         }
    })
    paragraph.forEach(para => {
        if(para.querySelector('active-paragraph')) {
            para.classList.remove('active-paragraph')
        }
    })
    divContainer.forEach(div => {
        if(div.querySelector('inner-div-active')) {
            div.classList.remove('inner-div-active')
        }
    })
}





















