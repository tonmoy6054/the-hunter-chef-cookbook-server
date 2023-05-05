const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const recipes = require('./data/recipe.json');
app.use(cors());
app.get('/', (req, res) => {
    res.send('Food item is coming')

})

app.get('/categories', (req, res) => {
    res.send(categories);
})
 app.get('/recipes', (req, res) => {
    res.send(recipes);
 })

app.get('/catagories/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedData = categories.find(n => n.id === id);
    res.send(selectedData);
})



app.listen(port, ()=>{
    console.log(`Food item is running on port: ${port}`);
})
