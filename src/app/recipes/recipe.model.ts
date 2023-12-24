// I models permettono di definire lo stesso oggetto più volte in modo da poterlo riutilizzare in più parti del codice
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
