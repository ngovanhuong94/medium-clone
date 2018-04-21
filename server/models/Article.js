const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  text: String,
  title: String,
  description: String,
  feature_img: String,
  claps: Number,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  comments: [
    {
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      text: String,
    },
  ],
});

ArticleSchema.methods.clap = () => {
  this.claps += 1;
  return this.save();
};

ArticleSchema.methods.comment = (c) => {
  this.comments.push(c);
  return this.save();
};

ArticleSchema.methods.addAuthor = (authorId) => {
  this.author = authorId;
  return this.save();
};

ArticleSchema.methods.getUserArticle = (_id) => {
  Article.find({ _id }).then(article => article);
};

module.exports = mongoose.model('Article', ArticleSchema);
