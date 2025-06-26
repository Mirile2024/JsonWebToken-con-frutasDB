const { Frutas } = require("../models/frutas");
const getFrutas = async (req, res) => {
    try {
        const frutas = await Frutas.find();
        if (frutas.length === 0) {
             res.status(404).json({ error: "No hay frutas" });
        }else{
            res.status(200).json(frutas);
        }
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las frutas" });
    }
};

module.exports = { getFrutas };