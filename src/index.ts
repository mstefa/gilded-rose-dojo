import { GildedRose } from "./GildenRose";
import { Item } from "./Item";

// const structuredClone = (origin: Array<Item>) => { // node v <= 14
//   return JSON.parse(JSON.stringify(origin)) as Array<Item>;
// }

const items = [
  new Item("Elixir of the Mongoose", 5, 7)
];

const clone = items.map((e) => structuredClone(e))
const gildedRose = new GildedRose(items);
const result = gildedRose.updateQuality()

console.log(clone)
console.log(result)

