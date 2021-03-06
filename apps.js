const images = document.querySelector('#thumb-bar');
const hiddenArea = document.querySelector('.footer')
const submitBtn = document.querySelector('#button')

document.querySelector('#label').style.display = 'none';
document.querySelector('#input').style.display = 'none';
document.querySelector('#button').style.display = 'none';

for (i = 1; i <= 5; i++) {
    images.innerHTML += `<img class="displayed-img" src="images/pic${i}.jpg">`
}

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
    const input = document.querySelector('#effect');
    const inputValue = input.value
    const noCaseSens = inputValue.toLowerCase();
    if (noCaseSens == 'blur') {
        let currentImg = document.querySelector('.main-img');
        let currentSrc = currentImg.src;
        let newSrc = currentSrc.substring(0, currentSrc.length-4) + 'B.jpg';
        currentImg.outerHTML = `<img class="main-img" src="${newSrc}">`;
        input.value = '';
    } else {
        alert('Invalid Effect')
        input.value = '';
    }
})