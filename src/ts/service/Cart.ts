import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    const itemIndex = this._items.findIndex(product => product.id == item.id);
    if (itemIndex == -1) {
      this._items.push(item);
    } else {
      if (this._items[itemIndex].hasOwnProperty('quantity')) {
        this._items[itemIndex].quantity! += item.quantity!;
      }
    }
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getAmount(): number {
    let amount = 0;
    for (const item of this._items) {
      if (item.hasOwnProperty('quantity')) {
        amount += item.price * item.quantity!;
      } else {
        amount += item.price;
      }
    }
    return amount;
  }

  getDiscountedAmount(discountPercent: number): number {
    return this.getAmount() * (1 - discountPercent / 100);
  }

  remove(id: number): void {
    const itemIndex = this._items.findIndex(item => item.id == id);
    if (itemIndex != -1) this._items.splice(itemIndex, 1);
  }

  removePiece(id: number): void {
    const itemIndex = this._items.findIndex(item => item.id == id);
    if (itemIndex != -1 && this._items[itemIndex].hasOwnProperty('quantity') && this._items[itemIndex].quantity! > 1) {
      this._items[itemIndex].quantity! -= 1;
    }
  }
}