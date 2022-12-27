const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of pictures */
const pictures = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altImgNames = ['magnified human eye', 'vivid spiral clouds', 'beautiful purplish flowers', 'a cave painting', 'a butterfly siting on a leaf'];

/* Looping through images */

for (let i = 0; i < pictures.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${pictures[i]}`);
  newImage.setAttribute('alt', altImgNames[i]);
  thumbBar.appendChild(newImage);  

  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', `images/${pictures[i]}`);
    displayedImage.setAttribute('alt', altImgNames[i]);
  });
}

//TODO: Wiring up the Darken/Lighten button 
btn.addEventListener('click', () => {
  if (btn.getAttribute('class') === "dark") {
    console.log('true')
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
