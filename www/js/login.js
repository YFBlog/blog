
// 监听用户名是否存在
$('form #username').on('input', function () {
    const username = $(this).val();
    if (username != '') {
        $.post('/nameIsExist', { username }, function (res) {
            if (res.code == 1) {
                $('form #name').addClass('has-error').removeClass('has-success');
                $('form #name .success').hide();
                $('form #name .error').show();
            } else if (res.code == 0) {
                $('form #name').addClass('has-success').removeClass('has-error');
                $('form #name .error').hide();
                $('form #name .success').show();
            }
        })
    } else {
        $('form #name').removeClass('has-error');
        $('form #name').removeClass('has-success');
        $('#name span').hide();
    }
})

// 触发submit事件
$('form').submit(function (event) {
    event.preventDefault();
    const data = $(this).serialize();
    console.log(data);
    $.get('/signIn?' + data, function (res) {
        if (res.code == 0) {
            alert(res.message);
            $('input').val('');
            $('#name,#pass').removeClass('has-error');
            $('#name,#pass').removeClass('has-success');
            $('.success,.error').css('display', 'none');
        } else {
            location.href = '/bam';
        }
    })
})