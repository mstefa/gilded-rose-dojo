import { GildedRose } from "./GildenRose";
import { Item } from "./Item";

const structuredClone = (origin: Item[]) => { // node v <= 14
  return JSON.parse(JSON.stringify(origin)) as Item[];
}

const items = [
  new Item("Elixir of the Mongoose", 5, 7)
];
const expected = structuredClone(items)
const gildedRose = new GildedRose(items);
const result = gildedRose.updateQuality()

console.log(expected)
console.log(result)

