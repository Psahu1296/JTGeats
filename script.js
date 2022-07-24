// import img from "./images/";

const cardId = [
  { id: "card-1", class: "card-1", image: "./images/image-1.png", off: "50%" },
  { id: "card-2", class: "card-2", image: "./images/image-2.png", off: "" },
  { id: "card-3", class: "card-3", image: "./images/image-3.png", off: "20%" },
  { id: "card-4", class: "card-4", image: "./images/image-4.png", off: "" },
  { id: "card-5", class: "card-5", image: "./images/image-5.png", off: "50%" },
  { id: "card-6", class: "card-6", image: "./images/image-6.png", off: "" },
  { id: "card-7", class: "card-7", image: "./images/image-7.png", off: "20%" },
  { id: "card-8", class: "card-8", image: "./images/image-8.png", off: "50%" },
  { id: "card-9", class: "card-9", image: "./images/image-9.png", off: "50%" },
  { id: "card-10", class: "card-10", image: "./images/image-10.png", off: "" },
  {
    id: "card-11",
    class: "card-11",
    image: "./images/image-11.png",
    off: "20%",
  },
  { id: "card-12", class: "card-12", image: "./images/image-12.png", off: "" },
];

const cardHTML = `
<div class="card">
  <img  class="img-card" id="img-card" />
  <span class="small-box">50%</span>
  <div class="card-body">
    <div class="card-head">
      <p>Home Kitchen</p>
      <p>&#8377 190</p>
    </div>
    <div class="card-footer">
      <div class="rating">
        <img class="star" src="./icons/star.svg" ></img>
        <p class="rate">4.7</p>
        <span class="time-wrap">
        <p class="time">50-79 min</p>
        </span>
      </div>
      <img class="plus" src="./icons/plus.svg"></img>
    </div>
  </div>
</div>
`;

const cardBody = document.getElementById("cards");
cardId.map((el, index) => {
  const cardElement = document.createElement("div");
  cardElement.setAttribute("id", `${el.id}-${index}`);
  cardElement.setAttribute("class", `${el.class}`);
  cardElement.innerHTML = cardHTML;
  cardBody.appendChild(cardElement);
  imageSet(cardBody);
});

function imageSet(parent) {
  parent.childNodes.forEach((element, index) => {
    //   console.log(element.firstElementChild);
    const childElement = element.firstElementChild;
    if (childElement) {
      childElement.firstElementChild.src = cardId[index - 3].image;
      const offerElement = childElement.firstElementChild.nextElementSibling;
      if (offerElement) {
        offerElement.textContent = cardId[index - 3].off;
      }
      if (offerElement.textContent) {
        offerElement.style.width = "30px";
        offerElement.style.height = "30px";
      } else {
        offerElement.style.width = "0px";
        offerElement.style.height = "0px";
      }
    }
  });
}

const animated = document.getElementById("animated");

cardId.slice(0, 3).map((el, index) => {
  const animeItem = document.createElement("div");
  animeItem.setAttribute("id", `anime-${el.id}-`);
  //   animeItem.setAttribute("class", `${el.class}`);
  animeItem.innerHTML = cardHTML;
  animated.appendChild(animeItem);
});
const animeItem = document.querySelectorAll(`[id^="anime-card"]`);
animeItem.forEach((el, index) => {
  console.log(animeItem);
  el.style.margin = "10px";
  const child = el.firstElementChild;
  if (child) {
    const image = child.firstElementChild;
    image.src = cardId[index].image;
    const offer = image.nextElementSibling;
    if (offer) {
      offer.textContent = cardId[index].off;
    }
    if (offer.textContent) {
      offer.style.width = "30px";
      offer.style.height = "30px";
    } else {
      offer.style.width = "0px";
      offer.style.height = "0px";
    }
  }
});

let itemID = 1;
const hoverItem = Array.from(animeItem);
hoverItem[itemID].classList.add("hoverEffect");

function hoverEffect(num) {
  const itemNum = itemID + parseInt(num);
  if (itemNum < 0 || itemNum > 2) {
    return;
  }
  hoverItem[itemID].classList.remove("hoverEffect");
  hoverItem[itemNum].classList.add("hoverEffect");
  itemID = itemNum;
  return;
}
