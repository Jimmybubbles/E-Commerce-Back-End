const router = require('express').Router();
const { Category, Product } = require('../../models')

// the `/api/categories' endpoint

router.get('/', (req, res) => {
    // find all categories 
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