const images = document.querySelector('#thumb-bar');
const hiddenArea = document.querySelector('.footer')
const submitBtn = document.querySelector('#button')


document.querySelector('#label').style.display = 'none';
document.querySelector('#input').style.display = 'none';
document.querySelector('#button').style.display = 'none';

images.addEventListener('mouseover', e => {
    if (hiddenArea.hidden == false) {
        document.querySelector('#label').style.display = '';
        document.querySelector('#input').style.display = '';
        document.querySelector('#button').style.display = '';
    }
    changeSource = e.target.src
    document.querySelector('.main-img').src = changeSource;
})

submitBtn.addEventListener('click', e => {
    const inputValue = document.querySelector('#effect');
    if (inputValue.value == 'blur') {
        let currentImg = document.querySelector('.main-img');
        let currentSrc = currentImg.src;
        let newSrc = currentSrc.substring(0, currentSrc.length-4) + 'B.jpg';
        currentImg.outerHTML = `<img class="main-img" src="${newSrc}">`;
        inputValue.value = '';
    } else {
        alert('Invalid Effect')
        inputValue.value = '';
    }
})