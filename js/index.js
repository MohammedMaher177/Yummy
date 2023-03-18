let searchName = document.querySelector("#search-by-name");
let searchLetter = document.querySelector("#search-by-letter");
async function getData() {
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  res = await res.json();
  displayData(res.categories, "display-data");
}
getData();

/* S T A R T      N  A V */

function closeNav() {
  let eleWidth = $("nav").innerWidth();
  $("#openning").css("left", `${eleWidth}`);
  $("nav").animate({ left: `-${eleWidth}` }, 500);
  $("#openning").animate({ left: `0` }, 500, () => {
    $("#open i").attr("class", "fa-solid fa-arrow-up-right-from-square");
  });
}

function openNav() {
  let eleWidth = $("nav").innerWidth();
  $("nav").animate({ left: `0` }, 500);
  $("#openning").animate({ left: `${eleWidth}` }, 500, () => {
    $("#open i").attr("class", "fa-solid fa-xmark");
    AOS.init();
  });
}

$(document).ready(function () {
  $(".loading").fadeOut(1000);
  // $(".loading").fadeOut(1000, () => closeNav());
});
$(document).click((e) => {
  let eleWidth = $("nav").innerWidth();
  if (e.clientX > eleWidth) {
    closeNav();
  }
});
$("#open").click(() => {
  let eleOffset = $("#openning").offset().left;
  if (eleOffset !== 0) {
    closeNav();
  } else {
    openNav();
  }
});
/* E N D          N  A V */
AOS.init();

function displayData(arr, id = "display-data") {
  let cartona = ``;
  for (let i = 0; i < arr.length; i++) {
    cartona += `<div class="col-md-3 cursor-pointer">
                        <div class="meal-card">
                            <figure class=" position-relative">
                                <img src="${arr[i].strCategoryThumb}"
                                    class="w-100" alt="">
                                <div class="img-caption bg-opacity-50 bg-white">
                                    ${arr[i].strCategory}
                                </div>
                            </figure>
                        </div>
                    </div>`;
  }
  document.getElementById(id).innerHTML = cartona;
}

$("#navSearch").click(() => {
  $("section").css("display", "none");
  $("#search").css("display", "block");
});
async function getDataByName(name) {
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );
  res = await res.json();
  console.log(res);
  displayDataByName(res.meals, "display-search-data");
}

$(searchName).keyup(() => {
  // console.log(searchName.value);
  getDataByName(searchName.value);
});
function displayDataByName(arr, id = "display-search-data") {
  let cartona = ``;

  for (let i = 0; i < arr.length; i++) {
    cartona += `<div class="col-md-3 cursor-pointer" onclick="${() => {
      return getDataByName(arr[i].strCategoryThumb);
    }}">
                        <div class="meal-card">
                            <figure class=" position-relative">
                                <img src="${arr[i].strMealThumb}"
                                    class="w-100" alt="">
                                <div class="img-caption bg-opacity-50 bg-white">
                                    ${arr[i].strMeal}
                                </div>
                            </figure>
                        </div>
                    </div>`;
  }
  document.getElementById(id).innerHTML = cartona;
}
async function getDataByLetter(name) {
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`
  );
  res = await res.json();
  console.log(res);
  displayDataByName(res.meals, "display-search-data");
}
$("#search-by-letter").keyup(() => {
  console.log(searchLetter.value);
  getDataByLetter(searchLetter.value);
});

$("#nav-categories").click(() => {
  $("section").css("display", "none");
  $("#categories").css("display", "block");
  listCategories();
});

async function listCategories() {
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php
`
  );
  res = await res.json();
  console.log(res);
  displaylistCategories(res.categories);
}
function displaylistCategories(arr) {
  let cartona = ``;

  for (let i = 0; i < arr.length; i++) {
    cartona += `<div class="col-md-3 cursor-pointer mb-5" onclick="">
                        <div class="meal-card">
                            <figure class=" position-relative">
                                <img src="${arr[i].strCategoryThumb}"
                                    class="w-100" alt="">
                                <div class="img-caption bg-opacity-50 bg-white">
                                    ${arr[i].strCategory}
                                </div>
                            </figure>
                        </div>
                    </div>`;
  }
  document.getElementById("display-categories-data").innerHTML = cartona;
}

$("#navArea").click(() => {
  $("section").css("display", "none");
  $("#area").css("display", "block");
  listArea();
});

async function listArea() {
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list
`
  );
  res = await res.json();
  console.log(res);
  displaylistArea(res.meals);
}
function displaylistArea(arr) {
  let cartona = ``;
  for (let i = 0; i < arr.length; i++) {
    cartona += `<div class="col-md-3 cursor-pointer mb-5" onclick="">
                        <div class="meal-card text-center">
                            
                        <i class="fa-brands fa-fort-awesome fs-1 mb-2"></i>
                        <h3>${arr[i].strArea}</h3>
                    
                        </div>
                    </div>`;
  }
  document.getElementById("display-area-data").innerHTML = cartona;
}

$("#navIngredients").click(() => {
  $("section").css("display", "none");
  $("#ingredients").css("display", "block");
  listIngredients();
});

async function listIngredients() {
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`
  );
  res = await res.json();
  console.log(res);
  displaylistIngredients(res.meals);
}
function displaylistIngredients(arr) {
  let cartona = ``;
  for (let i = 0; i < arr.length && i < 50; i++) {
    cartona += `<div class="col-md-3 cursor-pointer mb-5" onclick="">
                        <div class="meal-card text-center">
                            <figure class=" position-relative">
                                <img src="${arr[i].strMealThumb}"
                                    class="w-100" alt="">
                                <div class="img-caption bg-opacity-50 bg-white">
                                    ${arr[i].strMeal}
                                </div>
                            </figure>
                        </div>
                    </div>`;
  }
  document.getElementById("display-ingredients-data").innerHTML = cartona;
}

$("#navContact-us").click(() => {
  $("section").css("display", "none");
  $("#contact-us").css("display", "block");
});
