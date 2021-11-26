// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'user_id'
});

/*Category.belongsTo(Post, {
  foreignKey: 'post_id'
}); */

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'user_id'
});

/*Product.belongsTo(Category, {
  foreignKey: 'user_id'
}); */

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag ,
  as: 'voted_posts',
  foreignKey: 'user_id'
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'voted_posts',
  foreignKey: 'post_id'
});

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
