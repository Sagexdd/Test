const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "clearqueue",
    aliases: ["cq", "clear"],
    category: "Music",
    description: "Removes all songs in the music queue.",
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
                .setDescription("<:Fauna_Cross:1097716530025861190> | No songs are currently in queue.");
            return message.reply({ embeds: [thing] });
        }

        player.queue.clear();

        const emojieject = message.client.emoji.remove;

        let thing = new EmbedBuilder()
            .setColor(message.client.embedColor)
            .setTimestamp()
            .setDescription(`<:Fauna_Tick:1097715832852852806> Removed all songs from the queue.`)
        return message.reply({ embeds: [thing] });
    }
};