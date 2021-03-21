/*
function linkChecker(inputText) {
  // Log action
  console.log("::: Running checkURL :::", inputText);
  // Match URL regex pattern
  let urlPattern = new RegExp(
    /^((?:https?:\/\/)?[^.\/]+(?:\.[^.\/]+)+(?:\/.*)?)$/
  );
  console.log(urlPattern.test(inputText));
  // RegExp.test returns a boolean indicating whether there was a match or not
  return urlPattern.test(inputText);
}
*/
// function to check if input is valid url 
// source: https://www.tutorialspoint.com/How-to-validate-URL-address-in-JavaScript
function linkChecker(myURL) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
  '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i');
  console.log('checking url:');
  console.log(pattern.test(myURL));
  return pattern.test(myURL);
  }

export { linkChecker };
