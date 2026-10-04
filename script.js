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
  {
   title: "mr frog bilboard.png",
    type: "Doodle",
    image: "../artisticabonita/mr%20frog%20bilboard.png",
    alt: "mistr frog billybord",
  },
];

// Everything else in the artisticabonita folder. Add the file name here and it shows up with its file name as the title.
const moreFiles = [
  "jpg/2484.JPG",
  "jpg/49c9b04d79ed50d6e565222db230a6db(1).JPG",
  "jpg/57d2b2a5-e0b9-496b-9a54-74e882e131bd.JPG",
  "jpg/IMG_1722.JPG",
  "jpg/IMG_1905.jpg",
  "jpg/IMG_2816.jpg",
  "jpg/IMG_2905(1).JPG",
  "jpg/IMG_4207.JPG",
  "jpg/IMG_5321(1).JPG",
  "jpg/IMG_5321.jpg",
  "jpg/IMG_5330(1).JPG",
  "jpg/IMG_5341.JPG",
  "jpg/IMG_5622.jpg",
  "jpg/IMG_5623.jpg",
  "jpg/IMG_5624.jpg",
  "jpg/IMG_5625.jpg",
  "jpg/IMG_5627.jpg",
  "jpg/IMG_5628.jpg",
  "jpg/IMG_5629.jpg",
  "jpg/IMG_5630.jpg",
  "jpg/IMG_5631.jpg",
  "jpg/IMG_5632.jpg",
  "jpg/IMG_5633.jpg",
  "jpg/IMG_5634.jpg",
  "jpg/IMG_5635.jpg",
  "jpg/IMG_5636.jpg",
  "jpg/IMG_5637.jpg",
  "jpg/IMG_5638.jpg",
  "jpg/IMG_5639.jpg",
  "jpg/IMG_5640.jpg",
  "jpg/IMG_5641.jpg",
  "jpg/IMG_5642.jpg",
  "jpg/IMG_5643.jpg",
  "jpg/IMG_5644.jpg",
  "jpg/IMG_5645.jpg",
  "jpg/IMG_5646.jpg",
  "jpg/IMG_5647.jpg",
  "jpg/IMG_5648.jpg",
  "jpg/IMG_5649.jpg",
  "jpg/IMG_5650.jpg",
  "jpg/IMG_5651.jpg",
  "jpg/IMG_5652.jpg",
  "jpg/IMG_5653.jpg",
  "jpg/IMG_5654.JPG",
  "jpg/IMG_5655.JPG",
  "jpg/IMG_5656.JPG",
  "jpg/IMG_5657.JPG",
  "jpg/IMG_5658.JPG",
  "jpg/IMG_5659.JPG",
  "jpg/IMG_5660.JPG",
  "jpg/IMG_5661.JPG",
  "jpg/IMG_5662.JPG",
  "jpg/IMG_5683.JPG",
  "jpg/IMG_5684(1).JPG",
  "jpg/IMG_6163(1).JPG",
  "jpg/IMG_8447.JPG",
  "jpg/IMG_8548.JPG",
  "jpg/IMG_8717.JPG",
  "jpg/IMG_9942.JPG",
  "jpg/Life_Of_A_Fly.jpg",
  "jpg/Untitled_Artwork 1.jpg",
  "jpg/Untitled_Artwork 2.jpg",
  "jpg/Untitled_Artwork.jpg",
  "jpg/cc8b16e69abd0645174245f3f59e5143.JPEG",
  "new_png/99D79979-1898-4939-A183-34A85B4C69FB.PNG",
  "new_png/9B8E558B-4E27-4527-BBFF-3AB7A93982B7.PNG",
  "new_png/IMG_5685(1).PNG",
  "new_png/IMG_5686(1).PNG",
  "new_png/IMG_5687(1).PNG",
  "new_png/IMG_5688.PNG",
  "gif/ew.gif",
  "video/Fly_That_Exploded_Animation.mp4",
  "video/Rainbow_Animation_.mp4",
  "video/Trampoline.mp4",
  "video/Treadmill(1).mp4",
  "video/Treadmill.mp4",
  "video/Untitled_Artwork(1).mp4",
  "video/Untitled_Artwork(2).mp4",
  "video/Untitled_Artwork.mp4",
  "video/Walk_Cycle.mp4",
  "video/Waterfall.mp4",
  "video/ew.mp4",
  "video/turkenator_3000.mp4",
];

moreFiles.forEach((file) => {
  const name = file.split("/").pop().replace(/\.\w+$/, "").replaceAll("_", " ").trim();
  const isVideo = file.endsWith(".mp4");
  artworks.push({
    title: name,
    type: isVideo ? "Animation" : "Artwork",
    image: "../artisticabonita/" + encodeURI(file),
    alt: name,
    video: isVideo,
  });
});

const gallery = document.querySelector(".cards");
const dialog = document.querySelector("#art-dialog");
const image = dialog.querySelector("img");
const video = dialog.querySelector("video");
const type = dialog.querySelector("p");
const title = dialog.querySelector("h3");

artworks.forEach((artwork) => {
  const card = document.createElement("button");
  card.className = "card";
  card.type = "button";
  const media = artwork.video
    ? `<video src="${artwork.image}" aria-label="${artwork.alt}" muted loop autoplay playsinline preload="metadata"></video>`
    : `<img src="${artwork.image}" alt="${artwork.alt}" loading="lazy">`;
  card.innerHTML = `
    ${media}
    <span><strong>${artwork.title}</strong><small>${artwork.type}</small></span>
  `;
  card.addEventListener("click", () => {
    image.hidden = Boolean(artwork.video);
    video.hidden = !artwork.video;
    if (artwork.video) {
      video.src = artwork.image;
    } else {
      image.src = artwork.image;
      image.alt = artwork.alt;
    }
    type.textContent = artwork.type;
    title.textContent = artwork.title;
    dialog.showModal();
  });
  gallery.append(card);
});

dialog.addEventListener("close", () => video.pause());
dialog.querySelector("button").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
