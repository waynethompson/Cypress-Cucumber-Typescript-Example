import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { GoogleSearchPage } from '../../common/google-search-page';
import {GoogleResultsPage} from '../../common/google-results-page';

Given(/^I execute a long task in my database$/, () => {
  // executeCommand('db-command-long-task');
});

When(/^Press 'Search'$/, () => {
  GoogleSearchPage.pressSearch();
});

Then(/^I have some results$/, () => {
  GoogleResultsPage.expect().toHaveResults();
});
