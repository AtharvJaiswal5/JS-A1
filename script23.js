// 🎨 WELCOME ALERT
window.addEventListener('load', () => {
  alert("Welcome to Atharv's Art Gallery 🎨 Enjoy exploring!");
});

// 🖼️ Artwork data using JSON
const artworkData = [
  {
    title: "Ocean Dreams",
    category: "nature",
    img: "https://picsum.photos/id/1022/500/300",
    desc: "Waves painted with peace and motion."
  },
  {
    title: "Mind Maze",
    category: "abstract",
    img: "https://picsum.photos/id/1035/500/300",
    desc: "Abstract representation of human thoughts."
  },
  {
    title: "Digital Bloom",
    category: "digital",
    img: "https://picsum.photos/id/1043/500/300",
    desc: "Artificial intelligence meets creativity."
  }
];

// Add JSON artworks dynamically
const gallery = document.querySelector('.gallery');
artworkData.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card', item.category);
  card.innerHTML = `
    <img src="${item.img}" alt="${item.title}" />
    <div class="info">
      <h2>${item.title}</h2>
      <p>${item.desc}</p>
    </div>
  `;
  gallery.appendChild(card);
});

// Auto scroll loop
let scrollAmount = 0;
function autoScroll() {
  scrollAmount += 1;
  gallery.scrollLeft = scrollAmount;
  if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
    scrollAmount = 0;
  }
}
setInterval(autoScroll, 40);

// Filter system
const filterBtns = document.querySelectorAll('.filter-btn');
let cards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');

    // Show alert on button click
    alert(`Showing ${filter.toUpperCase()} artworks 🖌️`);

    cards.forEach(card => {
      card.style.display =
        filter === 'all' || card.classList.contains(filter)
          ? 'block'
          : 'none';
    });
  });
});

// Popup viewer
const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup-img');
const popupCaption = document.querySelector('.popup-caption');
const close = document.querySelector('.close');

// reselect cards after JSON addition
cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    const title = card.querySelector('h2').innerText;
    popup.style.display = 'flex';
    popupImg.src = img.src;
    popupCaption.textContent = title;
  });
});

close.addEventListener('click', () => popup.style.display = 'none');
// 🎨 Light / Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

// Check local storage for saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeToggle.textContent = "🌙 Dark Mode";
} else {
  themeToggle.textContent = "☀️ Light Mode";
}

// On click, toggle themes
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  }
});
