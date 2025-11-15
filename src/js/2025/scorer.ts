import { AbstractScorer, type MissionObject } from '../interfaces/ChallengeYear';
import { booleanMission, numericMission } from '../helpers/missionStateRead';

enum Warnings2025 {
  m01_max_2_soils = 0,
  m02_max_3_maps = 1,
  m03_not_friendly = 2,
  m06_max_3_blocks = 3,
  m08_max_3_pieces = 4,
  m11_flag_not_lowered = 5,
  m15_max_three_flags = 6,
}

interface MissionObject2025 extends MissionObject {
  m00_small_inspection_area?: boolean
  m01_soil?: number
  m01_brush?: boolean
  m02_cleared?: number
  m03_cart?: boolean
  m03_opposing_cart?: boolean
  m04_artifact?: boolean
  m04_supports?: boolean
  m05_upright?: boolean
  m06_blocks?: number
  m07_millstone?: boolean
  m08_pieces?: number
  m09_roof?: boolean
  m09_wares?: boolean
  m10_tipped?: boolean
  m10_removed?: boolean
  m11_raised?: boolean
  m11_flag?: boolean
  m12_sand?: boolean
  m12_ship?: boolean
  m13_statue?: boolean
  m14_brush?: boolean
  m14_minecart?: boolean
  m14_scale_pan?: boolean
  m14_topsoil?: boolean
  m14_artifact?: boolean
  m14_ore?: boolean
  m14_millstone?: boolean
  m15_flags?: number
  m16_precision_tokens?: number
  m17_gracious_professionalism?: number
}

export class FllScorer extends AbstractScorer<MissionObject2025, Warnings2025> {
  public warnings = Warnings2025;

  public initialMissionsState(): MissionObject2025 {
    return {
      m00_small_inspection_area: false,
      m01_soil: 0,
      m01_brush: false,
      m02_cleared: 0,
      m03_cart: false,
      m03_opposing_cart: false,
      m04_artifact: false,
      m04_supports: true,
      m05_upright: false,
      m06_blocks: 0,
      m07_millstone: false,
      m08_pieces: 0,
      m09_roof: false,
      m09_wares: false,
      m10_tipped: false,
      m10_removed: false,
      m11_raised: false,
      m11_flag: false,
      m12_sand: false,
      m12_ship: false,
      m13_statue: false,
      m14_brush: false,
      m14_minecart: false,
      m14_scale_pan: false,
      m14_topsoil: false,
      m14_artifact: false,
      m14_ore: false,
      m14_millstone: false,
      m15_flags: 0,
      m16_precision_tokens: 6,
      m17_gracious_professionalism: 3,
    };
  }

  public computeMissions(missions: MissionObject2025) {
    let score = 0;
    const warnings = [];

    /*
     |
     | Mission 00
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm00_small_inspection_area')) {
      score += 20;
    }

    /*
     |
     | Mission 01
     |
     */

    const m01_soil = numericMission<MissionObject2025>(missions, 'm01_soil');

    if (m01_soil > 2) {
      warnings.push(Warnings2025.m01_max_2_soils);
    }

    score += Math.min(m01_soil, 2) * 10;

    if (booleanMission<MissionObject2025>(missions, 'm01_brush')) {
      score += 10;
    }

    /*
     |
     | Mission 02
     |
     */

    const m02_cleared = numericMission<MissionObject2025>(missions, 'm02_cleared');

    if (m02_cleared > 3) {
      warnings.push(Warnings2025.m02_max_3_maps);
    }

    score += Math.min(m02_cleared, 3) * 10;

    /*
     |
     | Mission 03
     |
     */

    const m03_cart = booleanMission<MissionObject2025>(missions, 'm03_cart');

    if (m03_cart) {
      score += 30;
    }

    if (booleanMission<MissionObject2025>(missions, 'm03_opposing_cart')) {
      if (m03_cart) {
        score += 10;
      } else {
        warnings.push(Warnings2025.m03_not_friendly);
      }
    }

    /*
     |
     | Mission 04
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm04_artifact')) {
      score += 30;
    }

    if (booleanMission<MissionObject2025>(missions, 'm04_supports')) {
      score += 10;
    }

    /*
     |
     | Mission 05
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm05_upright')) {
      score += 30;
    }

    /*
     |
     | Mission 06
     |
     */

    const m06_blocks = numericMission<MissionObject2025>(missions, 'm06_blocks');

    if (m06_blocks > 3) {
      warnings.push(Warnings2025.m06_max_3_blocks);
    }

    score += Math.min(m06_blocks, 3) * 10;

    /*
     |
     | Mission 07
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm07_millstone')) {
      score += 30;
    }

    /*
     |
     | Mission 08
     |
     */

    const m08_pieces = numericMission<MissionObject2025>(missions, 'm08_pieces');

    if (m08_pieces > 3) {
      warnings.push(Warnings2025.m08_max_3_pieces);
    }

    score += Math.min(m08_pieces, 3) * 10;

    /*
     |
     | Mission 09
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm09_roof')) {
      score += 20;
    }

    if (booleanMission<MissionObject2025>(missions, 'm09_wares')) {
      score += 10;
    }

    /*
     |
     | Mission 10
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm10_tipped')) {
      score += 20;
    }

    if (booleanMission<MissionObject2025>(missions, 'm10_removed')) {
      score += 10;
    }

    /*
     |
     | Mission 11
     |
     */

    const m11_raised = booleanMission<MissionObject2025>(missions, 'm11_raised');
    if (m11_raised) {
      score += 20;
    }

    if (booleanMission<MissionObject2025>(missions, 'm11_flag')) {
      if (m11_raised) {
        score += 10;
      } else {
        warnings.push(Warnings2025.m11_flag_not_lowered);
      }
    }

    /*
     |
     | Mission 12
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm12_sand')) {
      score += 20;
    }

    if (booleanMission<MissionObject2025>(missions, 'm12_ship')) {
      score += 10;
    }

    /*
     |
     | Mission 13
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm13_statue')) {
      score += 30;
    }

    /*
     |
     | Mission 14
     |
     */

    if (booleanMission<MissionObject2025>(missions, 'm14_brush')) {
      score += 5;
    }

    if (booleanMission<MissionObject2025>(missions, 'm14_minecart')) {
      score += 5;
    }

    if (booleanMission<MissionObject2025>(missions, 'm14_scale_pan')) {
      score += 5;
    }

    if (booleanMission<MissionObject2025>(missions, 'm14_topsoil')) {
      score += 5;
    }

    if (booleanMission<MissionObject2025>(missions, 'm14_artifact')) {
      score += 5;
    }

    if (booleanMission<MissionObject2025>(missions, 'm14_ore')) {
      score += 5;
    }

    if (booleanMission<MissionObject2025>(missions, 'm14_millstone')) {
      score += 5;
    }

    /*
     |
     | Mission 15
     |
     */

    const m15_flags = numericMission<MissionObject2025>(missions, 'm15_flags');

    if (m15_flags > 3) {
      warnings.push(Warnings2025.m15_max_three_flags);
    }

    score += Math.min(m15_flags, 3) * 10;

    /*
     |
     | Mission 16
     |
     */

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
