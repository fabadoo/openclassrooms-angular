
export class AppareilModel {
  index: number;
  name: string;
  status: Boolean = false;

  constructor(index: number, name: string, status: Boolean = false) {
    this.index = index;
    this.name = name;
    this.status = status;
  }
}
