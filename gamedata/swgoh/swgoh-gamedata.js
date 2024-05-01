import * as fs from "fs";

const githubAssets = [
  "Loc_CHS_CN.txt.json",
  "Loc_CHT_CN.txt.json",
  "Loc_ENG_US.txt.json",
  "Loc_FRE_FR.txt.json",
  "Loc_GER_DE.txt.json",
  "Loc_IND_ID.txt.json",
  "Loc_ITA_IT.txt.json",
  "Loc_JPN_JP.txt.json",
  "Loc_KOR_KR.txt.json",
  "Loc_Key_Mapping.txt.json",
  "Loc_POR_BR.txt.json",
  "Loc_RUS_RU.txt.json",
  "Loc_SPA_XM.txt.json",
  "Loc_THA_TH.txt.json",
  "Loc_TUR_TR.txt.json",
  "ability.json",
  "allVersions.json",
  "artifactDefinition.json",
  "artifactTierDefinition.json",
  "battleEnvironments.json",
  "battleTargetingRule.json",
  "calendarCategoryDefinition.json",
  "campaign.json",
  "category.json",
  "challenge.json",
  "challengeStyle.json",
  "conquestDefinition.json",
  "conquestMission.json",
  "consumableDefinition.json",
  "consumableTierDefinition.json",
  "consumableType.json",
  "cooldown.json",
  "dailyActionCap.json",
  "dailyLoginRewardDefinition.json",
  "datacronAffixTemplateSet.json",
  "datacronHelpEntry.json",
  "datacronSet.json",
  "datacronTemplate.json",
  "displayableEnemy.json",
  "effect.json",
  "effectIconPriority.json",
  "energyReward.json",
  "enums.json",
  "environmentCollection.json",
  "equipment.json",
  "eventSampling.json",
  "galacticBundle.json",
  "gameData.json",
  "guildBanner.json",
  "guildExchangeItem.json",
  "guildRaid.json",
  "guildRaidGlobalConfig.json",
  "helpEntry.json",
  "linkedStoreItem.json",
  "material.json",
  "modRecommendation.json",
  "mysteryBox.json",
  "mysteryStatMod.json",
  "persistentVfx.json",
  "playerPortrait.json",
  "playerTitle.json",
  "powerUpBundle.json",
  "raidConfig.json",
  "recipe.json",
  "recommendedSquad.json",
  "relicTierDefinition.json",
  "requirement.json",
  "savedSquadConfig.json",
  "scavengerConversionSet.json",
  "seasonDefinition.json",
  "seasonDivisionDefinition.json",
  "seasonLeagueDefinition.json",
  "seasonRewardTable.json",
  "skill.json",
  "socialStatus.json",
  "starterGuild.json",
  "statMod.json",
  "statModSet.json",
  "statProgression.json",
  "table.json",
  "targetingSet.json",
  "territoryBattleDefinition.json",
  "territoryTournamentDailyRewardTable.json",
  "territoryTournamentDefinition.json",
  "territoryTournamentDivisionDefinition.json",
  "territoryTournamentLeagueDefinition.json",
  "territoryTournamentMatchmakingDescKey.json",
  "territoryWarDefinition.json",
  "timeZoneChangeConfig.json",
  "unitGuideDefinition.json",
  "unitGuideLayout.json",
  "units.json",
  "units_pve.json",
  "unlockAnnouncementDefinition.json",
  "versions.json",
  "warDefinition.json",
  "xpTable.json",
];

const githubDownloadUrl = "https://raw.githubusercontent.com/swgoh-utils/gamedata/main/";

export const SWGOH_GAMEDATA = {};

export async function fetchSwgohGameData() {
  console.log("Fetching SWGOH gamedata...");

  const start = Date.now();

  for (let i = 0; i < githubAssets.length; i++) {
    const fileName = githubAssets[i];
    const response = await fetch(githubDownloadUrl + fileName, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();

    const shortFileName = fileName.split(".")[0];
    console.log(shortFileName);
    SWGOH_GAMEDATA[shortFileName] = json;

    fs.writeFileSync(
      `./gamedata/swgoh/${fileName}`,
      JSON.stringify(json),
      {encoding: "utf8"}
    );
  }

  const timeTaken = Date.now() - start;
  console.log(`Finished fetching SWGOH gamedata. (took ${timeTaken}ms)`);
}