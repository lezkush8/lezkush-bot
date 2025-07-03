const axios = require("axios");
const { Boom } = require("@hapi/boom");

async function handleMessage(message, sock) {
    const text = message.message?.conversation || message.message?.extendedTextMessage?.text;
    const sender = message.key.remoteJid;

    if (!text) return;

    if (text.startsWith(".movie")) {
        const movieName = text.replace(".movie", "").trim();
        if (!movieName) {
            await sock.sendMessage(sender, { text: "Please provide a movie name. Example: `.movie Inception`" });
            return;
        }

        const apiKey = "91e81920";
        const url = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${apiKey}`;

        try {
            const response = await axios.get(url);
            const data = response.data;

            if (data.Response === "False") {
                await sock.sendMessage(sender, { text: `Movie not found: ${movieName}` });
                return;
            }

            const messageText = `🎬 *${data.Title}* (${data.Year})\n\n📖 *Plot:* ${data.Plot}\n⭐ *IMDB Rating:* ${data.imdbRating}\n🎭 *Genre:* ${data.Genre}\n🎬 *Director:* ${data.Director}`;
            await sock.sendMessage(sender, { text: messageText });
        } catch (err) {
            await sock.sendMessage(sender, { text: "Error fetching movie details. Please try again later." });
        }
    }
}

module.exports = { handleMessage };