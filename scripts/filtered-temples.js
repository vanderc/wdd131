let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

const mainnav = document.querySelector(".navi");
const hambutton = document.querySelector("#menu");


hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

function togglActive(element){
    element.classList.toggle("active");
}

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Los Angeles California",
    location: "Los Angeles, California",
    dedicated: "1956, March, 11",
    area: 190614,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/f776300d2f59a0d25045f45d961c326a7ae080d8/full/320%2C/0/default"
  },
  {
    templeName: "Houston Texas",
    location: "Houston, Texas",
    dedicated: "2000, August, 26",
    area: 33970,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/65bc8aa26913ef6a8302e6e73099c4bd0b57c60b/full/320%2C/0/default"
  },
  {
    templeName: "Denver Colorado",
    location: "Denver, Colorado",
    dedicated: "1986, October, 24",
    area: 27006,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/cc479dc2aad6195d816ce9920fa214f7f4bc7f60/full/320%2C/0/default"
  },
];

templeCards(temples);

const pageHeader = document.querySelector("#pageHeader")

function templeCards(filteredTempleArray) {
	document.querySelector(".grid").innerHTML = "";


	filteredTempleArray.map((temple) => {

	const tCard = document.createElement("section");
	tCard.classList = 'card';
	const templeCardName = document.createElement('h3');
	const templeCardLocation = document.createElement('p');
	const templeCardDedication = document.createElement('p');
	const templeCardArea = document.createElement('p');
	const templeCardImg = document.createElement('img');
	
	templeCardImg.setAttribute("src", temple.imageUrl)
	templeCardImg.setAttribute("atl", `${temple.templeName} temple`)
	templeCardImg.setAttribute("loading", "lazy")

	templeCardName.innerHTML = `${temple.templeName} Temple`;
	templeCardLocation.innerHTML = `Location: ${temple.location}`;
	const tDedicationDate = temple.dedicated.split(',');
	templeCardDedication.innerHTML = `Dedicated on: ${tDedicationDate[1]} ${tDedicationDate[2]}, ${tDedicationDate[0]}`;
	templeCardArea.innerHTML = `Temple area: ${temple.area.toLocaleString('en-US')} sq ft`;
	templeCardImg.innerHTML = temple.imageUrl;
	
	tCard.appendChild(templeCardName);
	tCard.appendChild(templeCardLocation);
	tCard.appendChild(templeCardDedication);
	tCard.appendChild(templeCardArea);
	tCard.appendChild(templeCardImg);

	const templeCardsFinal = document.querySelector('.grid');
	templeCardsFinal.appendChild(tCard);

	})
}

  function splitDate(date) {
    const newDate = date.split(',');
    return newDate;
  }
  
  const allTemples = document.querySelector('#Home')
  const newTemples = document.querySelector('#New');
  const oldTemples = document.querySelector('#Old');
  const largeTemples = document.querySelector('#Large');
  const smallTemples = document.querySelector('#Small');
  
  
  
  
  allTemples.addEventListener("click", () => {
    templeCards(temples)
    pageHeader.textContent = "Home";
  })
  
  newTemples.addEventListener("click", () => {
    templeCards(temples.filter(temple => splitDate(temple.dedicated)[0] >= "2000"))
    pageHeader.textContent = "New";
  })
  
  oldTemples.addEventListener("click", () => {
    templeCards(temples.filter(temple => splitDate(temple.dedicated)[0] <= "1900"))
    pageHeader.textContent = "Old";
  })
  
  largeTemples.addEventListener("click", () => {
    templeCards(temples.filter(temple => temple.area >= 90000))
    pageHeader.textContent = "Large";
  })
  
  smallTemples.addEventListener("click", () => {
    templeCards(temples.filter(temple => temple.area <= 10000))
    pageHeader.textContent = "Small";
  })