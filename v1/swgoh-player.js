export class SwgohPlayer {
  constructor(app) {

    app.post('/v1/c', (req, res) => {
      res.status(200).json({ message: "test" });
    });

    app.get('/v1/swgoh/player', async (req, res) => {
      // console.log(req.body);
      res.status(200).json({ message: "test" });
    });

  }
}