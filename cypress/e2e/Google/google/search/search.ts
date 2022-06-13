import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { GoogleSearchPage } from '../../common/google-search-page';
import GoogleResultsPage from '../../common/google-results-page';

When(/^Press 'Search'$/, () => {
  GoogleSearchPage.pressSearch();
});

Then(/^I have some results$/, () => {
  GoogleResultsPage.expect().toHaveResults();
});
