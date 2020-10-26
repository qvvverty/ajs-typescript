import Cart from '../service/Cart';
import Book from '../domain/Book';
import Mobile from '../domain/Mobile';

const cart = new Cart();

test('New cart should be empty', () => {
  expect(cart.items.length).toBe(0);
});

test('.add should add item to cart', () => {
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  cart.add(book);
  expect(cart.items[0]).toEqual(book);
});
test('.add should add enumerable item to cart once', () => {
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  cart.add(book);
  expect(cart.items.length).toBe(1);
});

test('.add should add 1 to quantity of numerable item', () => {
  cart.add(new Mobile(1011, 'Smartphone', 20000, ['param 1', 'param 2'], 1));
  cart.add(new Mobile(1011, 'Smartphone', 20000, ['param 1', 'param 2'], 1));
  expect(cart.items[1].quantity).toBe(2);
});

test('.getAmount should return amount', () => {
  expect(cart.getAmount()).toBe(42000);
});

test('.getDiscountedAmount should return amount with discount', () => {
  expect(cart.getDiscountedAmount(10)).toBe(37800);
});

test('.remove should remove items from cart', () => {
  cart.remove(1001);
  expect(cart.items.length).toBe(1);
});

test('.remove should do nothing if item is not in the cart', () => {
  cart.remove(2000);
  expect(cart.items.length).toBe(1);
});

test('.removePiece should do nothing if item is not in the cart', () => {
  cart.removePiece(2000);
  expect(cart.items.length).toBe(1);
});

test('.removePiece should remove one piece of numerable item', () => {
  cart.removePiece(1011);
  expect(cart.items[0].quantity).toBe(1);
});