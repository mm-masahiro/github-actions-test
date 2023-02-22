const assert = require("assert");
const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
  it("valueが15の倍数の時、FizzBuzzが返ってくる", () => {
    assert(fizzbuzz(30) === "FizzBuzz");
  });

  it("valueが3の倍数の時、Fizzが返ってくる", () => {
    assert(fizzbuzz(6) === "Fizz");
  });

  it("valueが5の倍数の時、Buzzが返ってくる", () => {
    assert(fizzbuzz(20) === "Buzz");
  });

  it("上記以外の倍数の時、valueが返ってくる", () => {
    assert(fizzbuzz(7) === "7");
  });
});
