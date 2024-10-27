# Phantomaton Conversations 💬

The Phantomaton Conversations module provides a framework for managing conversations within the [Phantomaton](https://github.com/phantomaton-ai/phantomaton#readme) ecosystem. 🌀

## Usage 🛠️

To use the Phantomaton Conversations module, you'll need to install the plugin in your Phantomaton application. For more information on installation, please refer to the [Phantomaton project documentation](https://github.com/phantomaton-ai/phantomaton#readme).

Once the plugin is installed, you can resolve the `conversation`, `user`, and `assistant` extension points to manage your conversations. 🎭

```javascript
const [getConversation] = container.resolve(conversations.conversation.resolve);
const conversation = getConversation();
const turn = await conversation.advance();
console.log(turn.message); // User message
console.log(turn.reply); // Assistant reply
```

## Extensibility 🔧

The Phantomaton Conversations module is designed to be extensible. You can create custom `user` and `assistant` implementations by registering new providers for the corresponding extension points. 🤖

## Contributing 🦄

We welcome contributions to the Phantomaton Conversations project! If you have any ideas, bug reports, or pull requests, please feel free to submit them on the [Phantomaton Conversations GitHub repository](https://github.com/phantomaton-ai/phantomaton-conversations). 🌟

## License 🔒

The Phantomaton Conversations module is licensed under the [MIT License](LICENSE). 🔮