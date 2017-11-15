$('form input[type="submit"]').click(sendForm);

function sendForm(e) {
    e.preventDefault();
$.ajax({
    url: "https://formspree.io/eperhun@gmail.com", 
    method: "POST",
    data: {
        $('#client-name').val(),
        $('#client-last-name').val(),
        $('#client-email').val(),
        $('#client-city').val(),
        $('#client-phone').val(),
        $('#client-birth').val(),
        $('#client-passport-sn').val()
    },
    dataType: "json"
    })
    .done(function(){
        $('form')[0].reset();
        $('form').html('<h2>Дякую!</h2>');
    })
    .fail(function(){
        $('#msg').html('Вибачте це помилка');
    });
}