$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/ProductStore.feature");
formatter.feature({
  "line": 1,
  "name": "Product_Store",
  "description": "",
  "id": "product-store",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Sign Up to Product store",
  "description": "",
  "id": "product-store;sign-up-to-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Tc01_SignUp"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "the user launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user opens product store  homepage",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the user clicks signup",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user close the application",
  "keyword": "And "
});
formatter.match({
  "location": "SignUpStepDefinition.the_user_launched_the_chrome_browser()"
});
formatter.result({
  "duration": 9774252000,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefinition.the_user_opens_product_store_homepage()"
});
formatter.result({
  "duration": 4308702100,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefinition.the_user_enters_username_and_password()"
});
formatter.result({
  "duration": 8298044600,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefinition.the_user_clicks_signup()"
});
formatter.result({
  "duration": 446148000,
  "status": "passed"
});
formatter.match({
  "location": "SignUpStepDefinition.the_user_close_the_application()"
});
formatter.result({
  "duration": 2236359400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login to Product store",
  "description": "",
  "id": "product-store;login-to-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Tc02_Login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user opens product store  homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launched_the_chrome_browser()"
});
formatter.result({
  "duration": 5478830700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_opens_product_store_homepage()"
});
formatter.result({
  "duration": 6449196200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 83670986900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_login()"
});
formatter.result({
  "duration": 4204255300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To add a product to cart",
  "description": "",
  "id": "product-store;to-add-a-product-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Tc03_Add_to_cart"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user launched the chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user opens product store  Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user clicks on product and add to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCartStepDefiniton.user_launched_the_chrome_Browser()"
});
formatter.result({
  "duration": 3257732500,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartStepDefiniton.user_opens_product_store_Homepage()"
});
formatter.result({
  "duration": 3046669100,
  "status": "passed"
});
formatter.match({
  "location": "AddToCartStepDefiniton.user_clicks_on_product_and_add_to_cart()"
});
formatter.result({
  "duration": 10273205400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "To contact",
  "description": "",
  "id": "product-store;to-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Tc04_Contact"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user launched the Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user opens Product store  Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user clicks contact",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user enters contact details",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user clicks send message",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactStepDefinition.user_launched_the_Chrome_Browser()"
});
formatter.result({
  "duration": 2742386300,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_opens_Product_store_Homepage()"
});
formatter.result({
  "duration": 3049786800,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_clicks_contact()"
});
formatter.result({
  "duration": 3153277900,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_enters_contact_details()"
});
formatter.result({
  "duration": 729177300,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_clicks_send_message()"
});
formatter.result({
  "duration": 7477923900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "To select a product",
  "description": "",
  "id": "product-store;to-select-a-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Tc05_clickproduct"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user launched the Chrome_Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "user opens Product Store  Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user clicks next",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user selects product",
  "keyword": "Then "
});
formatter.match({
  "location": "SelectAProdcutFromNextStepDenition.user_launched_the_Chrome_Browser()"
});
formatter.result({
  "duration": 2543606200,
  "status": "passed"
});
formatter.match({
  "location": "SelectAProdcutFromNextStepDenition.user_opens_Product_Store_Homepage()"
});
formatter.result({
  "duration": 3239203100,
  "status": "passed"
});
formatter.match({
  "location": "SelectAProdcutFromNextStepDenition.user_clicks_next()"
});
formatter.result({
  "duration": 3184053000,
  "status": "passed"
});
formatter.match({
  "location": "SelectAProdcutFromNextStepDenition.user_selects_product()"
});
formatter.result({
  "duration": 12473911100,
  "status": "passed"
});
});