import { Then } from 'cucumber';
import myAccount from '../pageobjects/ta-myaccount.page';
import yahooPage from '../pageobjects/yahoo-search.page';
import serviciosPage from '../pageobjects/servicios.page';

Then(/^En la parte superior del navegador se debería ver un menú principal con: "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" y "([^"]*)"; y un ícono de búsqueda$/, function (servicios, industrias, formacion, comunidad, empleos, nosotros, contactenos) {
  serviciosPage.getPrimerMenuItem().should.equal(servicios);
  serviciosPage.getSegundoMenuItem().should.equal(industrias);
  serviciosPage.getTercerMenuItem().should.equal(formacion);
  serviciosPage.getCuartoMenuItem().should.equal(comunidad);
  serviciosPage.getQuintoMenuItem().should.equal(empleos);
  serviciosPage.getSextoMenuItem().should.equal(nosotros);
  serviciosPage.getSeptimoMenuItem().should.equal(contactenos);
  
});

Then(/^Se debe mostrar en la parte inferior un mensake informativo sobre el uso de las cookies$/, function () {
  serviciosPage.clickBotonCookie(); 
});
Then(/^I should see a list of search results$/, function () {
  yahooPage.isSearched().should.be.true;
});

// *** belongs to ta-loging  feature
Then(/^I should see the message "([^"]*)" on my account page$/, function (message) {
  myAccount.getUserInfo().should.equal(message);
});
