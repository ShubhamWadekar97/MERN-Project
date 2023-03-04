const mongoose = require('mongoose');

async function connect(){
    var ans = await mongoose.connect('mongodb://localhost:27017/cdac');
    // console.log(ans);
}

connect().
then(res=>{
    // console.log(res);
})
.catch(err=>{
    console.log(err);
})