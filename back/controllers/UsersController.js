const usersModel = require("../model/users");






module.exports = class ofertsController {
    static async getAll(req, res) {

        try{
        const users =  await usersModel.find();
        res.status(200).json(users);
        }catch (err){
            res.status(400).json({message : err.message})
        }
    }

    static async getById(req, res) {
        const correo = req.params.correo;
        try{
           
            const user =  await usersModel.findOne({"correo" :  correo});
            if(correo != null){
            res.status(200).json(user);
            }else{
                res.status(404).json(user);
            }
            }catch (err){
                res.status(400).json({message : err.message})
            }
    
            
    }

    static async Create(req, res) {
        try{
            const user =  req.body;
            const newuser =  await usersModel.create(user);
            
            res.status(201).json(newuser);
            }catch (err){
                res.status(400).json({message : err.message})
            }
        

        
    }
    

    static async Update(req, res) {
       
        try{
            const code = req.params.code;
            const user =  req.body;
            const newuser =  await usersModel.updateOne({"code" : code}, user);
            res.status(200).json(newuser);
            }catch (err){
                res.status(400).json({message : err.message})
            }
        res.status(200).json();
    }
    static async Delete(req, res) {
        
        try{
            const user = req.params.code;
             await usersModel.deleteOne({"code" : code});
            res.status(200).json();
            }catch (err){
                res.status(400).json({message : err.message})
            }

        res.status(200).json();
    }

    static async Count(req, res) {

        try{
        const oferts =  await ofertsModel.find().count();
        res.status(200).json(oferts);
        }catch (err){
            res.status(400).json({message : err.message})
        }
    }
}