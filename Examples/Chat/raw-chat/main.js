var messageContainer = document.querySelectorAll('.messages')[0];
var addLink = document.querySelectorAll('.add-link')[0];

addLink.addEventListener('click', function () {
  var value = Math.floor(Math.random() * 13);

  Chat.sendMessage({
    sender: 'Dan Brewster',
    type: 'raw',
    value: value
  });
});

Chat.onMessage(function (data) {
  var message = document.createElement('div');
  message.className = 'message';
  message.innerHTML += 'From: ' + data.sender + '<br>';
  message.innerHTML += 'Type: ' + data.type + '<br>';
  message.innerHTML += 'Value: ' + data.value;
  messageContainer.appendChild(message);
});
