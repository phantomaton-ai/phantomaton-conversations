# Phantomaton Conversations 💬

The Phantomaton Conversations module provides a framework for managing conversations within the Phantomaton ecosystem.

## Usage

The Phantomaton Conversations module exposes several key extension points:

- `conversation`: A composite that manages a conversation, including the user and assistant participants.
- `user`: A composite representing the user in the conversation.
- `assistant`: A composite representing the assistant in the conversation.

To use the Phantomaton Conversations module, you'll need to install the plugin in your application:

```javascript
import conversations from 'phantomaton-conversations';

const container = hierophant();
conversations().install.forEach(c => container.install(c));
```

Once the plugin is installed, you can resolve the `conversation` extension point to get a new `Conversation` instance:

```javascript
const [getConversation] = container.resolve(conversations.conversation.resolve);
const conversation = getConversation();
```

The `Conversation` instance provides an `advance` method that allows you to progress the conversation, taking user input and generating an assistant response:

```javascript
const turn = await conversation.advance();
console.log(turn.message); // User message
console.log(turn.reply); // Assistant reply
```

## Extensibility

The Phantomaton Conversations module is designed to be extensible. You can create custom `user` and `assistant` implementations by registering new providers for the corresponding extension points.

## Contributing

We welcome contributions to the Phantomaton Conversations project! If you have any ideas, bug reports, or pull requests, please feel free to submit them on the [Phantomaton Conversations GitHub repository](https://github.com/phantomaton-ai/phantomaton-conversations).

## License

The Phantomaton Conversations module is licensed under the [MIT License](LICENSE).