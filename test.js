var test = require('tape')
var btoa = require('./')

test('btoa', function(t) {
  t.equal(btoa('hello world'), 'aGVsbG8gd29ybGQ=', 'encodes correctly')
  t.end()
})

if (process.browser) test('close', function(t) {
  t.end()
  setTimeout(function() {
    window.close()
  }, 500)
})
