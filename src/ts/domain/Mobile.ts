import Buyable from "./Buyable";

export default class Mobile implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly specifications: Array<string>,
    public quantity: number,
  ) { }
}