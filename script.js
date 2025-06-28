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

    try{
        // const newuser = await User.create({
        // name: 'Pavin',
        // age: 'pabi',
        // hobbies: ['Sports', 'Music'],
        // address: {
        //     street: "2nd Street"
        // }
        // });

        // // newuser.name = 'Abi';
        // // await newuser.save();

        // console.log(newuser.save())

        // const user = await User.findById('')
        // console.log(user)

        // const user = await User.find({name: 'pavin'})
        // console.log(user) 

        // const user = await User.findOne({name: 'pavin'})
        // const user = await User.exists({name: 'pavin'})

        // const user = await User.where('name').equals('pavin');
        // const user = await User.where('age').gt('10').lt('30');
                const user = await User
                // .where('age')
                .where('id')
                .equals('') //object id
                // .gt('10')
                .populate('bestFriend')
                .limit(1);
        console.log(user)
    }
    catch(e){
        // console.log(e.message)
        console.log(e.errors)
    }
    
}

run();

// npm init -y for package.json
// npm i nodemon --save-dev restart automatically
// npm run dev
// npm i mongoose
// connection
// schema (models > userModels.js > schema > model)
// import model in script.js
// mongoose (.save()) call alone check for validation
// while in mongoclient call it wont 
