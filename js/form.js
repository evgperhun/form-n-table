$('form input[type="submit"]').click(sendForm);

function sendForm(e) {
    e.preventDefault();
$.ajax({
    url: "https://formspree.io/eperhun@gmail.com", 
    method: "POST",
    data: {
       name: $('#client-name').val(),
       lastname: $('#client-last-name').val(),
       email: $('#client-email').val(),
       city: $('#client-city').val(),
       phone: $('#client-phone').val(),
       birth: $('#client-birth').val(),
       passportsn: $('#client-passport-sn').val()
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