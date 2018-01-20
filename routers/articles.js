

const express = require('express');

const db = require('./db');

const Article = db.Article;
const router = express.Router();


// 点击登录跳转到后台管理页面
// router.get('/bam',(req,res)=>{
//     // res.redirect('/bam/record');
// })

// 点击登录跳转到后台管理页面
router.get('/bam',(req,res)=>{
    res.render('bam.art');
})


// // 写博客页面record
// router.get('/manage', (req, res) => {
//     Article.find((error, data) => {
//         res.render('bam.art', { articles: data });
//     })
// })


// router.get('/bam/(:switch)?', (req, res) => {
//     console.log(req.params);
//     res.render('bam.art');
    
//     // Article.find((error, data) => {
//     //     res.render('bam.art',{ articles: data });
//     // })
// })


// 添加博客
router.post('/addArticle', (req, res) => {
    req.body.date = new Date();
    const article = new Article(req.body);
    article.save((error) => {
        if (error) {
            res.json({ code: 0 });
        } else {
            res.json({ code: 1 });
        }
    })
})

// 博客文章管理页面manage
router.get('/manage', (req, res) => {
    Article.find((error, data) => {
        res.render('manage.art', { articles: data });
    })
})
 


module.exports = router;
// function date(date) {
//     let date = new Date();
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let second = date.getSeconds();
//     date = year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+second;
//     // console.log(date);
// }
