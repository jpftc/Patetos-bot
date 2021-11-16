import { Client, Intents } from "discord.js";
import dotenv from "dotenv";

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
dotenv.config();

client.on("ready", () => {
  console.log("Estou online!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(process.env.TOKEN);
