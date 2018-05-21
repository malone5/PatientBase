var assert = require('assert');

var STUB_DATA = [  
  { "full_name": "Arnoldo Griffey", "first": "Arnoldo", "last": "Griffey", "mrn": "MRN002561" },
  { "full_name": "Quincy Doss", "first": "Quincy", "last": "Doss", "mrn": "MRN002567" },
  { "full_name": "Albert Irvin", "first": "Albert",  "last": "Irvin", "mrn": "MRN002572" }
]



// Test
describe('findPatientByMRN', function() {

  var searchByMRN = function (mrn) {
    var found = STUB_DATA.find(function(patient) {
      return patient.mrn == mrn
    }) 

    if (!found) {
      return null
    }
    return found
  }

  // Test 1: MRN found
  it('should return a patient record that matches the MRN argument', function() {
    
    var cases = [
      {input_mrn: 'MRN002567', expected: 'Quincy Doss'},
      {input_mrn: 'MRN002572', expected: 'Albert Irvin'},
      {input_mrn: 'MRN002561', expected: 'Arnoldo Griffey'}
    ]

    cases.forEach(function(testcase){
      result = searchByMRN(testcase.input_mrn)
      assert.equal(result.full_name, testcase.expected);
    });

  });

  // Test 2: MRN does not exist
  it('should return null if the MRN was not found in the data set', function() {
    
    var cases = [
      {input_mrn: 'MRN002599', expected: null},
      {input_mrn: 'MRN002588', expected: null},
      {input_mrn: 'MRN002577', expected: null}
    ]

    cases.forEach(function(testcase){
      result = searchByMRN(testcase.input_mrn)
      assert.equal(result, testcase.expected);
    });

  });

})