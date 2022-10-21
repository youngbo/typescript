export class Gangsta {
  static totalBullets = 100;

  shoot() {
      Gangsta.totalBullets--;
  }
}

export class SuperGangsta extends Gangsta {
  shootMany() {
      SuperGangsta.totalBullets--;
      SuperGangsta.totalBullets--;
  }
}