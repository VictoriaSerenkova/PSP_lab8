const { where } = require("sequelize");
const { Product } = require("../models/models");

class ProductController {
    async create(req, res) {
        const {name, cipher, count, producer} = req.body;
        console.log(req.body)
        const product = await Product.create({name, cipher, count, producer})
        return res.json(product)
    }

    async getAll(req, res) {
        const products = await Product.findAll()
        return res.json(products);
    }

    async delete(req, res) {
        const {id} = req.body;
        const product = await Product.destroy({
            where: {
                id_products: id
            }
        })
        return res.json(product)
    }

    async update(req, res) {
        const id = req.body.id;
        const {name, cipher, count, producer} = req.body.product;
        const product = await Product.update({name, cipher, count, producer}, { where: { id_products: id } })
        return res.json(product)
    }
}

module.exports = new ProductController()