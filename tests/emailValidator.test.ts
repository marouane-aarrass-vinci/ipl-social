import { isValidEmail } from "../src/emailValidator";

describe("Email validation", () => {

  test("email valide", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
  });

  test("doit contenir un @", () => {
    expect(isValidEmail("testexample.com")).toBe(false);
  });

  test("doit avoir du texte avant et après le @", () => {
    expect(isValidEmail("@example.com")).toBe(false);
    expect(isValidEmail("test@")).toBe(false);
  });

  test("doit contenir un point dans le domaine", () => {
    expect(isValidEmail("test@example")).toBe(false);
  });

  test("le point ne peut pas être le dernier caractère", () => {
    expect(isValidEmail("test@example.")).toBe(false);
  });

  test("ne peut pas contenir d'espace", () => {
    expect(isValidEmail("test @example.com")).toBe(false);
  });

});
