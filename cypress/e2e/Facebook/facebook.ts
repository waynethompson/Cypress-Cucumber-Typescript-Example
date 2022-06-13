import { Given } from "@badeball/cypress-cucumber-preprocessor";

const url = 'https://facebook.com'
Given('I open Facebook page', () => {
  cy.visit(url)
})