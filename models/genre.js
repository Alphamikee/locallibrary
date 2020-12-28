let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let BookGenreSchema = new Schema({
    name : { type: String , min: 3 , max: 100, required : true}
})

BookGenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('BookGenre' , BookGenreSchema)