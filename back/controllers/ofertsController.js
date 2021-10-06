module.exports = class ofertsController {
    static async getAll(req, res) {
        const resp = [
            {
                "nombre": "oferta papa",
                "categoria": "papa",
                "precio": 1000,
            }
        ];
        res.status(200).json(resp);
    }

    static async getById(req, res) {
        const id = req.params.Id;
        const resp = [
            {
                "Id": id,
                "nombre": "oferta papa",
                "categoria": "papa",
                "precio": 1000,
            }
        ];
        res.status(200).json(resp);
    }

    static async Create(req, res) {
        const id = req.params.Id;
        const resp = [
            {
                "Id": id,
                "nombre": "oferta papa",
                "categoria": "papa",
                "precio": 1000,
            }
        ];
        res.status(200).json(resp);
    }
    static async Read(req, res) {

        res.status(200).json(resp);
    }

    static async Update(req, res) {

        res.status(200).json(resp);
    }
    static async Delete(req, res) {

        res.status(200).json(resp);
    }

}