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
    Category.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Product,
                attributes: ["id", "product_name", "price", "stock", "category_id"],
            },
            ]
    })
    .then((dbCategoryData) => {
        if (!dbCategoryData) {
            res.status(404).json({message: "There was no category found for this id"});
            return;
        }
        res.json(dbCategoryData)
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err)
    })

    // be sure to include its associated products
});

router.post('/', (req,res) => {
    //update a category by its 'id' value
    Category.create({
        category_name: req.body.Category_name,
    })
    .then((dbProductData) => res.join(dbProductData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err)  
    });
});

router.delete('/:id', (req, res) => {
    // delete a category by its 'id' value
    Category.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCategoryData => {
        if (!dbCategoryData) {
            res.status(404).json({ message: 'There was no category found with this id.'})
        return;
        }
        res.json(dbCategoryData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;