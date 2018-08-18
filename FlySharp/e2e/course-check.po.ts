import { browser, element, by } from 'protractor';

export class FlySharpCourseCheckPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getAppHomeH1(){
    return element(by.css('app-home h1')).getText();
  }

  getNavBar(){
    return element(by.css('app-root nav'));
  }

  getBuyFlightsElement(){
    return element(by.css('app-root app-buy-flight'));
  }

  getToggleFlightsButtonText(){
    return element(by.css('app-root app-buy-flight a')).getText();
  }

  clickToggleFlights(){
    element(by.css('app-root app-buy-flight a')).click();
  }

  getFlightTableRows(){
    return (element.all(by.css('app-buy-flight table tr'))).count();
  }


  getPaymentElement(){
    return element(by.css('app-root app-payment'));
  }

  getFlightFilterElement(){
    return element(by.css('app-root app-flight-filter'));
  }
  

  
}
