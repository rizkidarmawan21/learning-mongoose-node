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

const apple = new Fruit({
    name: "Apelll",
    rating: 10,
    review: "Sweet"
});

apple.save()
    .then(() => {
        console.log("Berhasil simpan buah ke dalam database")
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        mongoose.connection.close();
    })

// const banana = new Fruit({
//     name: "Banana",
//     rating: 9,
//     review: "Delicious"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 7,
//     review: "Fresh"
// });


// Fruit.insertMany([apple, banana, orange])
//     .then(() => {
//         console.log("Berhasil simpan buah ke dalam database")
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(() => {
//         mongoose.connection.close();

//     })