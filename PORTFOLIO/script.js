// Add a new portfolio piece here. The gallery and detail modal are built automatically.
const artworks = [
  { 
    title: 'Mister George, Unicon', 
    type: 'Character illustration', 
    image: '../images/mistr%20george%20unicon.png', 
    alt: 'A colorful unicorn character illustration' },
  { 
    title: 'George’s Day Out', 
    type: 'Digital artwork', 
    image: '../images/gorge%20the%20uNICorN.jpg', 
    alt: 'A unicorn artwork by Lisa Chen' },
  { 
    title: 'Frog Friend', 
    type: 'Character study', 
    image: '../images/FROG.png', 
    alt: 'A cheerful frog character illustration' },
];

const gallery = document.querySelector('.cards');
const dialog = document.querySelector('#art-dialog');
const image = dialog.querySelector('img');
const type = dialog.querySelector('p');
const title = dialog.querySelector('h3');

artworks.forEach((artwork, index) => {
  const card = document.createElement('button');
  card.className = 'card';
  card.type = 'button';
  card.innerHTML = `
    <b>${String(index + 1).padStart(2, '0')}</b>
    <img src="${artwork.image}" alt="${artwork.alt}">
    <span><strong>${artwork.title}</strong><small>${artwork.type}</small><em>↗</em></span>
  `;
  card.addEventListener('click', () => {
    image.src = artwork.image;
    image.alt = artwork.alt;
    type.textContent = artwork.type;
    title.textContent = artwork.title;
    dialog.showModal();
  });
  gallery.append(card);
});

dialog.querySelector('button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
