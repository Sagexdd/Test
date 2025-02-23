const { EmbedBuilder } = require("discord.js");

module.exports = {
	name: "leave",
    aliases: ["dc", "disconnect"],
    category: "Music",
    description: "Disconnects the bot from your voice channel.",
    args: false,
    usage: "",
    userPerms: [],
    owner: false,
    dj: true,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
       
        const player = message.client.manager.get(message.guild.id);

        const emojiLeave = message.client.emoji.leave;

        player.destroy();
        
        let thing = new EmbedBuilder()
            .setColor(message.client.embedColor)
            .setDescription(`<:Fauna_Tick:1097715832852852806> | **Left the voice channel.**`)
          return message.reply({embeds: [thing]});
	
    }
};