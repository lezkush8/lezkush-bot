const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/webhook", async (req, res) => {
  const message = req.body.message;

  if (message && message.startsWith(".movie")) {
    const movieName = message.replace(".movie", "").trim();

    if (!movieName) return res.send("Please provide a movie name.");

    try {
      const response = await axios.get(\`http://www.omdbapi.com/?apikey=91e81920&t=\${encodeURIComponent(movieName)}\`);
      const data = response.data;

      if (data.Response === "False") {
        return res.send("Movie not found.");
      }

      const reply = \`🎬 *\${data.Title}* (\${data.Year})
⭐ Rating: \${data.imdbRating}
📅 Released: \${data.Released}
🕒 Runtime: \${data.Runtime}
🎭 Genre: \${data.Genre}
📝 Plot: \${data.Plot}\`;

      return res.send(reply);
    } catch (error) {
      return res.send("Error fetching movie data.");
    }
  }

  res.send("Command not recognized.");
});

app.listen(PORT, () => {
  console.log("✧𝐿𝛯𝛧𝛫𝑈𝑆𝛨 𝐵𝛩𝑇✧ is running on port " + PORT);
});
