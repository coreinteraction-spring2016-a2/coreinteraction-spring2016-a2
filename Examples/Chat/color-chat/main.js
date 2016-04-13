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

// Actually handle user input on our chat options
// This is where we're tying particular values to 
// colors in messages we send.
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

// This map of color values makes it easy
// for us to interpret the messages we receive
var colorValues = {
  0: 'blue',
  1: 'red',
  2: 'purple',
  3: 'yellow',
  4: 'cyan',
  5: 'turquoise',
  6: 'green',
  7: 'navy',
  8: 'fuchsia',
  9: 'tan',
  10: 'ochre',
  11: 'beige',
  12: 'pink'
};

// And here's where we actually handle incoming messages
// For each message we get, we create a new element, label
// it with the message sender's name, and assign classes
// based on its sender and value
Chat.onMessage(function (data) {
  // Create the message element
  var message = $('<div></div>');
  $(message).addClass('message');

  // Here's where we assign the color class. We use the
  // message's value to pull a color from our map of 
  // colors above
  $(message).addClass(colorValues[data.value]);

  // If the message is from the current user, give it a
  // special class
  if (data.sender == username) {
    $(message).addClass('from-current-user');
  }

  // Create the label element and set its html
  var messageLabel = $('<div></div>');
  $(messageLabel).html(data.sender);

  // Append label to the message
  $(message).append(messageLabel);

  // Append message to the container on the page
  $('.message-container').append(message);
});