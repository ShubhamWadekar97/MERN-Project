const StudentM=require('../model/studentmodel')


const addStudent = async (req,res)=>{
    var studentData = req.body;
    // console.log(studentData); // {name:'',age:''}
    // //create an instance of modelname
    try{
        var instance = new StudentM(studentData);
        var ans_db = await instance.save();
        
        res.send({msg:ans_db})
    }
    catch(err){
        throw err;
    }
}

const getStudent = async(req,res)=>{
    //https://mongoosejs.com/docs/api.html#model_Model-find
    try{
        var ans_db = await StudentM.find();
        console.log("get data");
        res.send({msg:ans_db});
    }
    catch(err){
        throw err;
    }
}


const updateStudent = async(req,res)=>{
    // console.log(req.body);
    // console.log(req.params); //{userid:45678d9sds4d5678}
    // res.send({msg:"update"})
    try{
        var ans_db = await StudentM.findByIdAndUpdate(req.params.StudentID , req.body);
        res.send({msg:ans_db});
    }
    catch(err){
        throw err;
    }
}
const deleteStudent = async(req,res)=>{
    // console.log(req.params); // {userid:1123nm12n3m23m1b3}
    try{
        var ans_db = await StudentM.findByIdAndRemove(req.params.StudentID);
        res.send({msg:ans_db});
    }
    catch(err){
        throw err;
    }
}
const  getStudentById = async(req,res)=>{
    //http://localhost:4500/users/12nm3m1n2m3n12n3
    var user_id = req.params.StudentID; //{userid:12nm3m1n2m3n12n3}
    // console.log(user_id);
    try{
        var ans_db= await StudentM.findById(user_id);
        res.send({msg:ans_db})
    }
    catch(err){
        throw err;
        // res.send({msg:"No Data Exist"})
    }
} 

module.exports={
    addStudent,
    getStudent,
    updateStudent,
    deleteStudent,
    getStudentById
}