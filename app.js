$(document).ready(function($) {
  var fullname       = $('#form-wrap').find('#fullname'),
      position       = $('#form-wrap').find('#position'),
      phone          = $('#form-wrap').find('#phone'),
      email          = $('#form-wrap').find('#email-company'),
      changeName     = $('#wrapper').find('#name'),
      changePosition = $('#wrapper').find('#pos'),
      changePhone    = $('#wrapper').find('#tel'),
      changeEmail    = $('#wrapper').find('#email');
  fullname.keyup(function() {
    var value = $(this).val();
    changeName.text(value);
  }).keyup();
  position.keyup(function() {
    var value = $(this).val();
    changePosition.text(value);
  }).keyup();
  phone.keyup(function() {
    var value = $(this).val();
    changePhone.html('<span>Hotline:</span>&nbsp;<a href="tel:'+value+'" style="color: #02533e; text-decoration: none;">'+value+'</a>');
  }).keyup();
  email.keyup(function() {
    var value = $(this).val();
    changeEmail.html('<span>Email:</span>&nbsp;<a href="email:'+value+'" style="color: #02533e; text-decoration:  none;">'+value+'</a>');
  }).keyup();
  var clipboard = new ClipboardJS('#btn-copy', {
    target: function() {
      return document.getElementById('wrapper');
    }
  });
  clipboard.on('success', function(e) {
    console.log(e);
  });
  clipboard.on('error', function(e) {
    console.log(e);
  });
});
