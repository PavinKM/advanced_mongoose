const mongoose = require('mongoose');
const User = require('./models/userModel')

mongoose.connect('mongodb://127.0.0.1:27017/pavinkm')
.then( () => {
    console.log("connected succesfully")
})
.catch( () => {
    console.log("Connected error")
})

// const user = new User({
//     name: 'Pavin',
//     age: 22
// })

// user.save()
// .then(() => {
//     console.log('User saved')
// })

// async function run(){
//     const newuser = await user.save();
//     console.log(newuser)
// }

async function run(){
    const newuser = await User.create({
        name: 'Pavin',
        age: 22,
        hobbies: ['Sports', 'Music'],
        address: {
            street: "2nd Street"
        }
    });

    // newuser.name = 'Abi';
    // await newuser.save();

    console.log(newuser)
}

run();

// npm init -y for package.json
// npm i nodemon --save-dev restart automatically
// npm run dev
// npm i mongoose
// connection
// schema (models > userModels.js > schema > model)
// import model in script.js
