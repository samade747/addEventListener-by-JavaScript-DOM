let paragaraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nihil nam eligendi voluptates perferendis placeat? A, hic deleniti dolorem" 

let para1 = document.querySelector('p');

para1.textContent = paragaraph.slice(0,10) + '...';

const button = document.querySelector('button')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')

button.setAttribute('onclick', 'showMore()');
button.addEventListener('click', showMore);

function showMore() {
    para1.textContent = paragraph;
    document.getElementById('seeMore').setAttribute('onclick', 'showLess()');
    document.getElementById('seeMore').textContent = 'See Less';
}

function showLess() {
    para1.textContent = paragraph.slice(0, 10) + '...';
    document.getElementById('seeMore').setAttribute('onclick', 'showMore()');
    document.getElementById('seeMore').textContent = 'See More';
}

document.getElementById('seeMore').addEventListener('click', showMore);
document.getElementById('plus').addEventListener('click', function() {
    paragraph += ' Additional text.';
    para1.textContent = paragraph;
});
document.getElementById('minus').addEventListener('click', function() {
    paragraph = paragraph.slice(0, -17); // Remove " Additional text."
    para1.textContent = paragraph;
});
