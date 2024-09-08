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

Fruit.deleteOne({ _id: "66dd3e34f8613d7e8fb0a9cc" })
    .then(() => {
        console.log("Berhasil hapus data buah dari dalam database")
    })
    .catch(error => {
        console.log(error)
    })
// Fruit.updateOne({ _id: "66dd3e34f8613d7e8fb0a9cc" }, { name: "banana diubah woy" })
//     .then(() => {
//         console.log("Berhasil update data buah ke dalam database")
//     })
//     .catch(error => {
//         console.log(error)
//     })

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