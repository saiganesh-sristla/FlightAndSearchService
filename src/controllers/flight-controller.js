const {FlightService} = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.create(req.body);
        res.status(201).json({
            data:flight,
            message:"Successfully created a flight",
            success:true,
            err:{}
        })
    } catch (error) {
        res.status(500).json({
            data:{},
            message: "Not able to create a flight",
            success: false,
            err: {error}
        })
    }
}

module.exports = {
    create,
}