const Category = require('../models/Category')

module.exports = {
    async index(req, res) {
        categories = await Category.listCategories()

        return res.json(categories.recordset)
    },

    async store(req, res) {
        const { titulo } = req.body;
        idCategory = await Category.createCategory(titulo)

        return res.json(idCategory.recordset)
    },

    async drop(req, res) {
        const { id } = req.params;
        await Category.dropCategory(id);

        return res.json({
            message: "Success"
        })
    }
}