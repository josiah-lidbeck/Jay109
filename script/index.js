const changeStyle = document.querySelector('.changeStyle')
const pages = document.querySelectorAll('.page');
const body = document.querySelector('body');
boxthemes = ['white', 'gray', 'red', 'lightyellow',]
bkgthemes = ['mediumspringgreen', 'gainsboro', 'blue', 'skyblue']
fontThemes = ['quicksand', 'shadows into light', 'bangers', 'chewy']
index = 0;
changeStyle.addEventListener('click', () => {
    pages.forEach(page => {
    page.style.background = boxthemes[index];
})
    body.style.background = bkgthemes[index]
body.style.fontFamily = fontThemes[index];
    changeStyle.style.background = boxthemes[index];
    index = index + 1
    index = index % bkgthemes.length;
})

