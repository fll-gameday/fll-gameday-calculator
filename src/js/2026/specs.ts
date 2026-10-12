import {FllScorer} from './scorer';

const scorer = new FllScorer();

/**
 * Robot Game 2026 specifications test suite, based on the official Robot Game Rulebook
 * @see https://firstinspires.blob.core.windows.net/fll/challenge/2026-27/fll-challenge-bioglow-rgr.pdf
 */
describe('Robot Game 2026 specifications', function () {

  describe('Scorer initial state', function () {
    it('Should score no points if nothing is given', function () {
      expect(scorer.getScore({})).toEqual(0);
    });

    // M16 Precision: 6 tokens remaining = 50
    it('Should score 50 for initial state', function () {
      expect(scorer.getScore(scorer.initialMissionsState())).toEqual(50);
    });

    it('Should be no warnings with initial state', function () {
      expect(scorer.getWarnings(scorer.initialMissionsState()).length).toEqual(0);
    });
  });

  describe('Mission 00', function () {
    it('Robot and equipment fit in one launch area under the height limit: 20', function () {
      expect(scorer.getScore({m00_small_inspection_area: true})).toEqual(20);
    });
  });

  describe('Mission 01', function () {
    it('Drone is no longer touching the mat: 20', function () {
      expect(scorer.getScore({m01_drone: true})).toEqual(20);
    });

    it('Bonus: LiDAR map flipped with scan marker in the survey area: 10 added', function () {
      expect(scorer.getScore({m01_drone: true, m01_lidar: true})).toEqual(30);
      expect(scorer.getWarnings({m01_drone: true, m01_lidar: true})).toHaveSize(0);
    });

    it('Should not score the bonus without the drone', function () {
      expect(scorer.getScore({m01_drone: false, m01_lidar: true})).toEqual(0);
      expect(scorer.getWarnings({m01_drone: false, m01_lidar: true})).toEqual([scorer.warnings.m01_bonus_requirement_not_met]);
    });
  });

  describe('Mission 02', function () {
    it('Seeds no longer touching the stalk: 10 each', function () {
      expect(scorer.getScore({m02_seeds: 0})).toEqual(0);
      expect(scorer.getScore({m02_seeds: 1})).toEqual(10);
      expect(scorer.getScore({m02_seeds: 2})).toEqual(20);
      expect(scorer.getScore({m02_seeds: 3})).toEqual(30);
    });

    it('Should cap at 3 seeds with a warning', function () {
      expect(scorer.getScore({m02_seeds: 4})).toEqual(30);
      expect(scorer.getWarnings({m02_seeds: 4})).toEqual([scorer.warnings.m02_max_3_seeds]);
    });
  });

  describe('Mission 03', function () {
    it('The research flag is down: 20', function () {
      expect(scorer.getScore({m03_flag: true})).toEqual(20);
    });

    it('Bonus: rock returned to its original starting position: 10 added', function () {
      expect(scorer.getScore({m03_flag: true, m03_rock: true})).toEqual(30);
      expect(scorer.getWarnings({m03_flag: true, m03_rock: true})).toHaveSize(0);
    });

    it('Should not score the bonus without the flag down', function () {
      expect(scorer.getScore({m03_flag: false, m03_rock: true})).toEqual(0);
      expect(scorer.getWarnings({m03_flag: false, m03_rock: true})).toEqual([scorer.warnings.m03_bonus_requirement_not_met]);
    });
  });

  describe('Mission 04', function () {
    it('One leaf completely removed: 10', function () {
      expect(scorer.getScore({m04_leaf: true})).toEqual(10);
    });

    it('Bonus: second leaf removed with the katydid in place: 20 added', function () {
      expect(scorer.getScore({m04_leaf: true, m04_second_leaf: true})).toEqual(30);
      expect(scorer.getWarnings({m04_leaf: true, m04_second_leaf: true})).toHaveSize(0);
    });

    it('Should not score the bonus without the first leaf', function () {
      expect(scorer.getScore({m04_leaf: false, m04_second_leaf: true})).toEqual(0);
      expect(scorer.getWarnings({m04_leaf: false, m04_second_leaf: true})).toEqual([scorer.warnings.m04_bonus_requirement_not_met]);
    });
  });

  describe('Mission 05', function () {
    it('Partially extended: 10', function () {
      expect(scorer.getScore({m05_partial: true})).toEqual(10);
    });

    it('Completely extended: 20', function () {
      expect(scorer.getScore({m05_complete: true})).toEqual(20);
    });

    it('Only one scoring condition is possible', function () {
      expect(scorer.getScore({m05_partial: true, m05_complete: true})).toEqual(20);
    });
  });

  describe('Mission 06', function () {
    it('Leaf fragments contained within the nest: 10 each', function () {
      expect(scorer.getScore({m06_fragments: 1})).toEqual(10);
      expect(scorer.getScore({m06_fragments: 2})).toEqual(20);
      expect(scorer.getScore({m06_fragments: 4})).toEqual(40);
    });

    it('Should cap at 4 fragments with a warning', function () {
      expect(scorer.getScore({m06_fragments: 5})).toEqual(40);
      expect(scorer.getWarnings({m06_fragments: 5})).toEqual([scorer.warnings.m06_max_4_fragments]);
    });
  });

  describe('Mission 07', function () {
    it('Mycelium is completely extended: 20', function () {
      expect(scorer.getScore({m07_mycelium: true})).toEqual(20);
    });

    it('Bonus: connection with the opposing plant root: 10 added, up to two', function () {
      expect(scorer.getScore({m07_mycelium: true, m07_connections: 1})).toEqual(30);
      expect(scorer.getScore({m07_mycelium: true, m07_connections: 2})).toEqual(40);
      expect(scorer.getWarnings({m07_mycelium: true, m07_connections: 2})).toHaveSize(0);
    });

    it('Should not score the bonus without the mycelium extended', function () {
      expect(scorer.getScore({m07_mycelium: false, m07_connections: 2})).toEqual(0);
      expect(scorer.getWarnings({m07_mycelium: false, m07_connections: 2})).toEqual([scorer.warnings.m07_bonus_requirement_not_met]);
    });
  });

  describe('Mission 08', function () {
    it('The vine is touching the mat: 30', function () {
      expect(scorer.getScore({m08_vine: true})).toEqual(30);
    });
  });

  describe('Mission 09', function () {
    it('The research platform is raised: 10', function () {
      expect(scorer.getScore({m09_platform: true})).toEqual(10);
    });

    it('The camera trap is deployed: 10', function () {
      expect(scorer.getScore({m09_camera: true})).toEqual(10);
    });

    it('The seed is no longer touching the tree: 10', function () {
      expect(scorer.getScore({m09_seed: true})).toEqual(10);
    });

    it('All three conditions: 30', function () {
      expect(scorer.getScore({m09_platform: true, m09_camera: true, m09_seed: true})).toEqual(30);
    });
  });

  describe('Mission 10', function () {
    it('The spider habitat is in its original starting position: 10', function () {
      expect(scorer.getScore({m10_spider: true})).toEqual(10);
    });

    it('The snail habitat is in its original starting position: 10', function () {
      expect(scorer.getScore({m10_snail: true})).toEqual(10);
    });

    it('Both habitats: 20', function () {
      expect(scorer.getScore({m10_spider: true, m10_snail: true})).toEqual(20);
    });
  });

  describe('Mission 11', function () {
    it('The root cover is down, touching the mat: 20', function () {
      expect(scorer.getScore({m11_root_cover: true})).toEqual(20);
    });
  });

  describe('Mission 12', function () {
    it('The cane is completely raised, touching the tree: 20', function () {
      expect(scorer.getScore({m12_cane: true})).toEqual(20);
    });

    it('The support tie is around the post: 10', function () {
      expect(scorer.getScore({m12_tie: true})).toEqual(10);
    });

    it('Both conditions: 30', function () {
      expect(scorer.getScore({m12_cane: true, m12_tie: true})).toEqual(30);
    });
  });

  describe('Mission 13', function () {
    it('Keystone species on the restoration platform and young trees raised: 30', function () {
      expect(scorer.getScore({m13_keystone: true})).toEqual(30);
    });
  });

  describe('Mission 14', function () {
    it('Seeds contained within the replantation station: 5 each', function () {
      expect(scorer.getScore({m14_seeds: 1})).toEqual(5);
      expect(scorer.getScore({m14_seeds: 2})).toEqual(10);
      expect(scorer.getScore({m14_seeds: 3})).toEqual(15);
    });

    it('Bonus: and touching the mat: 5 added each', function () {
      expect(scorer.getScore({m14_seeds: 1, m14_seeds_on_mat: 1})).toEqual(10);
      expect(scorer.getScore({m14_seeds: 3, m14_seeds_on_mat: 2})).toEqual(25);
      expect(scorer.getScore({m14_seeds: 3, m14_seeds_on_mat: 3})).toEqual(30);
      expect(scorer.getWarnings({m14_seeds: 3, m14_seeds_on_mat: 3})).toHaveSize(0);
    });

    it('Should not score more mat bonuses than contained seeds', function () {
      expect(scorer.getScore({m14_seeds: 1, m14_seeds_on_mat: 2})).toEqual(10);
      expect(scorer.getWarnings({m14_seeds: 1, m14_seeds_on_mat: 2})).toEqual([scorer.warnings.m14_bonus_requirement_not_met]);
    });

    it('Should cap at 3 seeds with a warning', function () {
      expect(scorer.getScore({m14_seeds: 4})).toEqual(15);
      expect(scorer.getWarnings({m14_seeds: 4})).toEqual([scorer.warnings.m14_max_3_seeds]);
    });
  });

  describe('Mission 15', function () {
    it('The nesting canopy is raised: 10', function () {
      expect(scorer.getScore({m15_canopy: true})).toEqual(10);
    });

    it('The garden skylight is completely in: 10', function () {
      expect(scorer.getScore({m15_skylight: true})).toEqual(10);
    });

    it('The compost hatch is completely opened: 10', function () {
      expect(scorer.getScore({m15_hatch: true})).toEqual(10);
    });

    it('Environmental bonus matching the completed feature: 10 added', function () {
      expect(scorer.getScore({m15_canopy: true, m15_bonus_mine: true})).toEqual(20);
      expect(scorer.getScore({m15_skylight: true, m15_bonus_city: true})).toEqual(20);
      expect(scorer.getScore({m15_hatch: true, m15_bonus_farm: true})).toEqual(20);
      expect(scorer.getWarnings({m15_hatch: true, m15_bonus_farm: true})).toHaveSize(0);
    });

    it('Should not score the bonus when the matching feature is not completed', function () {
      expect(scorer.getScore({m15_skylight: true, m15_bonus_mine: true})).toEqual(10);
      expect(scorer.getWarnings({m15_skylight: true, m15_bonus_mine: true})).toEqual([scorer.warnings.m15_bonus_requirement_not_met]);
    });

    it('Only one environmental bonus is possible', function () {
      expect(scorer.getScore({
        m15_canopy: true,
        m15_skylight: true,
        m15_hatch: true,
        m15_bonus_mine: true,
        m15_bonus_city: true,
        m15_bonus_farm: true,
      })).toEqual(40);
    });
  });

  describe('Mission 16', function () {
    it('Precision tokens remaining', function () {
      expect(scorer.getScore({m16_precision_tokens: 6})).toEqual(50);
      expect(scorer.getScore({m16_precision_tokens: 5})).toEqual(50);
      expect(scorer.getScore({m16_precision_tokens: 4})).toEqual(35);
      expect(scorer.getScore({m16_precision_tokens: 3})).toEqual(25);
      expect(scorer.getScore({m16_precision_tokens: 2})).toEqual(15);
      expect(scorer.getScore({m16_precision_tokens: 1})).toEqual(10);
      expect(scorer.getScore({m16_precision_tokens: 0})).toEqual(0);
    });
  });

  describe('Maximum score', function () {
    it('Should score 520 with every mission completed (without Gracious Professionalism)', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
        m01_drone: true, m01_lidar: true,
        m02_seeds: 3,
        m03_flag: true, m03_rock: true,
        m04_leaf: true, m04_second_leaf: true,
        m05_complete: true,
        m06_fragments: 4,
        m07_mycelium: true, m07_connections: 2,
        m08_vine: true,
        m09_platform: true, m09_camera: true, m09_seed: true,
        m10_spider: true, m10_snail: true,
        m11_root_cover: true,
        m12_cane: true, m12_tie: true,
        m13_keystone: true,
        m14_seeds: 3, m14_seeds_on_mat: 3,
        m15_canopy: true, m15_skylight: true, m15_hatch: true, m15_bonus_mine: true,
        m16_precision_tokens: 6,
      })).toEqual(520);
    });
  });
});
