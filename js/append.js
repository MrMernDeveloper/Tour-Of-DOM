
// where to add
const placeList = document.getElementById('places-list');
// what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon'

//3. add the child

placeList.appendChild(li);

// where to add
const mainContainer = document.getElementById('main-section');
// what to be added
const section = document.createElement('section');
// what to be added
const h1 = document.createElement('h1');
// what to be added
h1.innerText = 'my food list';
section.append(h1);
mainContainer.append(section);
section.style.border = '2px solid black'
const ulList = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'mango';
ulList.append(li1);
//..............................................
const li2 = document.createElement('li');
li2.innerText = 'briyani';
ulList.append(li2);
const li3 = document.createElement('li');
li3.innerText = 'kicuri';
ulList.append(li3);
const li4 = document.createElement('li');
li4.innerText = 'khasir manso';
ulList.append(li4);
section.append(ulList);
section.style.backgroundColor = 'lightBlue';
section.style.paddingLeft = '10px';




//3. add the child

placeList.appendChild(li);


//.........................

//set innerHtml Directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress section </h1>
<ul>
<li> T-shirt</li>
<li> pant</li>
<li> sando genji</li>
</ul>
`
mainContainer.appendChild(sectionDress);
