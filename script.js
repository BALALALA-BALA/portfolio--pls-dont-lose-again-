// Add a new portfolio piece here. The gallery and detail modal are built automatically.
const artworks = [
  {
    title: "Mister George, Unicon",
    type: "Character illustration",
    image: "../artisticabonita/mistr%20george%20unicon.png",
    alt: "A colorful unicorn character illustration",
  },
  {
    title: "George’s Day Out",
    type: "Digital artwork",
    image: "../artisticabonita/gorge%20the%20uNICorN.jpg",
    alt: "A unicorn artwork by Lisa Chen",
  },
  {
    title: "Mister Froggyson, The Frog.",
    type: "Character study",
    image: "../artisticabonita/FROG.png",
    alt: "A cheerful frog character illustration",
  },
  {  title: "Random Girl on Stage.",
    type: "pen on Paper, the Boring Classic",
    image: "../artisticabonita/cake_girl.png",
    alt: "A young girl standing on a stage, depicted in a classic pen drawing style",
  },
  {
   title: "She's Just a Little Puffy...",
    type: "Doodle",
    image: "../artisticabonita/puffy_girl.png",
    alt: "puffy_girl",
  },
];

const gallery = document.querySelector(".cards");
const dialog = document.querySelector("#art-dialog");
const image = dialog.querySelector("img");
const type = dialog.querySelector("p");
const title = dialog.querySelector("h3");

artworks.forEach((artwork) => {
  const card = document.createElement("button");
  card.className = "card";
  card.type = "button";
  card.innerHTML = `
    <img src="${artwork.image}" alt="${artwork.alt}">
    <span><strong>${artwork.title}</strong><small>${artwork.type}</small></span>
  `;
  card.addEventListener("click", () => {
    image.src = artwork.image;
    image.alt = artwork.alt;
    type.textContent = artwork.type;
    title.textContent = artwork.title;
    dialog.showModal();
  });
  gallery.append(card);
});

dialog.querySelector("button").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
