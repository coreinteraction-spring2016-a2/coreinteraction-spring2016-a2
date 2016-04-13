# Project 3

*Design a chat.*

Consider: What constitutes a “chat”? Do the “messages” appear clearly-defined in the foreground or in a more ambient way in the background? Are there other elements that the “chat” happens around? How can the presence of visitors of your site be translated into some form?

## Schedule

### Week 11 — Concepts and initial sketches
### Week 12 — Revised sketches
### Week 13 — Initial build
### Week 14 — Revised build
### Week 15 — Final crit

## Setup

Include the chat script on your page:

```html
  <script src="https://s3.amazonaws.com/ci-sp-2016/ci-chat.js"></script>
```

The chat client has two functions:

### `sendMessage`

`sendMessage` allows you to send a chat message to the room. It takes an object as an argument. Here's how it looks in use:

```javascript
Chat.sendMessage({
	sender: 'Dan Brewster',
	type: 'demoMessage',
	value: 0
});
```

All four of the properties above (sender, type, value, and time) are required. Here's what each of them are:

Property | Description
-------- | -----------
`sender` | The name of the person sending the message. You'll have to collect this somewhere in your app.
`type`   | The type of message your application is sending. This can be any value but should be unique to your application within the class and should be the same for every message your application sends.
`value`  | A number between 0 and 12

### `onMessage`

`onMessage` allows you to set a callback to be executed each time your app receives a  message. Here's how you might use it:

```javascript
var messageContainer = document.getElementById('message-container');

Chat.onMessage(function (messageData) {
    var message = document.createElement('div');
    message.innerHTML += 'From: ' + data.sender + '<br>';
    message.innerHTML += 'Type: ' + data.type + '<br>';
    message.innerHTML += 'Value: ' + data.value;
    messageContainer.appendChild(message);
});
```

When your app receives a message, the function you pass will be called with one argument -- the received message data. The message data will be formatted in exactly the same way as the message data you send. It will have `sender`, `type`, and `value` properties.

### Chat values

As mentioned above, each chat message your application sends should have a `value` property between 0 and 12. It's up to you to decide what that value means in the context of your app. If you decide that each number between 0 and 12 should correspond to a color, you'll need to make an input that allows your users to select from the available colors, and you'll need to come up with a way to display each color message received.

## References

- [Colorchat by Soft](http://www.soft.works)