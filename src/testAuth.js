// const FormAPI = require('formapi');
import FormAPI from 'formapi';

let formapiConfig = new FormAPI.Configuration();
formapiConfig.apiTokenId = "api_test_****************";
formapiConfig.apiTokenSecret =
  "****************";
const formapiClient = new FormAPI.Client(formapiConfig);

module.exports = (cb) => {
  formapiClient.testAuthentication(cb);
  return true;
}
