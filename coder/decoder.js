

// var words = [
//     'January',
//     'lacks',
//     'caveats',
//     'hazardous',
//     'DOORS',
//     'crying',
//     'arrogantly',
//     'climate',
//     'proponent',
//     'rebuttal'
// ];

function decoder (arr) {
    var secretMessage = '';
    arr.forEach(function(word, i) {
    	secretMessage += word.charAt(i % 5);
    });
        return secretMessage;
}

module.exports = decoder;



