'use strict';

/*global casper:true*/

var args = casper.cli.options;
var CF_QUERY = args.query;
var CF_HANDLE = args.handle;
var CF_PASSWORD = args.password;

if (CF_QUERY === 'undefined') {
  throw new Error('No query defined.');
}

console.log(CF_QUERY, CF_HANDLE, CF_PASSWORD);

casper.start('http://codeforces.com/enter');

casper.then(function() {
  this.echo(this.getTitle());
  this.test.assertExists('#enterForm', 'HASU');
  this.fill('#enterForm', {
    'handle': CF_HANDLE,
    'password': CF_PASSWORD
  }, true);
});

casper.waitForSelector('#sidebar');

// Use complete=true to show all available contest
casper.thenOpen('http://codeforces.com/contests?complete=true');

casper.run();