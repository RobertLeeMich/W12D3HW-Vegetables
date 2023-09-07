const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fruits = require('./models/fruits');
const vegetables = require("./models/vegetables")
const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// Index Route
app.get('/fruits', (req, res) => {
  res.render('Index', { fruits });
});

//Vegetable Index route
app.get("/vegetables", (req, res) => {
  res.render("vegetables/VegetableIndex", {vegetables} )
})

//Fruit show Route
app.get('/fruits/:id', (req, res) => {
  //second param of the render method must be an object
  res.render('Show', {
    //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    fruit: fruits[req.params.id],
  });
});

//Vegetable Show route
app.get("/vegetables/:id", (req, res) => {
  res.render("vegetables/ShowVegetable", {vegetable: vegetables[req.params.id]})

})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});