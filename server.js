const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const products = [
{ id: 1, name: 'Laptop Pro 14', category: 'Electronics', price: 120000, inStock: true },
{ id: 2, name: 'Ergo Chair', category: 'Furniture', price: 15000, inStock: false },
{ id: 3, name: 'Wireless Mouse', category: 'Accessories', price: 1200, inStock: true },
{ id: 4, name: 'Bluetooth Headphones', category: 'Electronics', price: 4500, inStock: false },
{ id: 5, name: 'Standing Desk', category: 'Furniture', price: 22000, inStock: true }
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/products',(req,res)=>{
    res.json(products);
});

app.get('/products/categories',(req,res)=>{
    const categoriesSet=new Set(products.map(p=>p.category));
    const categories=[...categoriesSet];
    res.json(categories);
});
app.get('/products/in-stock',(req,res)=>{
    const inStockProducts=products.filter(p=>p.inStock===true);
    res.json(inStockProducts);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
