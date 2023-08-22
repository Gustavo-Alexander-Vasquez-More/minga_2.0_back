import User from '../../models/User.js'

export default async(req, res)=>{
try {
const result = await User.find(req.body)
if(result){
return res.status(200).json({
    response:result,
    message: 'search succefully'
})
}else{
    return res.status.json({
    response:null,
    menssage:'not found result'
})
}
} catch (error) {
    console.log(error)
}
}
