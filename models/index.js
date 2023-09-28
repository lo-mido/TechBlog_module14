const User = require('./User');
const Post = require('./Post');

//Setting they type of relationship
//one to one relationship
// one to many relationship
//many to many relationship
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
//Links Parent and Child
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post };
