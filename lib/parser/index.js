'use strict'

var Parser = function (s) {
  var results = {
    first_name: '',
    middle_name: '',
    last_name: '',
    full_name: '',
  }

  if (!s || s.length == 0) return results
  var token = s.split(' ').filter(function (index) {
    return index.trim() != ''
  })

  if (token.length == 1) results.first_name = results.full_name = token[0]
  if (token.length == 2) {
    results.first_name = token[1]
    results.last_name = token[0]
    results.full_name = results.last_name + ' ' + results.first_name
  }
  if (token.length >= 3) {
    results.first_name = token[token.length - 1]
    results.last_name = token[0]
    delete token[token.length - 1]
    delete token[0]
    results.middle_name = token.join(' ').trim()
    results.full_name = results.last_name + ' ' + results.middle_name + ' ' + results.first_name

  }

  return results
}

module.exports = Parser
