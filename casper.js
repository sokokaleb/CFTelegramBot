var args = casper.cli.options;
var CF_HANDLE = args.handle;
var CF_PASSWORD = args.password;

console.log(CF_HANDLE, CF_PASSWORD);

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

casper.thenOpen('http://codeforces.com/contests');


casper.run();