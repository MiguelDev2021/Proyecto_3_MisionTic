const ofertsModel = require("../model/oferts");





module.exports = class ofertsController {
    static async getAll(req, res) {

        try{
        const oferts =  await ofertsModel.find();
        res.status(200).json(oferts);
        }catch (err){
            res.status(400).json({message : err.message})
        }
    }

    static async getById(req, res) {
        const code = req.params.code;
        try{
            const ofert =  await ofertsModel.findOne({"code" :  code});
            res.status(200).json(ofert);
            }catch (err){
                res.status(400).json({message : err.message})
            }
        res.status(200).json();
    }

    static async Create(req, res) {
        try{
            const ofert =  req.body;
            const newofert =  await ofertsModel.create(ofert);
            
            res.status(201).json(newofert);
            }catch (err){
                res.status(400).json({message : err.message})
            }
        

        
    }
    

    static async Update(req, res) {
       
        try{
            const code = req.params.code;
            const ofert =  req.body;
            const newofert =  await ofertsModel.updateOne({"code" : code}, ofert);
            res.status(200).json(newofert);
            }catch (err){
                res.status(400).json({message : err.message})
            }
        res.status(200).json();
    }
    static async Delete(req, res) {
        
        try{
            const code = req.params.code;
             await ofertsModel.deleteOne({"code" : code});
            res.status(200).json();
            }catch (err){
                res.status(400).json({message : err.message})
            }

        res.status(200).json();
    }

}