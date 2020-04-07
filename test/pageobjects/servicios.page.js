
import Page from './page';

class ServiciosPage extends Page  {
  /**
  * define elements
  */
  get primerMenuItem ()   { return $("li[id='menu-item-6142'] a:first-child"); }
  get segundoMenuItem ()  { return $("li[id='menu-item-870'] a:first-child"); }
  get tercerMenuItem ()   { return $("li[id='menu-item-1876'] a:first-child"); }
  get cuartoMenuItem ()   { return $("li[id='menu-item-7979'] a:first-child"); }
  get quintoMenuItem ()   { return $("li[id='menu-item-550'] a:first-child"); }
  get sextoMenuItem ()    { return $("li[id='menu-item-7313'] a:first-child"); }
  get septimoMenuItem ()  { return $("li[id='menu-item-282'] a:first-child"); }
  get botonCookie ()      { return $('#cookie_action_close_header'); }
  get searchInput()       { return $('#yschsp'); }
  get searchButton()      { return $('.mag-glass'); }
  get resultsList()       { return $('#results'); }

  /**
   * define or overwrite page methods
   */

  open () {
      super.open('https://www.choucairtesting.com/servicio/')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
  }

  getPrimerMenuItem (){
      console.log('CACHETE3');
      return this.primerMenuItem.getText();
      console.log('CACHETE4');
  }

  getSegundoMenuItem (){
      return this.segundoMenuItem.getText();
  }

  getTercerMenuItem (){
      return this.tercerMenuItem.getText();
  }

  getCuartoMenuItem (){
      return this.cuartoMenuItem.getText();
  }

  getQuintoMenuItem (){
      return this.quintoMenuItem.getText();
  }

  getSextoMenuItem (){
      return this.sextoMenuItem.getText();
  }

  getSeptimoMenuItem (){
      return this.septimoMenuItem.getText();
  }

  clickBotonCookie (){
      return this.botonCookie.click();
  }

  enterText (item) {
    this.searchInput.clearValue();
    this.searchInput.setValue(item);
    browser.pause(1000);
  }

  search () {
    this.searchButton.click();
  }
  isSearched () {
    this.resultsList.waitForDisplayed(1000);
    return this.resultsList.isDisplayed();
  }
}

export default new ServiciosPage();
