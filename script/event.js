clickBox = document.querySelector('.click')
spinBox = document.querySelector('.spin')
moveBox = document.querySelector('.move')
hoverBox = document.querySelector('.hover')
dblclickBox = document.querySelector('.dblclick')


colors = ['blue', 'green', 'crimson', 'purple', 'turquoise', 'gray', 'steelblue', 'lemonchiffon', 'maroon', 'indigo',
    'pink', 'orange', 'lilac', 'yellow', 'teal', 'goldenrod', 'lightseagreen', 'olive', 'cornflowerblue',
'silver', 'rebeccapurple', 'salmon', 'aquamarine', 'lavender', 'magenta', 'lime', 'aqua', 'red', 'bisque',
'cadetblue', 'coral', 'dodgerblue', 'dimgray', 'mediumspringgreen', 'deeppink', 'gold', 'seagreen', 'wheat', 'thistle']
index = 0
clickBox.addEventListener('click', () => {

clickBox.style.background = colors[index]
index = index + 1
index = index % colors.length;

clickBox.style.color = 'white'
})

spinBox.addEventListener('click', () => {
    spinBox.classList.toggle('start')
})


x = 0;
y=0;

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowRight') {
        x = x+10

    }
     if (event.key == 'ArrowUp') {
        y = y - 10

    }
    if (event.key == 'ArrowLeft') {
        x = x - 10

    }
     if (event.key == 'ArrowDown') {
        y = y + 10

    }
     moveBox.style.transform = `translate(${x}px, ${y}px)`;
})



hoverBox.addEventListener('mouseenter', () => {

hoverBox.style.transform = "scale(2)";
})
hoverBox.addEventListener('mouseleave', () => {

hoverBox.style.transform = "scale(1)";
})

dblclickBox.addEventListener("dblclick", () => {
    dblclickBox.style.transition = "opacity .7s";
    if (dblclickBox.style.opacity == "1") {
        dblclickBox.style.opacity = ".4";
    } else {
        dblclickBox.style.opacity = "1";
    }
    dblclickBox.style.color = colors[Math.floor(Math.random(1) * colors.length)];
});
