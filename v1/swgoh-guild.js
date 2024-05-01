export class SwgohGuild {
  constructor(app) {

    app.post('/v1/b', (req, res) => {
      res.status(200).json({ message: "test" });
    });

  }
}