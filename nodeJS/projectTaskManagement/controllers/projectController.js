
function getAllProducts(req,res){
    res.status(200).send({data:data, success:true})
}


function addProject (req,res){
    res.status(200).send({data:data,status:true})
}


module.exports ={
    getAllProducts,
     addProject
}