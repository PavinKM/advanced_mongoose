const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
        city: String,
        street: String
})

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 10,
        max: 20,
        validate : {
            validator: v => v % 2 == 0,
            message: props => `${props.value} is not number`
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    updatedAt: Date,
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User' //collection
    },
    hobbies: [String],
    address: addressSchema
});

//schema methods
userSchema.methods.sayHi = function(){
    console.log(`My name is ${this.name}`)
}

userSchema.statics.findByName = function(name){
    return this.find({name: name})
}

userSchema.query.byName = function(name) {
    return this.where({name: name})
}

//schema virtual
userSchema.virtual('namedEmail').get(function(){
    return `${this.name} - ${this.email}`
})

//schema middleware - pre
userSchema.pre('save', function(next){
    this.name = `Mr. ${this.name}`
    next()
}) 

// - post 
userSchema.post('save', function(doc, next){
    doc.name = `${doc.name} modified`
    next()
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel