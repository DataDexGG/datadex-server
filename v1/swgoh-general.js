import {SWGOH_GAMEDATA} from "../gamedata/swgoh/swgoh-gamedata.js";

export class SwgohGeneral {
  constructor(app) {

    app.post('/v1/a', (req, res) => {
      res.status(200).json({ message: "test" });
    });

    app.post('/v1/swgoh/units', async (req, res) => {
      const minified = req.body?.minified ?? false;

      let units = SWGOH_GAMEDATA['units'];

      if (req.body?.minified === undefined) {
        return res.status(200).json(units);
      }

      const locale = SWGOH_GAMEDATA['Loc_ENG_US'];
      const locale_data = locale.data;

      const unit_data = units.data;
      units = {};

      for (let i = 0; i < unit_data.length; i++) {
        if (!unit_data[i].id.endsWith("SEVEN_STAR"))
          continue;

        const key = unit_data[i].baseId;
        if (units[key])
          continue;

        if (!minified) {
          units[key] = unit_data[i];
          continue;
        }

        units[key] = {};
        units[key].baseId = unit_data[i].baseId;
        units[key].name = locale_data[unit_data[i].nameKey];
        units[key].desc = locale_data[unit_data[i].descKey];
        units[key].thumbnail = unit_data[i].thumbnailName;
        // units[key].categoryId = unit_data[i].categoryId;
        units[key].forceAlignment = unit_data[i].forceAlignment;
      }

      return res.status(200).json(units);
    });
  }
}