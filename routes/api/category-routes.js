const router = require('express').Router();
const { Category, Product } = require('../../models')

// the `/api/categories' endpoint

router.get('/', (req, res) => {
    // find all categories 
    Category.findAll({
        attributes: ["id", "category_name"],
        include: [
            {
                model: Product,
                attributes: ["id", "product_name", "price", "stock", "category_id"]
            },
        ],
    })
    .then((dbCategoryData) => (dbCategoryData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
    // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
    // find all categories
    // be sure to include its associated products
});

router.post('/', (req,res) => {
    //update a category by its 'id' value
});

router.delete('/:id', (req, res) => {
    // delete a category by its 'id' value
});

module.exports = router;