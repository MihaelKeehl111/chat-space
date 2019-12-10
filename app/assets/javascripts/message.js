$(function(){
  function buildHTML(message){
    if (message.image) {
      var html = `<div class="message__box">
                    <div class="message__box__name">
                    ${message.user_name}
                    </div>
                    <div class="message__box__date">
                    ${message.date}
                    </div>
                  </div>
                  <div class="message__text">
                    <p class="message__text__content">
                    ${message.content}
                    </p>
                    <img class="message__text__image" src=${message.image} alt="Kuru">
                  </div>`
    } else {
      var html = `<div class="message__box">
                    <div class="message__box__name">
                    ${message.user_name}
                    </div>
                    <div class="message__box__date">
                    ${message.date}
                    </div>
                  </div>
                  <div class="message__text">
                    <p class="message__text__content">
                    ${message.content}
                    </p>
                  </div>`
    }
    return html
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',  
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message)
      $('.message').append(html)
      $('.message').animate({ scrollTop: $('.message')[0].scrollHeight});
      $('form').get(0).reset()
      $('.form__btn').prop('disabled', false);
    })
    .fail(function(){
         alert("メッセージ送信に失敗しました");
    })
  })
})