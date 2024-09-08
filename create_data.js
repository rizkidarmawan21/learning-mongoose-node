const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/db-mongoose');

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Sweet"
});

const banana = new Fruit({
    name: "Banana",
    rating: 9,
    review: "Delicious"
});

const orange = new Fruit({
    name: "Orange",
    rating: 7,
    review: "Fresh"
});

// apple.save()
//     .then(() => {
//         console.log("Berhasil simpan buah ke dalam database")
//     })
//     .catch(error => {
//         console.log(error)
//     });

Fruit.insertMany([apple, banana, orange])
    .then(() => {
        console.log("Berhasil simpan buah ke dalam database")
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        mongoose.connection.close();

    })