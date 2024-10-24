import { expect } from 'lovecraft';

import Conversation from './conversation.js';

class User {
  converse(turns) {
    return Promise.resolve(`This conversation is ${turns.length} turns long.`);
  }
}

class Assistant {
  converse(turns, message) {
    return `And your latest reply was ${message.length} characters long...`;
  }
}

describe('Conversation', () => {
  let conversation;
  
  beforeEach(() => {
    conversation = new Conversation(new User(), new Assistant());    
  });

  it('advances conversations', async () => {
    const turn = await conversation.advance();
    expect(turn.message).to.equal('This conversation is 0 turns long.');
    expect(turn.reply).to.equal('And your latest reply was 34 characters long...');
  });

  it('advances conversations over multiple turns', async () => {
    for (let i = 0; i < 10; i += 1) await conversation.advance();
    const turn = await conversation.advance();
    expect(turn.message).to.equal('This conversation is 10 turns long.');
    expect(turn.reply).to.equal('And your latest reply was 35 characters long...');
  });
});
