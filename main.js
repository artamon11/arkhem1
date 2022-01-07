
// $('.part').hover(
//     function () {
//         $('.descr').html($(this).attr('descr-data'));
//         $('.descr').fadeIn(0);
//     },
//     function () {
//         $('.descr').value = "Адрес"
//     }
// )
$('.part').on('mouseenter',
    function () {
        $('.descr').html($(this).attr('descr-data'));
        $('.descr').fadeIn(0);
    },

)
$('.part').on('mouseleave',
    function () {
        $('.descr').value = "Адрес"
    }
)
