function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const wrapper = document.querySelector('div');
wrapper.style.textAlign = 'center';



const year = document.querySelector('#year');
year.style.fontSize = '64px';



const title = document.querySelector('h2');
title.style.textDecoration = 'underline';
title.style.fontSize = '26px';
title.style.fontWeight = '100';

const time = document.createElement("div");
time.style.display = 'inline';
time.style.width = 'min-content';
time.style.fontSize = '18px';
time.style.padding = '5px 10px';
title.parentNode.insertBefore(time, title.nextSibling);


const listItem = document.querySelector('ul');
listItem.style.listStyleType = 'none';
// listItem.style.textAlign = 'unset';
// listItem.style.alignContent = 'center';

const item = document.querySelectorAll('li');
item.forEach(item => {
    item.style.display = 'inline-block';
    item.style.textAlign = 'left';
    item.style.width = '50%';
    item.style.fontSize = '20px';
    item.style.wordSpacing = '3px';
    item.style.lineHeight = '50px';
    item.style.margin = '2px';
    item.style.padding = '10px 16px';
    if (item.innerHTML.includes('Done'))
        item.style.backgroundColor = '#00ffa3';
    else if (item.innerHTML.includes('Ongoing'))
        item.style.backgroundColor = '#e4a026';
    else
        item.style.backgroundColor = '#b62226';
});



setInterval(function () {
    year.style.color = getRandomColor();
    time.innerHTML = new Date();
    time.style.backgroundColor = getRandomColor();
}, 1000);