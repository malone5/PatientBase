var assert = require('assert');

var STUB_DATA = [  
  { "full_name": "Elliott Weissinger", "first": "Elliott", "last": "Weissinger" },
  { "full_name": "Penny Weissinger", "first": "Penny", "last": "Weissinger" },
  { "full_name": "Orvale Kavanagh", "first": "Orval", "last": "Kavanagh" },
  { "full_name": "Eloise Barnett", "first": "Eloise", "last": "Barnett" },
  { "full_name": "Elliott Burger", "first": "Elliott", "last": "Burger" },
  { "full_name": "Jack Harmen", "first": "Jack", "last": "Harmen" },
  { "full_name": "Jacklyn Ramsey", "Jacklyn": "Jack", "last": "Ramsey" },
]


// Test
describe('searchPatientName', function() {

  var searchPatientName = function (searchqry) {
    return STUB_DATA.filter(patient => patient.full_name.indexOf(searchqry) > -1) 
  }

  // Test 1: Are we returning the expected number of records
  it('should return a list of patients with a full or partial match on full_name', function() {

    var test_cases = [
      {input_name: 'Orvale Kavanagh', expected: 1},
      {input_name: 'OrvaleKavanagh', expected: 0},
      {input_name: 'Jack', expected: 2},
      {input_name: 'Barnett', expected: 1},
      {input_name: 'Elli', expected: 2},
      {input_name: 'Brian', expected: 0},
      {input_name: 'e', expected: 7},
      {input_name: 'E', expected: 3},
      {input_name: '', expected: 7},
      {input_name: null, expected: 0},
      {input_name: 1234, expected: 0}
    ]

    // Check if the number of records in result match the expected number of records
    test_cases.forEach(function(testcase){
      var result = searchPatientName(testcase.input_name)
      assert.equal(result.length, testcase.expected);
    });

  });

})