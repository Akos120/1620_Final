const images = document.querySelector('#thumb-bar');
const hiddenArea = document.querySelector('.footer')



document.querySelector('#label').style.display = 'none';
document.querySelector('#input').style.display = 'none';
document.querySelector('#button').style.display = 'none';

images.addEventListener('mouseover', e => {
    if (hiddenArea.hidden == false) {
        document.querySelector('#label').style.display = '';
        document.querySelector('#input').style.display = '';
        document.querySelector('#button').style.display = '';
    }
})