// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongTo Category
Product.belongsTo(Category);
// Categories have many Products
Category.haveMany(Product)
// Products belongToMany Tags (through ProductTag)
Category.belongsToMany(Tag, 
    { through: ProductTag,
    foreignKey: 'Product_id'
    });
// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Product,
    { through : ProductTag,
    foreignKey: 'tag_id'
    });
module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};