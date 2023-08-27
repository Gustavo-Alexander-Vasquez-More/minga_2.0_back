import User from "../../models/User.js";

export default async(req, res)=>{
    try {
        const creator= await User.create(req.body)
        if (creator){
            
            res.status(200).json({
                response:{
                    email:creator.email,
                    photo:creator.photo
                },
                message:'User Created',
        });
    }else{
        res.status(400).json({
        response:null,
        message:'Not created'
    });
    }
    } catch (error) {
    console.log(error);
    }
} 