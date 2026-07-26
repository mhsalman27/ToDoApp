const userModel = require("../models/userModel");


// Register Controller
const registerController = async (req , res )=>{
    try{
        const {userName , email , password} = req.body;
        // validate
        if(!userName || !email || !password){
            return res.status(400).send({
                success : false,
                message : `Empty entries`
            });
        }

        // check already email exist

    const checkExistence = await userModel.findOne({email});
    if(checkExistence){
        return res.status(409).send({
            success : false,
            message : `User Email is already exist`
        });
    }

    // save user data in database

    const userData = new userModel({userName , email , password});
    await userData.save();

    res.status(201).send({
        success : true,
        message : `User Save successfully`
    });

    }catch(error){
        console.log(error)
        res.status(500).send({
            success : false,
            message : `Failed`,
            error
        })
    }
}

// Login controller 

const loginController = async (req , res)=>{
    try{
        const {email , password} = req.body;
        // find user 

        const user = await userModel.findOne({email , password});

        if(!user){
           return res.status(400).send({
                success : false,
                message : `Invalid username or password`,
            })
        }

        res.status(200).send({
            success : true ,
            message : `User Find  SuccessFully`,
            user
        });

    }catch(error){
        console.log(error);
        res.status(404).send({
            success : false,
            message : `${error.message}`,
            error
        })
    }
}

module.exports = {registerController , loginController};