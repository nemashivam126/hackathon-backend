const Stack = require('../../models/stacks/stack.model.js');

const getStacks = async(req, res) => {
    try {
        const stacks = await Stack.find();
        res.json(stacks);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createStack = async(req, res) => {
    try {
        const { name } = req.body;
        const createStacks = await Stack.create({
            name: name
        });
        res.status(200).json(createStacks);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = { getStacks, createStack };