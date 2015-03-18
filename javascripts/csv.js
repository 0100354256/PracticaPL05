button = function(cadena) {
  var original = cadena.original;
  var regexp = /\s*"((?:[^"\\]|\\.)*)"\s*,?|\s*([^,]+),?|\s*,/g;
  var lines = original.split(/\n+\s*/);
  var commonLength = NaN;

  var html = '';

  for (var i in lines) {
    var m = lines[i].match (regexp);
    var rows = []; //treated row
    var error = false;

    if (m) {
      if (commonLength && (commonLength != m.length)) {
        error = true;
      }
      else {
        commonLength = m.length;
        error = false;
      }

      for (var j in m) {
        var value = m[j].replace(/,\s*$/,'');

        value = value.replace(/^\s*"/,'');
        value = value.replace(/"\s*$/,'');
        value = value.replace(/\\"/,'"');

        rows.push (value);
      }

      var tr_type = error? '<tr class="error">': '<tr>';
      var row = '';
      rows.forEach(function(td, index) {
        row = row + '<td>' + td + '</td>'; 
      });

      html = html + tr_type + row + '</tr>';
    }
    else{
      alert('ERROR! ilegal CSV');
      error = true;
    }
  }

  html = '<table>' + html + '</table>';
  console.log (html);

  return html;
};