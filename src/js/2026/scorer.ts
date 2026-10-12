import { AbstractScorer, type MissionObject } from '../interfaces/ChallengeYear';
import { booleanMission, numericMission } from '../helpers/missionStateRead';

enum Warnings2026 {
  m01_bonus_requirement_not_met = 0,
  m02_max_3_seeds = 1,
  m03_bonus_requirement_not_met = 2,
  m04_bonus_requirement_not_met = 3,
  m06_max_4_fragments = 4,
  m07_bonus_requirement_not_met = 5,
  m14_max_3_seeds = 6,
  m14_bonus_requirement_not_met = 7,
  m15_bonus_requirement_not_met = 8,
}

interface MissionObject2026 extends MissionObject {
  m00_small_inspection_area?: boolean
  m01_drone?: boolean
  m01_lidar?: boolean
  m02_seeds?: number
  m03_flag?: boolean
  m03_rock?: boolean
  m04_leaf?: boolean
  m04_second_leaf?: boolean
  m05_partial?: boolean
  m05_complete?: boolean
  m06_fragments?: number
  m07_mycelium?: boolean
  m07_connections?: number
  m08_vine?: boolean
  m09_platform?: boolean
  m09_camera?: boolean
  m09_seed?: boolean
  m10_spider?: boolean
  m10_snail?: boolean
  m11_root_cover?: boolean
  m12_cane?: boolean
  m12_tie?: boolean
  m13_keystone?: boolean
  m14_seeds?: number
  m14_seeds_on_mat?: number
  m15_canopy?: boolean
  m15_skylight?: boolean
  m15_hatch?: boolean
  m15_bonus_mine?: boolean
  m15_bonus_city?: boolean
  m15_bonus_farm?: boolean
  m16_precision_tokens?: number
  m17_gracious_professionalism?: number
}

export class FllScorer extends AbstractScorer<MissionObject2026, Warnings2026> {
  public warnings = Warnings2026;

  public initialMissionsState(): MissionObject2026 {
    return {
      m00_small_inspection_area: false,
      m01_drone: false,
      m01_lidar: false,
      m02_seeds: 0,
      m03_flag: false,
      m03_rock: false,
      m04_leaf: false,
      m04_second_leaf: false,
      m05_partial: false,
      m05_complete: false,
      m06_fragments: 0,
      m07_mycelium: false,
      m07_connections: 0,
      m08_vine: false,
      m09_platform: false,
      m09_camera: false,
      m09_seed: false,
      m10_spider: false,
      m10_snail: false,
      m11_root_cover: false,
      m12_cane: false,
      m12_tie: false,
      m13_keystone: false,
      m14_seeds: 0,
      m14_seeds_on_mat: 0,
      m15_canopy: false,
      m15_skylight: false,
      m15_hatch: false,
      m15_bonus_mine: false,
      m15_bonus_city: false,
      m15_bonus_farm: false,
      m16_precision_tokens: 6,
      m17_gracious_professionalism: 3,
    };
  }

  public computeMissions(missions: MissionObject2026) {
    let score = 0;
    const warnings: Warnings2026[] = [];

    // Mission 00
    if (booleanMission<MissionObject2026>(missions, 'm00_small_inspection_area')) {
      score += 20;
    }

    // Mission 01
    const m01_drone = booleanMission<MissionObject2026>(missions, 'm01_drone');
    if (m01_drone) {
      score += 20;
    }

    if (booleanMission<MissionObject2026>(missions, 'm01_lidar')) {
      if (m01_drone) {
        score += 10;
      } else {
        warnings.push(Warnings2026.m01_bonus_requirement_not_met);
      }
    }

    // Mission 02
    const m02_seeds = numericMission<MissionObject2026>(missions, 'm02_seeds');
    if (m02_seeds > 3) {
      warnings.push(Warnings2026.m02_max_3_seeds);
    }
    score += Math.min(m02_seeds, 3) * 10;

    // Mission 03
    const m03_flag = booleanMission<MissionObject2026>(missions, 'm03_flag');
    if (m03_flag) {
      score += 20;
    }

    if (booleanMission<MissionObject2026>(missions, 'm03_rock')) {
      if (m03_flag) {
        score += 10;
      } else {
        warnings.push(Warnings2026.m03_bonus_requirement_not_met);
      }
    }

    // Mission 04
    const m04_leaf = booleanMission<MissionObject2026>(missions, 'm04_leaf');
    if (m04_leaf) {
      score += 10;
    }

    if (booleanMission<MissionObject2026>(missions, 'm04_second_leaf')) {
      if (m04_leaf) {
        score += 20;
      } else {
        warnings.push(Warnings2026.m04_bonus_requirement_not_met);
      }
    }

    // Mission 05 (only one scoring condition is possible)
    if (booleanMission<MissionObject2026>(missions, 'm05_complete')) {
      score += 20;
    } else if (booleanMission<MissionObject2026>(missions, 'm05_partial')) {
      score += 10;
    }

    // Mission 06
    const m06_fragments = numericMission<MissionObject2026>(missions, 'm06_fragments');
    if (m06_fragments > 4) {
      warnings.push(Warnings2026.m06_max_4_fragments);
    }
    score += Math.min(m06_fragments, 4) * 10;

    // Mission 07
    const m07_mycelium = booleanMission<MissionObject2026>(missions, 'm07_mycelium');
    if (m07_mycelium) {
      score += 20;
    }

    const m07_connections = numericMission<MissionObject2026>(missions, 'm07_connections');
    if (m07_connections > 0) {
      if (m07_mycelium) {
        score += Math.min(m07_connections, 2) * 10;
      } else {
        warnings.push(Warnings2026.m07_bonus_requirement_not_met);
      }
    }

    // Mission 08
    if (booleanMission<MissionObject2026>(missions, 'm08_vine')) {
      score += 30;
    }

    // Mission 09
    if (booleanMission<MissionObject2026>(missions, 'm09_platform')) {
      score += 10;
    }

    if (booleanMission<MissionObject2026>(missions, 'm09_camera')) {
      score += 10;
    }

    if (booleanMission<MissionObject2026>(missions, 'm09_seed')) {
      score += 10;
    }

    // Mission 10
    if (booleanMission<MissionObject2026>(missions, 'm10_spider')) {
      score += 10;
    }

    if (booleanMission<MissionObject2026>(missions, 'm10_snail')) {
      score += 10;
    }

    // Mission 11
    if (booleanMission<MissionObject2026>(missions, 'm11_root_cover')) {
      score += 20;
    }

    // Mission 12
    if (booleanMission<MissionObject2026>(missions, 'm12_cane')) {
      score += 20;
    }

    if (booleanMission<MissionObject2026>(missions, 'm12_tie')) {
      score += 10;
    }

    // Mission 13
    if (booleanMission<MissionObject2026>(missions, 'm13_keystone')) {
      score += 30;
    }

    // Mission 14
    const m14_seeds = numericMission<MissionObject2026>(missions, 'm14_seeds');
    if (m14_seeds > 3) {
      warnings.push(Warnings2026.m14_max_3_seeds);
    }
    const m14_contained = Math.min(m14_seeds, 3);
    score += m14_contained * 5;

    const m14_on_mat = Math.min(numericMission<MissionObject2026>(missions, 'm14_seeds_on_mat'), 3);
    if (m14_on_mat > m14_contained) {
      warnings.push(Warnings2026.m14_bonus_requirement_not_met);
    }
    score += Math.min(m14_on_mat, m14_contained) * 5;

    // Mission 15
    const m15_canopy = booleanMission<MissionObject2026>(missions, 'm15_canopy');
    const m15_skylight = booleanMission<MissionObject2026>(missions, 'm15_skylight');
    const m15_hatch = booleanMission<MissionObject2026>(missions, 'm15_hatch');

    if (m15_canopy) {
      score += 10;
    }

    if (m15_skylight) {
      score += 10;
    }

    if (m15_hatch) {
      score += 10;
    }

    const m15_bonus_requested = [
      ['m15_bonus_mine', m15_canopy],
      ['m15_bonus_city', m15_skylight],
      ['m15_bonus_farm', m15_hatch],
    ] as const;

    // Only one environmental bonus is possible
    const m15_selected = m15_bonus_requested.find(([key]) => booleanMission<MissionObject2026>(missions, key));
    if (m15_selected) {
      if (m15_selected[1]) {
        score += 10;
      } else {
        warnings.push(Warnings2026.m15_bonus_requirement_not_met);
      }
    }

    // Mission 16
    switch (numericMission(missions, 'm16_precision_tokens')) {
      case 6:
        score += 50;
        break;
      case 5:
        score += 50;
        break;
      case 4:
        score += 35;
        break;
      case 3:
        score += 25;
        break;
      case 2:
        score += 15;
        break;
      case 1:
        score += 10;
        break;
    }

    return {
      score,
      warnings,
    };
  }
}
