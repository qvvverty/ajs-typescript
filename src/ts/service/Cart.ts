import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getAmount(): number {
      let amount = 0;
      for (const item of this._items) {
        amount += item.price;
      }
      return amount;
    }

    getDiscountedAmount(discountPercent: number): number {
      return this.getAmount() * (1 - discountPercent / 100);
    }

    remove(id: number): void {
      const itemIndex = this._items.findIndex(item => item.id == id);
      itemIndex == -1 ? console.log('Item is not in the cart') : this._items.splice(itemIndex);
    }
}