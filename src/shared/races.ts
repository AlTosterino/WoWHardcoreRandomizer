import {Faction} from '@/shared/factions'

enum AllianceRace {
  Human = 'Human'
}

enum HordeRace {
  Orc = 'Orc'
}

export const getRacesForFaction = (faction: Faction): typeof AllianceRace | typeof HordeRace => {
    console.log(faction)
    console.log(faction == Faction.Alliance)
  if (faction == Faction.Alliance) {
    return AllianceRace
  } else {
    return HordeRace
  }
}
