const btns = document.querySelectorAll('.btn');

const btnAnimation = e => {
    const top = e.clientY;
    const left = e.clientX;

    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    const insideTop = top - btnTop;
    const insideLeft = left - btnLeft;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = insideTop + 'px';
    circle.style.left = insideLeft + 'px';

    e.target.appendChild(circle);

    setTimeout(() => {
        circle.remove()
    }, '300');
}

btns.forEach(btn => btn.addEventListener('click', btnAnimation));