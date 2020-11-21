export default class ChangeDollar {
  // GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD  
}

function showRate(destinationCUR) {
  let outputRate = 1;
  outputRate = response.conversion_rates[destinationCUR];
  return outputRate;
}

function applyRate(USDAmount, foreignCode, multiplier) {
  const beforeConvert = parseInt(USDAmount);
  let output;
  switch (foreignCode) {
    case 'CAD':
    case 'MXN':
    case 'EUR':
    case 'RUB':
    case 'INR':
    case 'CNY':
    case 'JPY':
    case 'THB':
    case 'AUD':
    case 'NZD':
      output = beforeConvert * multiplier;
      break;
    default:
      output = `Currency code: ${foreignCode} did not match any acceptable selection.`
}
  return output;
}



/* Where "error-type" can be any of the following:

"unsupported-code" if we don't support the supplied currency code (see supported currencies...).
"base-code-only-on-pro" if a request to the free.exchangerate-api.com endpoint is for a base code other than USD or EUR.
"malformed-request" when some part of your request doesn't follow the structure shown above.
"invalid-key" when your API key is not valid.
"quota-reached" when your account has reached the the number of requests allowed by your plan.
"not-available-on-plan" if your plan level doesn't support this type of request.

*/