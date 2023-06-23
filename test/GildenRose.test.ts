import { describe, expect, it } from '@jest/globals';
import { GildedRose } from "../src/GildenRose";
import { Item } from '../src/Item';

describe('Gilded Rose', () => {

  it('should be in update quality of a normal product', () => {
    const items = [
      new Item("Elixir of the Mongoose", 5, 7)
    ];
    // const expected = structuredClone(items)
    const expected = [
      new Item("Elixir of the Mongoose", 4, 6)
    ];
    const gildedRose = new GildedRose(items);
    const result = gildedRose.updateQuality()
    expect(result).toEqual(expected);
  });

  it('should be in update quality of a Aged Brie', () => {
    const items = [
      new Item("Aged Brie", 5, 7)
    ];
    // const expected = structuredClone(items)
    const expected = [
      new Item("Aged Brie", 4, 8)
    ];
    const gildedRose = new GildedRose(items);
    const result = gildedRose.updateQuality()
    expect(result).toEqual(expected);
  });
});
