
// 导入数据库模块
const mongoose = require('mongoose');
// 1、连接数据库
mongoose.connect('mongodb://localhost:/blogdb', { useMongoClient: true });
// 2、设置全局
mongoose.Promise = global.Promise;
// 3、获取连接对象
const db = mongoose.connection;
// 4、监听对象
db.on('open', () => { console.log('打开数据库') });
db.on('error', (error) => { console.log('连接数据库失败') });
// 5、创建一个数据模式
// 6、创建一个数据模型类
// 用户
const userSchema = mongoose.Schema({
    username: String,
    password: String
})
const User = mongoose.model('users', userSchema);
// 文章
const articleSchema = mongoose.Schema({
    kind:String,
    title:String,
    author:String,
    date:String,
    view:String,
    like:String,
    content:String
})
const Article = mongoose.model('articles',articleSchema);


// 数据库的数据模型导出,若多个用{}括起来,再调用; 
module.exports = {User,Article};

// 集合
// Users: name \ passsword
// Articles: title\author\kind\content\date\hits\likes
// Comments: 
// name\email\content\date 
// Records：
// ip\date\location\browser\os\


// 
// const articleSchema = mongoose.Schema({
//     kind:String,
//     title:String,
//     author:String,
//     content:String,
//     date:String,
// })