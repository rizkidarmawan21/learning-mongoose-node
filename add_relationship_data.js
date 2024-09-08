const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/db-mongoose');

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Data name wajib diisi"]
    },
    rating: {
        type: Number,
        min: [1, "Minimal rating adalah 1"],
        max: [10, "Maximal rating adalah 10"]
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Data name wajib diisi"]
    },
    age: {
        type: Number,
    },
    favoriteFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

const duku = new Fruit({
    name: "Duku",
    rating: 8,
    review: "Sweet"
});

duku.save()
    .then(() => {
        console.log("Berhasil simpan buah duku ke dalam database")
    })
    .catch(error => {
        console.log(error)
    });


const people = new People({
    name: "John",
    age: 37,
    favoriteFruit: duku
});

people.save()
    .then(() => {
        console.log("Berhasil simpan data people ke dalam database")
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        mongoose.connection
            .close();
    })