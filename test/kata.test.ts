import { Kata } from "../src/Kata"
import { describe, expect, test } from '@jest/globals';

describe('test ohce', () => {

  test('call with name', () => {

    //Arrange 
    const kata = new Kata
    //Act
    const result = kata.run()
    //Assert
    expect(result).toBeTruthy();

  })
})
