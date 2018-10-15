var mongoose = require('mongoose');

mongoose.connect('mongodb://root:fastnu007@ds131753.mlab.com:31753/radon0343', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to server');
  }
});


var userSchema = new mongoose.Schema({
	firstname: {type: String, required:true},
	lastname: {type: String, required:true},
	username: {type: String, required: true},
	password: {type: String, required: true},
	dateOfBirth: {type: Date, required: true},
	email: {type: String, required: true},
	admin: Boolean
});

var loginSchema = new mongoose.Schema({
	user: userSchema,
	timing: Date

});	

var commentSchema = new mongoose.Schema({
	body: Mixed,
	createdOn: {type:Date, default:Date.now},
	creatorName: userSchema
});

var articleSchema = new mongoose.Schema({
	title: String,
	content: Buffer,	
	createdOn: {type: Date, default: Date.now},
	comments: [commentSchema]

});

var topicDiscussionSchema = new mongoose.Schema({
	title: String,
	content: Buffer,
	creatorName: userSchema,
	createdOn: {type:Date, default:Date.now},
	comments: [commentSchema]	

});

mongoose.model('User', userSchema);
mongoose.model('Login', loginSchema);
mongoose.model('Article', articleSchema);
mongoose.model('TopicDiscussion', topicDiscussionSchema);
