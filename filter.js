const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },
];

const productsWrapper = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const cats = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const showProducts = (arrayOfProd) => {

  const strProducts = arrayOfProd.map(product => `
    <div class="product">
      <img src="${product.img}" alt="" />
      <span class="${product.name}">Invicta Men's Pro Diver 2</span>
      <span class="priceText">${product.price}</span>
    </div>
  `).join("")

  productsWrapper.innerHTML = strProducts;
};

showProducts(data);

searchInput.addEventListener("keyup", (event) => {
  const value = event.target.value.toLowerCase();
  if (value) {
    const filterArray = data.filter(item => item.name.toLowerCase().includes(value))
    showProducts(filterArray)
  } else {
    showProducts(data);
  }
});

const setCat = () => {
  const AllCats = data.map((product) => product.cat);
  const filtCat = AllCats.filter(
  (item, index) => AllCats.indexOf(item) === index
  );

  cats.innerHTML = filtCat.map(cat => `
  <span class="cat">${cat}</span>
  `).join("")

  cats.addEventListener("click", (event) => {
    const selectedCat = event.target.textContent;
    if (selectedCat) {
      const sortCat = data.filter(product => product.cat === selectedCat) 
      showProducts(sortCat)
    } else {
      showProducts(data)
    }
  })
};

const setPrices = () => {
  const priceList = data.map(product => product.price)
  const minPrice = Math.min(...priceList)
  const maxPrice = Math.max(...priceList)
  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceRange.step = 8;
  priceValue.textContent = `$ ${maxPrice}`

  priceRange.addEventListener("input", (event) => {
    const value = event.target.value;
    priceValue.textContent = `$ ${value}`

  const filterArr = data.filter(product => product.price <= value);
  showProducts(filterArr)
  })
};

setCat();
setPrices();