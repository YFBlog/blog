
// 退出登录
$('#logOut').click(function () {
    location.href = '/login';
})
点击菜单按钮展示隐藏左侧
$('#right #menu').click(function () {
    $('#left>div').toggle("slow");
})
$('#hide>.blogmanage').hover(function () {
    $('#hide>.blogmanage>div').toggle();
}, function () {
    $('#hide>.blogmanage>div').toggle();
})
// 点击博客管理的效果
$('#left>div .blogmanage>p').click(function () {
    $(this).css({
        'color': 'white',
        'background-color': '#293846'
    })
    menuClick();
    $('#show .blogmanage>div').toggle('slow');
    $('#show .blogmanage>p>.arrow').toggle();
})
// 点击写博客的页面效果
$('#left .writeBlog').click(function () {
    $('#writeBlog').fadeIn().siblings().fadeOut();
    $(this).css({
        'color': 'white',
        'background-color': '#293846',
    }).siblings().css({
        'color': '#A7B1C2',
        'background-color': '#2F4050',
    });
    menuClick();
    $('#left .visitUser').css('border', 'none');
    $('#left .visitUser>p').css('color', '#A7B1C2');
})
$('#left .article').click(function () {
    $('#article').fadeIn().siblings().fadeOut();
    $(this).css({
        'color': 'white',
        'background-color': '#293846',
    }).siblings().css({
        'color': '#A7B1C2',
        'background-color': '#2F4050',
    });
    menuClick();
    $('#left .visitUser').css('border', 'none');
    $('#left .visitUser>p').css('color', '#A7B1C2');
})
function menuClick() {
    $('#left>div>div:nth-of-type(2)').css({
        'background-color': '#293846',
        'border-left': '5px solid #19AA8D'
    })
    $('#show .blogmanage>div>p').css({
        'background-color': '#293846'
    })
}
$('#left .visitUser').click(function () {
    $('#show .blogmanage>div').css('display', 'none');
    $('#show .blogmanage>p>span:eq(1)').css('display', 'none');
    $('#show .blogmanage>p>span:eq(2)').css('display', 'block');
    $('#visitUser').fadeIn().siblings().fadeOut();
    $(this).css({
        'background-color': '#293846',
        'border-left': '5px solid #19AA8D'
    }).siblings().css({
        'background-color': '#2F4050',
        'border-left': '0'
    });
    $('#left .visitUser>p').css({ 'color': 'white' });
    $('#left .blogmanage p').css({
        'background-color': '#2F4050',
        'color': '#A7B1C2'
    });
})


// 发送请求
// 触发submit事件 添加博客
$('#writeBlog>form').submit(function (event) {
    event.preventDefault();
    // 获取编辑框的内容
    const content = UE.getEditor('editor').getContentTxt();
    const article = $(this).serialize() + '&content=' + content;
    // console.log(article);
    $.post('/addArticle', article, function (res) {
        if (res.code == 0) {
            alert('添加失败');
        } else {
            alert('添加成功');
            // manage();
        }
    })
})

// 获取博客文章管理的数据
$.get('/manage', function (res) {
    $('#article>div').html(res);
    // console.log(res);
})

/*********************************************** */

// // 跳转到写博客页面
// function record() {
//     location.href = '/bam/record';
// }
// // 跳转到博客管理页面
// function manage() {
//     location.href = '/bam/manage';
// }
// // 跳转到修改页面
// function update() {
//     location.href = '/bam/update';
// }
// // 跳转到访问用户数据页面
// function visit() {
//     location.href = '/bam/visit';
// }

// 点击博客文章管理页面右侧写博客跳转到record页面
// $('#article>nav>button').click(function () {
//     record();
// })

// 点击修改博客跳转到update页面






