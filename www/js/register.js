
// 监听注册用户名是否已经存在
$('form #username').on('input', function () {
    const username = $(this).val();
    if (username != '') {
        $.post('/nameIsExist', { username }, function (res) {
            console.log(res);
            const regexp = /^[\w\u4e00-\u9fa5!@#￥%&]{2,15}$/;
            // console.log(regexp.test(username));
            if (res.code == 0 || (regexp.test(username)) == false) {
                $('form #name').addClass('has-error').removeClass('has-success');
                $('form #name .success').hide();
                $('form #name .error').show();
                // return;
            } else if (res.code == 1 && (regexp.test(username)) == true) {
                $('form #name').addClass('has-success').removeClass('has-error');
                $('form #name .error').hide();
                $('form #name .success').show();
                // return;
            }
        })
    } else {
        $('form #name').removeClass('has-error');
        $('form #name').removeClass('has-success');
        $('#name span').hide();
    }
})

// 监听密码 再次确认密码是否正确
$('#password,#confirm').on('input', function () {
    const regexp = /^[\w!@#￥%&]{6,12}$/;
    const password = $('#password').val();
    const confirm = $('#confirm').val();
    if (password == '') {
        $('form .password').removeClass('has-error');
        $('form .password').removeClass('has-success');
        $('.password span').hide();
    } else if (regexp.test(password) == false) {
        $('form .password').addClass('has-error').removeClass('has-success');
        $('form .password .success').hide();
        $('form .password .error').show();
    } else if (regexp.test(password) == true) {
        $('form .password').addClass('has-success').removeClass('has-error');
        $('form .password .error').hide();
        $('form .password .success').show();
    }
    if (confirm == '') {
        $('form .confirm').removeClass('has-error');
        $('form .confirm').removeClass('has-success');
        $('.confirm span').hide();
    } else if (confirm == password) {
        $('form .confirm').addClass('has-success').removeClass('has-error');
        $('form .confirm .error').hide();
        $('form .confirm .success').show();
    } else if (confirm != password) {
        $('form .confirm').addClass('has-error').removeClass('has-success');
        $('form .confirm .success').hide();
        $('form .confirm .error').show();
    }
})

// 监听submit事件
$('form').submit(function (event) {
    event.preventDefault();
    const password = $('#password').val();
    const confirm = $('#confirm').val();
    if (password!=confirm) {
        alert('两次输入密码不一致，注册失败');
        return;
    }
    const user = $(this).serialize();
    $.post('/user', user, function (res) {
        if (res.code == 0) {
            alert(res.message);
        }else{
            location.href = 'login';
        }
    })
})