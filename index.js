import express from 'express';
import cors from 'cors';
import {SwgohGeneral} from "./v1/swgoh-general.js";
import {SwgohGuild} from "./v1/swgoh-guild.js";
import {SwgohPlayer} from "./v1/swgoh-player.js";
import {fetchSwgohGameData} from "./gamedata/swgoh/swgoh-gamedata.js";

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://datadex.gg'
}));

app.get('/', (req, res) => res.status(200).json({ message: "Welcome to datadex api" }));

async function run() {
  await fetchSwgohGameData();

  new SwgohGeneral(app);
  new SwgohGuild(app);
  new SwgohPlayer(app);
}

const PORT = 3021;
app.listen(PORT, (error) => {
  if (error) {
    console.log("Error occurred, server can't start", error);
    return;
  }

  console.log("Server is Successfully Running, and App is listening on port " + PORT);

  run();
});