const _ = require('lodash');
const envalid = require('envalid');

const listOfPhoneNumbers = envalid.makeValidator((value) => {
  if (_.isString(value)) {
    const valueWithoutSpaces = value.replace(/\s+/g, '');
    if (!valueWithoutSpaces.length) {
      return [];
    }
    if (/^(\+?\d+)(,\+?\d+)*$/.test(valueWithoutSpaces)) {
      return valueWithoutSpaces.split(',');
    }
  }
  throw new Error('Wrong format for the list of phone numbers');
});

module.exports = envalid.cleanEnv(process.env, {
  GRAPHQL_PORT: envalid.port({ default: 4000 }),
  ALLOWED_PHONE_NUMBERS_FOR_GUESTS: listOfPhoneNumbers({
    default: '',
    example: '+4400000,+723331',
  }),
  GRAPHQL_SUBSCIPTION_PORT: envalid.port({
    default: 4001,
    desc: 'subscription port (websocket)',
  }),
});
