export class Appareil {
  index: number;
  name: string;
  status: Boolean = false;

  constructor(index: number, name: string) {
    this.index = index;
    this.name = name;
  }
}
