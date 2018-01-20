const express = require('express');

// 调用数据库的数据模型
const db = require('./db');
const User = db.User;

// 创建路由对象
const router = express.Router();

// 点击新用户注册跳转到注册页面
router.get('/register',(req,res)=>{
    res.render('register.art');
})

// 点击注册跳转到登录页面
router.get('/login',(req,res)=>{
    res.render('login.art');
})

// 判断注册用户名是否已存在
router.post('/nameIsExist', (req, res) => {
    User.find({ username: req.body.username }, (error, data) => {
        // console.log(data);
        if (data.length == 0) {
            res.json({ code: 1 });
        } else {
            res.json({ code: 0 });
        }
    })
})
// 处理注册用户请求
router.post('/user', (req, res) => {
    const user = new User(req.body);
    // console.log(user);
    User.find({ username: req.body.username }, (error, data) => {
        if (data.length == 0) {
            user.save((error) => {
                if (error) {
                    res.json({ code: 0, message: '系统错误，请再次尝试' });
                } else {
                    res.json({ code: 1 });
                }
            })
        } else {
            res.json({ code: 0, message: '用户名已存在，请重新输入' });
        }
    })
})
// 处理用户登录请求
router.get('/signIn', (req, res) => {
    // console.log(req.query);
    User.find({ username: req.query.username }, (error, data) => {
        if (data.length == 0) {
            res.json({ code: 0, message: '用户名不存在，请重新输入' });
        } else {
            if (req.query.password == data[0].password) {
                res.json({ code: 1, message: '登录成功' });
            } else {
                res.json({ code: 0, message: '密码错误，请重新输入' });
            }
        }
    })
})

// 导出
module.exports = router;