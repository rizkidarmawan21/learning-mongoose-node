const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/db-mongoose');

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

Fruit.find()
    .then(fruits => {
        fruits.forEach(fruit => {
            console.log(fruit.name);
        })
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        mongoose.connection.close();
    })