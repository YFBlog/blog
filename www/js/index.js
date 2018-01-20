
$('.sidebar ol>li').hover(function () {
    $(this).find('a').css({ 'color': '#83D5D1' });
}, function () {
    $(this).find('a').css({ 'color': '#334141' });
})
