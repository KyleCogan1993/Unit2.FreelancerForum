// === Type Definitions ===
/**
 * @typedef {Object} freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} price
 */ 

// === State ===

const names = ["Alice", "Bob", "Carol", "Otto", "Orion", "Ian", "Kyle", "Lester"];
const occupations = ["Writer", "Teacher", "Programmer", "Bum", "Hacker", "Bus Driver", "Teller", "Rapper"];
const prices = [20, 25,30,40,50,70,100];

function selectRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
  
function addRandomFL(freelancer) {
    const name = selectRandomElement(names);
    const occupation = selectRandomElement(occupations);
    const price = selectRandomElement(prices);
    const fl = { name, occupation, price };
    freelancer.push(fl);
}
/**
 * @type {freelancer[]}
 */
const allFreelancers = [];

function calcAvg() {
    let total = allFreelancers.reduce((acc, item) => {
        return acc+=item.price;
    },0);
    return (total/allFreelancers.length).toFixed(2);
}

// === Render ===
/**
 * 
 * @param {freelancer[]} freelancer 
 */
function renderFreelancer(freelancer) {
    const $freelancers = allFreelancers.map((freelancer) => {
        const $freelancer = document.createElement("li");
        $freelancer.textContent = `${freelancer.name}  ${freelancer.occupation} $${freelancer.price}`;
        return $freelancer; 
    });
    const ulNames = document.querySelector("span.table");
    ulNames.replaceChildren(...$freelancers);
    
}

/**
 * 
 * @param {freelancer[]} allFreelancers 
 */
function render(allFreelancers) {
  renderFreelancer(allFreelancers.freelancer);
}

function renderAverage(allFreelancers) {
    const $average = document.createElement("p.avgerage");
    $average.textContent  = `The average price is $${calcAvg()}`;
    const avgName = document.querySelector("p.average");
    avgName.textContent = $average.textContent;
}

// === Script ===

render(allFreelancers);
renderAverage(allFreelancers);
setInterval(() => {
    addRandomFL(allFreelancers);
    render(allFreelancers);
    renderAverage(allFreelancers);
  }, 1000);