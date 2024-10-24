import { expect } from 'lovecraft';

import conversations from './phantomaton-conversations.js';

describe('phantomaton-conversations', () => {
  let plugin;
  let container;

  beforeEach(() => {
    plugin = conversations();
  });

  it('exposes useful sigils', () => {
    expect(conversations.user).to.exist;
    expect(conversations.assistant).to.exist;
    expect(conversations.conversation).to.exist;
  });
});