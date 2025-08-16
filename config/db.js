const mongoose =require("mongoose")


module.exports .connecttoMongoDB =async () => {
    mongoose.set('strictQuery',false);
    mongoose.connect("").then(
        ()=>{
            console.log("connect to db")

        }
    ).catch(
        (error)=>{console.log(error)}
        )
}