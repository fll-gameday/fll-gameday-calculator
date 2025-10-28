import {FllScorer} from './scorer';

const scorer = new FllScorer();

/**
 * Robot Game 2025 specifications test suite, based on the official scoring guide
 * @see https://www.first-lego-league.org/en/2025-26-season/challenge-resources/season-documents
 */
describe('Robot Game 2025 specifications', function () {

  describe('Scorer initial state', function () {
    /**
     * The scorer script should only take into account what is given in
     * the missions state argument
     */
    it('Should score no points if nothing is given', function () {
      expect(scorer.getScore({})).toEqual(0);
    });

    /**
     * Doing nothing scores points
     * M16 Precision
     * > number remaining: 6: 50
     */
    it('Should score 50 for initial state', function () {
      expect(scorer.getScore(scorer.initialMissionsState())).toEqual(50);
    });

    it('Should be no warnings with initial state', function () {
      expect(scorer.getWarnings(scorer.initialMissionsState()).length).toEqual(0);
    });
  });

  describe('Mission 00', function () {
    it('If your robot and all equipment fit completely in one launch area and under a height limit [...]: 20', function () {
      expect(scorer.getScore({
        m00_small_inspection_area: true,
      })).toEqual(20);
    });
  });

  describe('Mission 01', function () {
    it('Soil deposits are completely cleared, touching the mat: 10 each', function () {
      expect(scorer.getScore({
        m01_soil: 0,
      })).toEqual(0);
      expect(scorer.getScore({
        m01_soil: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m01_soil: 2,
      })).toEqual(20);
    });

    it('Archaeologist\'s brush is not touching the dig site: 10 Added', function () {
      expect(scorer.getScore({
        m01_brush: true,
      })).toEqual(10);
      expect(scorer.getWarnings({
        m01_brush: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 02', function () {
    it('Topsoil sections are completely cleared: 30', function () {
      expect(scorer.getScore({
        m02_cleared: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m02_cleared: 2,
      })).toEqual(20);
      expect(scorer.getScore({
        m02_cleared: 3,
      })).toEqual(30);
    });
  });

  describe('Mission 03', function () {
    it('Team\'s minecart is on the opposing team\'s field: 30', function () {
      expect(scorer.getScore({
        m03_cart: true,
      })).toEqual(30);
    });

    it('Bonus: and the opposing team\'s minecart is on this team\'s field: 10 ADDED', function () {
      expect(scorer.getScore({
        m03_cart: true,
        m03_opposing_cart: true,
      })).toEqual(40);
      expect(scorer.getScore({
        m03_cart: true,
        m03_opposing_cart: false,
      })).toEqual(30);
      expect(scorer.getScore({
        m03_cart: false,
        m03_opposing_cart: true,
      })).toEqual(0);
      expect(scorer.getWarnings({
        m03_cart: false,
        m03_opposing_cart: true,
      })).toHaveSize(1);
      expect(scorer.getWarnings({
        m03_cart: true,
        m03_opposing_cart: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 04', function () {
    it('Precious artifact is not touching the mine: 30', function () {
      expect(scorer.getScore({
        m04_artifact: true,
      })).toEqual(30);
    });

    it('Both support structures are standing: 10', function () {
      expect(scorer.getScore({
        m04_supports: true,
      })).toEqual(10);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m04_artifact: true,
        m04_supports: true,
      })).toEqual(30 + 10);
    });
  });

  describe('Mission 05', function () {
    it('Structure floor is completely upright: 30', function () {
      expect(scorer.getScore({
        m05_upright: true,
      })).toEqual(30);
    });
  });

  describe('Mission 06', function () {
    it('Ore blocks are not touching the forge: 10 EACH', function () {
      expect(scorer.getScore({
        m06_blocks: 0,
      })).toEqual(0);
      expect(scorer.getScore({
        m06_blocks: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m06_blocks: 2,
      })).toEqual(20);
      expect(scorer.getScore({
        m06_blocks: 3,
      })).toEqual(30);
    });
  });

  describe('Mission 07', function () {
    it('Millstone is no longer touching its base: 30', function () {
      expect(scorer.getScore({
        m07_millstone: true,
      })).toEqual(30);
    });
  });

  describe('Mission 08', function () {
    it('Preserved pieces are outside the silo: 10 EACH', function () {
      expect(scorer.getScore({
        m08_pieces: 1,
      })).toEqual(10);
      expect(scorer.getScore({
        m08_pieces: 2,
      })).toEqual(20);
      expect(scorer.getScore({
        m08_pieces: 3,
      })).toEqual(30);
      expect(scorer.getWarnings({
        m08_pieces: 4,
      }).indexOf(scorer.warnings.m08_max_3_pieces)).not.toEqual(-1);
    });
  });

  describe('Mission 09', function () {
    it('Roof is completely raised: 20', function () {
      expect(scorer.getScore({
        m09_roof: true,
      })).toEqual(20);
    });

    it('Market wares are raised: 10', function () {
      expect(scorer.getScore({
        m09_wares: true,
      })).toEqual(10);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m09_roof: true,
        m09_wares: true,
      })).toEqual(20 + 10);
      expect(scorer.getWarnings({
        m09_roof: true,
        m09_wares: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 10', function () {
    it('Scale is tipped and touching the mat: 20', function () {
      expect(scorer.getScore({
        m10_tipped: true,
      })).toEqual(20);
    });

    it('Scale pan is completely removed: 10', function () {
      expect(scorer.getScore({
        m10_removed: true,
      })).toEqual(10);
    });

    it('Can score both', function () {
      expect(scorer.getScore({
        m10_tipped: true,
        m10_removed: true,
      })).toEqual(20 + 10);
      expect(scorer.getWarnings({
        m10_tipped: true,
        m10_removed: true,
      })).toHaveSize(0);
    });
  });

  describe('Mission 11', function () {
    it('Artifacts are raised above the ground layer: 20', function () {
      expect(scorer.getScore({
        m11_raised: true,
        m11_flag: false,
      })).toEqual(20);

      expect(scorer.getScore({
        m11_raised: true,
        m11_flag: true,
      })).toEqual(20 + 10);

      expect(scorer.getScore({
        m11_raised: false,
        m11_flag: true,
      })).toEqual(0);
    
      expect(scorer.getWarnings({
        m11_raised: false,
        m11_flag: true,
      }).indexOf(scorer.warnings.m11_flag_not_lowered)).not.toEqual(-1);
    });
  });

  describe('Mission 12', function () {
    it('Sand is completely cleared: 20', function () {
      expect(scorer.getScore({
        m12_sand: true,
      })).toEqual(20);
    });

    it('Ship is completely raised: 10', function () {
      expect(scorer.getScore({
        m12_ship: true,
      })).toEqual(10);
    });
  });

  describe('Mission 13', function () {
    it('Statue is completely raised: 30', function () {
      expect(scorer.getScore({
        m13_statue: true,
      })).toEqual(30);
    });
  });

  describe('Mission 14', function () {
    it('Brush: 5', function () {
      expect(scorer.getScore({
        m14_brush: true,
      })).toEqual(5);
    });
    it('Brush: 5', function () {
      expect(scorer.getScore({
        m14_brush: true,
      })).toEqual(5);
    });
    it('Minecart: 5', function () {
      expect(scorer.getScore({
        m14_minecart: true,
      })).toEqual(5);
    });
    it('Scale Pan: 5', function () {
      expect(scorer.getScore({
        m14_scale_pan: true,
      })).toEqual(5);
    });
    it('Topsoil: 5', function () {
      expect(scorer.getScore({
        m14_topsoil: true,
      })).toEqual(5);
    });
    it('Artifact: 5', function () {
      expect(scorer.getScore({
        m14_artifact: true,
      })).toEqual(5);
    });
    it('Ore: 5', function () {
      expect(scorer.getScore({
        m14_ore: true,
      })).toEqual(5);
    });
    it('Millstone: 5', function () {
      expect(scorer.getScore({
        m14_millstone: true,
      })).toEqual(5);
    });

    it('Can score all', function () {
      expect(scorer.getScore({
        m14_brush: true,
        m14_artifact: true,
        m14_millstone: true,
        m14_minecart: true,
        m14_ore: true,
        m14_scale_pan: true,
        m14_topsoil: true,
      })).toEqual(5 * 7);
    });
  });

  describe('Mission 15', function () {
    it('Flag(s): 5 EACH', function () {
      expect(scorer.getScore({
        m15_flags: 1,
      })).toEqual(5);
      expect(scorer.getScore({
        m15_flags: 2,
      })).toEqual(10);
      expect(scorer.getScore({
        m15_flags: 3,
      })).toEqual(15);
      expect(scorer.getWarnings({
        m15_flags: 4,
      }).indexOf(scorer.warnings.m15_max_three_flags)).not.toEqual(-1);
    });
  });

  describe('Mission 16', function () {
    it('If the number remaining is: 1: 10, 2: 15, 3: 25, 4: 35, 5: 50, 6: 50', function () {
      expect(scorer.getScore({
        m16_precision_tokens: 6
      })).toEqual(50);

      expect(scorer.getScore({
        m16_precision_tokens: 5
      })).toEqual(50);

      expect(scorer.getScore({
        m16_precision_tokens: 4
      })).toEqual(35);

      expect(scorer.getScore({
        m16_precision_tokens: 3
      })).toEqual(25);

      expect(scorer.getScore({
        m16_precision_tokens: 2
      })).toEqual(15);

      expect(scorer.getScore({
        m16_precision_tokens: 1
      })).toEqual(10);
    });
  });
});
