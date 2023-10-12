const models = require('../database/models');

module.exports = {
    getAll: async () => {
        const result = await models.adoption.findAll();

        return {status: 200, result};
    },
    getById: async (id) => {
        const result = await models.adoption.findByPk(id);

        if (!result) return {status: 200, result: []};

        return {status: 200, result};
    },
}