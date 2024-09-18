const numberOfDivs = 40;
    
    
const line1 = document.querySelector('.line1');

for (let i = 0; i < numberOfDivs; i++) {
 
    const div = document.createElement('div');
    div.className = 'line-text';


    const p = document.createElement('p');
    p.textContent = 'your text here';


    const star = document.createTextNode('✦');


    div.appendChild(p);
    div.appendChild(star);

 
    line1.appendChild(div);
}

const line2 = document.querySelector('.line2');

for (let i = 0; i < numberOfDivs; i++) {
 
    const div = document.createElement('div');
    div.className = 'line-text2';


    const p = document.createElement('p');
    p.textContent = 'your text here';


    const star = document.createTextNode('✦');


    div.appendChild(p);
    div.appendChild(star);

 
    line2.appendChild(div);
}