import req from '../utils/req';

/**
 * Guild class representing a Discord guild and handling guild-related functionalities.
 * @param {string} guildId - The ID of the Discord guild.
 */
export default class Guild {
  constructor(guildId) {
    this.guildId = guildId;
    this.init();
  }

  /**
   * Initialize the Guild by making an asynchronous request to retrieve guild information.
   * Logs an error if the request fails.
   */
  async init() {
    try {
      const res = await req({ uri: `guilds/${this.guildId}` });
      // Throw an error if the guild is not found
      if (res.code === 10004) throw new Error(res.message);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Retrieve channels from the guild and filter by type.
   * @returns {Array} - An array of channels with type 0 (text channels).
   */
  async channels() {
    try {
      const channels = await req({ uri: `guilds/${this.guildId}/channels` });
      return channels.filter(channel => channel.type === 0);
    }
    catch (e) {
      console.log(e);
    }
  }

  /**
 * Retrieve channel messaged bt the channel Id.
 * @returns {Array} - An array of messages.
 */
  async messages(channelId, query) {
    try {
      if (query.channel === 'notice') {
        query.limit = 5;
        delete query.channel;
      }
      const messages = await req({ uri: query.limit ? `/channels/${channelId}/messages?limit=${query.limit}` : `/channels/${channelId}/messages` });
      return messages.filter(message => message.content || message.attachments.length > 0);
    }
    catch (e) {
      console.log(e);
    }

  }
}
