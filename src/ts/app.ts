import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Mobile from './domain/Mobile';

const cart = new Cart();

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1010, 'The Avengers', 100, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));
cart.add(new Mobile(1011, 'Smartphone', 20000, ['param 1', 'param 2'], 1));
cart.add(new Mobile(1011, 'Smartphone', 20000, ['param 1', 'param 2'], 2));
cart.remove(1010);
cart.removePiece(1011);

console.log(cart.items);
console.log(cart.getAmount());
console.log(cart.getDiscountedAmount(10));
