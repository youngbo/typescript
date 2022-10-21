import { Gangsta, SuperGangsta } from '../../src/syntax/classStaticProperty';

describe('Class Static Property Test', () => {
    test(' The total number of bullets should be known to each gangster.', () => {
      const gang1 = new Gangsta();
      const gang2 = new Gangsta();
      gang1.shoot();
      gang1.shoot();
      gang2.shoot();

      const superGang1 = new SuperGangsta();
      const superGang2 = new SuperGangsta();

      superGang1.shootMany();
      superGang2.shootMany();

      gang1.shoot();
      gang2.shoot();

      expect(Gangsta.totalBullets).toBe(95);
      expect(SuperGangsta.totalBullets).toBe(93);
    });
});