const scrollLeft = document.querySelector(".scroll-left");
const scrollRight = document.querySelector(".scroll-right");
const heroDiv = document.querySelector(".hero-img");
const sectionContainer = document.querySelector("section");
const bodyContainer = document.querySelector("body");
const emblemDiv = document.querySelector(".emblem");
const albumTitleSpan = document.querySelector(".album-title");
const texts = document.querySelectorAll(".text");
const albumNum = document.querySelector(".album-num");
const spotifyWidget = document.querySelector(".spotify-widget iframe");
const albums = [
  {
    album: "Vikram",
    emblem: "Onece Upone A time",
    "bg-color": ["#53254C", "#0D1827"],
    "accent-color": "#7C2E70",
    url:
      "https://static.toiimg.com/photo/91660096.jpeg",
    spotify:
      "https://open.spotify.com/embed/track/6FQQiTpYnfc5803p84bQp1?utm_source=generator"
  },
  {
    album: "Master",
    emblem: "Life was a willow",
    "bg-color": ["#66493D", "#32130F"],
    "accent-color": "#B4653C",
    url: "https://e0.pxfuel.com/wallpapers/120/618/desktop-wallpaper-thalapathy-vijay-master-movie-meme-thumbnail.jpg",
    spotify:
      "https://open.spotify.com/embed/track/7KqmDr9lTjwXnX5krMIKiC?utm_source=generator"
  },
  {
    album: "RolexSir",
    emblem: "lost in the memory",
    "bg-color": ["#535353", "#181818"],
    "accent-color": "#898989",
    url: "https://w0.peakpx.com/wallpaper/1001/145/HD-wallpaper-rolex-rolex-surya.jpg",
    spotify:
      "https://open.spotify.com/embed/track/3Vb8KkT6Ub5fFGPYJCJyLh?utm_source=generator"
  },
  {
    album: "Kgf 2",
    emblem: "I only see daylight",
    "bg-color": ["#BDADB0", "#7A4870"],
    "accent-color": "#873D78",
    url:
      "https://images.indianexpress.com/2022/05/KGF-2-1200.jpg",
    spotify:
      "https://open.spotify.com/embed/track/6Ml882mcsf03PGkoqMp0vL?utm_source=generator"
  },
  {
    album: "LEO",
    emblem: "Let the games begin",
    "bg-color": ["#242424", "#070707"],
    "accent-color": "#505050",
    url:
      "https://m.media-amazon.com/images/M/MV5BMWZlMTY0YjItMDczMC00Mzk1LWEyMDgtM2M5YWJmYTU4Y2I2XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    spotify:
      "https://open.spotify.com/embed/track/4lCJO8QeKIkU2um1z5NBb9?utm_source=generator"
  },
  {
    album: "Saaho",
    emblem: "Love's a game wanna play",
    "bg-color": ["#A88172", "#653E32"],
    "accent-color": "#DF9882",
    url: "https://www.thestatesman.com/wp-content/uploads/2019/08/review.jpg",
    spotify:
      "https://open.spotify.com/embed/track/6HqejUzAFmKG5ovgBzqzek?utm_source=generator"
  },
  {
    album: "KGF",
    emblem: "loving him was red",
    "bg-color": ["#660E11", "#210402"],
    "accent-color": "#9E4E23",
    url: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202307/kgf_japan-sixteen_nine.jpg?VersionId=Fmoc0G_vo.N1IhEVdEhpNkF4Ysucxi_0",
    spotify:
      "https://open.spotify.com/embed/track/3UHah6fvwKWJ2B2X3xsFOs?utm_source=generator"
  },
  {
    album: "Kaththi",
    emblem: "sparks flew instantly",
    "bg-color": ["#62252A", "#4B0102"],
    "accent-color": "#E50619",
    url:
      "https://imgnew.outlookindia.com/public/uploads/articles/2014/11/10/kaathi_review_20141110.jpg",
    spotify:
      "https://open.spotify.com/embed/track/1m2PQa2vARopdOK8xGVkaX?utm_source=generator"
  },
  {
    album: "Vikram-Vedha",
    emblem: "baby just say yes",
    "bg-color": ["#a8834a", "#644323"],
    "accent-color": "#CEA766",
    url: "https://gumlet.assettype.com/film-companion%2Fimport%2Fwp-content%2Fuploads%2F2017%2F07%2Fvikram-vedha-movie-review-feature-43.jpeg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
    spotify:
      "https://open.spotify.com/embed/track/3ofnkr6j3FLAHc2eTh9YnQ?utm_source=generator"
  },

  {
    album: "Kalki",
    emblem: "wishing on a wishing star",
    "bg-color": ["#6F6F4C", "#34351E"],
    "accent-color": "#B2C15E",
    url:
      "https://gumlet.assettype.com/film-companion%2Fimport%2Fwp-content%2Fuploads%2F2019%2F08%2FB23B622B-4102-4C74-899C-2C60B9C3B924.jpeg",
    spotify:
      "https://open.spotify.com/embed/track/7dfZHApOvRVQLbiLs2vYM5?utm_source=generator"
  }
];

// Add Event Listeners
scrollLeft.addEventListener("click", () => handleClickScroll(-1));
scrollRight.addEventListener("click", () => handleClickScroll(1));
heroDiv.addEventListener("animationend", () => {
  heroDiv.classList.remove("album-transition");
  document.addEventListener("keydown", handleKeyScroll);
  scrollLeft.disabled = false;
  scrollRight.disabled = false;
  scrollLeft.classList.remove("key-press-hover-left");
  scrollRight.classList.remove("key-press-hover-right");

  for (const text of texts) text.classList.add("show-texts");
});

// Event Listeners
const handleClickScroll = (val) => {
  if (index + val >= 0 && index + val < albums.length) {
    updateDisplay((index += val));
  }
};

const handleKeyScroll = (e) => {
  if (e.key == "ArrowLeft") {
    scrollLeft.classList.add("key-press-hover-left");
    handleClickScroll(-1);
  }
  if (e.key == "ArrowRight") {
    scrollRight.classList.add("key-press-hover-right");
    handleClickScroll(1);
  }
};

// Main Function
let index = 0;

const updateDisplay = (index) => {
  // SET DELIMITER
  let DELIMITER = "";

  // delcare album specified by index
  const album = albums[index];

  // reset all animations and disable button
  for (const text of texts) text.classList.remove("show-texts");
  emblemDiv.innerHTML = "";
  scrollLeft.disabled = true;
  scrollRight.disabled = true;
  document.removeEventListener("keydown", handleKeyScroll);

  // add css classes, texts, and styles
  sectionContainer.id = `hero-${album.album.toLowerCase().replace(" ", "-")}`;
  bodyContainer.style.background = `linear-gradient(180deg, ${album["bg-color"][0]} 0%, ${album["bg-color"][1]} 100%)`;
  heroDiv.style.backgroundImage = `url(${album.url})`;
  albumTitleSpan.textContent = album.album;
  spotifyWidget.src = album.spotify;

  const number = albums.length - index;
  albumNum.innerText = number >= 10 ? number + "." : `0${number}.`;
  albumNum.style.color = album["accent-color"];

  // hide arrows
  if (index === 0) scrollLeft.classList.add("hide-arrow");
  else scrollLeft.classList.remove("hide-arrow");

  if (index === 9) scrollRight.classList.add("hide-arrow");
  else scrollRight.classList.remove("hide-arrow");

  // create emblem
  createEmblem(album.emblem, DELIMITER[0] || undefined).forEach((node) =>
    emblemDiv.append(node)
  );

  // add final animations
  heroDiv.classList.add("album-transition");
};

const createEmblem = (string, delimiter = "•") => {
  const spans = [];

  string = string.trim().replaceAll(" ", delimiter) + delimiter;
  const numChars = string.length;
  const degVal = 90 / (numChars / 4);

  string.split("").forEach((char, idx) => {
    const span = document.createElement("span");
    span.innerText = char;
    span.style.transform = `rotate(${180 - degVal * idx}deg)`;
    if (char === delimiter) span.style.color = albums[index]["accent-color"];
    spans.push(span);
  });

  return spans;
};

// Start Script
updateDisplay(index);
