class Conversation {
  constructor(user, assistant, turns = []) {
    this.user = user;
    this.assistant = assistant;
    this.turns = turns;
  }

  async advance() {
    const message = await this.user.converse(this.turns);
    const reply = await this.assistant.converse(this.turns, message);
    const turn = { message, reply };
    this.turns.push(turn);
    return turn;
  }
}

export default Conversation;
