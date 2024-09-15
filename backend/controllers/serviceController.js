// controllers/serviceController.js
const Service = require('../models/Service');

// Get all services
const getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get service by ID
const getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.json(service);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new service
const createService = async (req, res) => {
    const { title, bannerImage, businessParagraph, serviceParagraph } = req.body;

    const newService = new Service({
        title,
        bannerImage,
        businessParagraph,
        serviceParagraph
    });

    try {
        await newService.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllServices,
    getServiceById,
    createService
};
