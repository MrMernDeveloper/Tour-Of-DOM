const sections = document.querySelectorAll('section')
for (const section of sections) {
    
    console.log(section);
    section.style.border = '2px solid black';
    section.style.borderRadius = '5px'
    section.style.marginBottom = '15px'
    section.style.paddingLeft = '10px'
    section.style.backgroundColor= 'lightBlue'
}
// const places = document.getElementById('place');
// places.style.backgroundColor ='yellow'
const place = document.getElementById('place');
place.classList.add('text-center');
place.classList.remove('font');