const loadBtn = document.getElementById('loadBtn');
const loadInStock = document.getElementById('loadInStock');
const loadCategories = document.getElementById('loadCategories');
const output = document.getElementById('output');


function clearOutput() {
output.innerHTML = '';
}


function renderProducts(products) {
clearOutput();
const grid = document.createElement('div');
grid.className = 'grid';


products.forEach(p => {
const card = document.createElement('div');
card.className = 'card';
card.innerHTML = `
<h3>${p.name}</h3>
<p><strong>Category:</strong> ${p.category}</p>
<p><strong>Price:</strong> ₹${p.price.toLocaleString()}</p>
<p><strong>Stock:</strong> <span class="${p.inStock ? 'in' : 'out'}">${p.inStock ? 'In stock' : 'Out of stock'}</span></p>
`;
grid.appendChild(card);
});


output.appendChild(grid);
}


function renderCategories(categories) {
clearOutput();
const box = document.createElement('div');
box.innerHTML = `<h2>Categories</h2><ul>${categories.map(c => `<li>${c}</li>`).join('')}</ul>`;
output.appendChild(box);
}


loadBtn.addEventListener('click', async () => {
try {
const res = await fetch('/products');
const data = await res.json();
renderProducts(data);
} catch (err) {
output.innerText = 'Failed to load products.';
console.error(err);
}
});


loadInStock.addEventListener('click', async () => {
try {
const res = await fetch('/products/in-stock');
const data = await res.json();
renderProducts(data);
} catch (err) {
output.innerText = 'Failed to load in-stock products.';
console.error(err);
}
});


loadCategories.addEventListener('click', async () => {
try {
const res = await fetch('/products/categories');
const json = await res.json();
renderCategories(json || []);


} catch (err) {
output.innerText = 'Failed to load categories.';
console.error(err);
}
});