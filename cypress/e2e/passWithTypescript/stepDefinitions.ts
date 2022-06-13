import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { pass } from "./someFile";

const localFunctionWithTypes = (a: number, b: number): number => a + b;

Given(/I pass/, () => {

  pass("hello world");
  console.log(localFunctionWithTypes(1,2) === 2)
});
