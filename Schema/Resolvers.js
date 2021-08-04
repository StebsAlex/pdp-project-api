const { channels, basket } = require("../data");

const resolvers = {
  Query: {
    // Channel
    channels() {
      return channels;
    },
    sportsChannels() {
      const sportsChannel = channels.filter(
        (channel) => channel.category === "Sports"
      );
      return sportsChannel;
    },
    newsChannels() {
      const newsChannel = channels.filter(
        (channel) => channel.category === "News"
      );
      return newsChannel;
    },

    // Basket
    basket() {
      return basket;
    },
  },

  Mutation: {
    createNewChannel(parent, args) {
      const newChannel = args;
      channels.push(newChannel);
      return newUser;
    },

    addToBasket(parent, args) {
      const addChannel = args;
      basket.push(addChannel);
      return addChannel;
    },
  },
};

module.exports = { resolvers };
