import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import { GoogleSearchPage } from '../../common/google-search-page';
import { Browser } from '../../common/browser';

When(/^Press 'Feel Lucky'$/, () => {
  GoogleSearchPage.pressFeelLucky();
});

Then(/^I am redirected to another domain$/, () => {
  Browser.expect().toBeInOtherDomain();
});
