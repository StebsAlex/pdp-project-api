const { channels, basket } = require("../data");

const resolvers = {
  Query: {
    // Channel
    getAllChannel() {
      return channels;
    },
    getSportsChannel() {
      const sportsChannel = channels.filter(
        (channel) => channel.category === "Sports"
      );
      return sportsChannel;
    },
    getNewsChannel() {
      const newsChannel = channels.filter(
        (channel) => channel.category === "News"
      );
      return newsChannel;
    },

    // Basket
    getBasket() {
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
