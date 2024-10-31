import sigilium from 'sigilium';

import Conversation from './conversation.js';

const conversation = sigilium.composite('conversation');
const user = sigilium.composite('user');
const assistant = sigilium.composite('assistant');

const conversations = () => ({
  install: [
    user.resolver(),
    assistant.resolver(),
    conversation.resolver(),
    conversation.provider([
      user.resolve,
      assistant.resolve
    ], ([user], [assistant]) =>
      (turns) => new Conversation(user, assistant, turns)
    ),
    conversation.aggregator([], () => (impls) => impls[0])
  ]
});

conversations.conversation = conversation;
conversations.user = user;
conversations.assistant = assistant;

export default conversations;
