import { getNumberPersonFromUrl } from "./getNumberPersonFromUrl";
import { describe, it, expect } from "vitest";

describe("when get from url person id", () => {
  it("should return a correct number", () => {
    const result = getNumberPersonFromUrl("https://swapi.dev/api/people/1/");
    expect(result).toEqual(1);
  });

  it("should return a correct number", () => {
    const result = getNumberPersonFromUrl("https://swapi.dev/api/people/12/");
    expect(result).toEqual(12);
  });
});
