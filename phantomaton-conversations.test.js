import hierophant from 'hierophant';
import { expect } from 'lovecraft';

import Conversation from './conversation.js';
import conversations from './phantomaton-conversations.js';

describe('phantomaton-conversations', () => {
  let plugin;

  beforeEach(() => {
    plugin = conversations();
  });

  it('exposes useful sigils', () => {
    expect(conversations.user).to.exist;
    expect(conversations.assistant).to.exist;
    expect(conversations.conversation).to.exist;
  });

  it('provides resolvers/providers to install', () => {
    const container = hierophant();
    plugin.install.forEach(component => container.install(component));
    const conversation = container.resolve(conversations.conversation.resolve);
    expect(conversation[0]()).instanceof(Conversation);
  });
});
