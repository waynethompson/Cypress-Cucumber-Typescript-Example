export class Browser {
  // You can use Browser class to do some typical things, like
  // login, etc.

  static expect() {
    return {
      toBeInOtherDomain: () => cy.url().should('not.include', 'google'),
    };
  }
}