// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
    document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach((oneGreen) => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = 'visible';
    } else {
      oneGreen.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
 let sauceType = document.querySelector('.sauce')
    if (state.whiteSauce) {
        sauceType.classList.add('sauce-white');
    } else {
      sauceType.classList.remove('sauce-white');
    }
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
 let crustType = document.querySelector('.crust')
    if (state.glutenFreeCrust) {
      crustType.classList.add('crust-gluten-free');
    } else {
      crustType.classList.remove('crust-gluten-free');
    }
}

function renderButtons() {
  activeState = []
  Object.values(state).forEach((eachState) => {
    activeState.push(eachState)
  } )
  let buttonControl = document.querySelectorAll('.btn')
  for (let i = 0; i < buttonControl.length; i++) {
    if (activeState[i] === true) {
      buttonControl[i].classList.add('active')
    } else if (activeState[i] === false) {
      buttonControl[i].classList.remove('active')
    }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  activeState = []
  Object.values(state).forEach((eachState) => {
    activeState.push(eachState)
  } )
  let prices = document.querySelectorAll('.price ul li')
  console.log(prices)
  for (let i = 0; i < prices.length; i++) {
    if (activeState[i] === true) {
      prices[i].hidden = false
    } else if (activeState[i] === false) {
      prices[i].hidden = true
    }
  }
  let totalPrice = 10
  if (activeState[0] === true) {
    totalPrice += 1
  }
  if (activeState[1] === true) {
    totalPrice += 1
  }
  if (activeState[2] === true) {
    totalPrice += 1
  }
  if (activeState[3] === true) {
    totalPrice += 3
  }
  if (activeState[4] === true) {
    totalPrice += 5
  }
  document.querySelector('.price strong').innerText = `$${totalPrice}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});