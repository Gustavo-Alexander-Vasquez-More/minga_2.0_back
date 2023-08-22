import Category from '../../models/Category.js'

export default async (req, res)=>{
try {
    const result= await Category.find(req.body)
if(result){
    return res.status(200).json({
    response:result,
    menssage:'search succefully'
})
}else{
    return res.status(400).json({
    response:null,
    menssage:'not found result'
})
}
} catch (error) {
console.log(error);    
}
}