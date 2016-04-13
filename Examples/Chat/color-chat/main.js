// We declare the username variable up here so that we can
// access it after we set it's value in the submit-button
// click handler
var username;

// When the user clicks the submit button, we want to save the 
// username they entered, hide the form, and show the color input
$('.submit-button').click(function (e) {
  username = $('.username-input').val();

  $('.username-form').addClass('is-hidden');
  $('.color-input').removeClass('is-hidden');
});

$('.blue').click(function () {
  sendMessage(0);
});

$('.red').click(function () {
  sendMessage(1);
});

$('.purple').click(function () {
  sendMessage(2);
});

$('.yellow').click(function () {
  sendMessage(3);
});

$('.cyan').click(function () {
  sendMessage(4);
});

$('.turquoise').click(function () {
  sendMessage(5);
});

$('.green').click(function () {
  sendMessage(6);
});

$('.navy').click(function () {
  sendMessage(7);
});

$('.fuchsia').click(function () {
  sendMessage(8);
});

// This is where the magic happens!!!
// We use the Chat object's `sendMessage` function
// to actually send the message
function sendMessage(value) {
  Chat.sendMessage({
    sender: username,
    type: 'color',
    value: value
  });
}

var colorValues = {
  0: 'blue',
  1: 'red',
  2: 'purple',
  3: 'yellow',
  4: 'cyan',
  5: 'turquoise',
  6: 'green',
  7: 'navy',
  8: 'fuchsia'
};

Chat.onMessage(function (data) {
  var message = $('<div></div>');
  $(message).addClass('message')
  $(message).addClass(colorValues[data.value]);

  if (data.sender == username) {
    $(message).addClass('from-current-user');
  }

  var messageLabel = $('<div></div>');
  $(messageLabel).html(data.sender);

  $(message).append(messageLabel);

  $('.message-container').append(message);
});