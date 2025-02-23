const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "pause",
    category: "Music",
    description: "Pauses the music currently playing.",
    args: false,
    usage: "",
    userPerms: [],
    dj: true,
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
    
		const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new EmbedBuilder()
                .setColor("2f3136")
                .setDescription("<:Fauna_Cross:1097716530025861190> | There is no music playing.");
            return message.reply({embeds: [thing]});
        }

        const emojipause = client.emoji.pause;

        if (player.paused) {
            let thing = new EmbedBuilder()
                .setColor("2f3136")
                .setDescription(`The music is already paused.`)
                .setTimestamp()
                return message.reply({embeds: [thing]});
        }

        player.pause(true);

        const song = player.queue.current;

        let thing = new EmbedBuilder()
            .setColor(client.embedColor)
            .setTimestamp()
            .setDescription(`<:Fauna_pause:1097865912469688320> | **Paused**\n[${song.title}](${song.uri})`)
          return message.reply({embeds: [thing]});
	
    }
};
