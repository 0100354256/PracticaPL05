var assert = chai.assert;


suite('CSV', function() {
//     setup(function(){
//       if (typeof __html__ !== 'undefined') {
//         document.body.innerHTML = __html__['test/index.html'];
//         original = document.getElementById('original');
//         finaltable = document.getElementById('finaltable');
//       }  
//     });

   test('Local Storage', function () {
     $("original").value('Local Storage Test');
     console.log("----------" + $("original").value);
     $.get("/csv", {original: $("original").value}, function(data) {
        $("#finaltable").html(data);
     });

     assert.deepEqual(localStorage.original, 'Local Storage Test');
   });

   test('Tabla Correcta', function () {
     original.value = 'a, "b"\nc, d';
     $.get("/csv", {original: original.value}, function(data) {
        $("#finaltable").html(data);
     });

     var esperado =  '\n        <table class="center" id="result">\n            \n                    <tbody><tr>\n                    \n                    <td>a</td>\n                    \n                    <td>b</td>\n                    \n                </tr>\n            \n                    <tr>\n                    \n                    <td>c</td>\n                    \n                    <td> d</td>\n                    \n                </tr>\n            \n        </tbody></table>\n    ';
     assert.deepEqual(finaltable.innerHTML, esperado);
   });

   test('Tabla Incorrecta', function () {
     original.value = 'a, b, c\nd, e';
     $.get("/csv", {original: original.value}, function(data) {
        $("#finaltable").html(data);
     });

     var valueExpected = '\n        <table class="center" id="result">\n            \n                    <tbody><tr>\n                    \n                    <td>a</td>\n                    \n                    <td> b</td>\n                    \n                    <td> c</td>\n                    \n                </tr>\n            \n                    <tr class="error">\n                    \n                    <td>d</td>\n                    \n                    <td> e</td>\n                    \n                </tr>\n            \n        </tbody></table>\n    ';
     assert.deepEqual(finaltable.innerHTML, valueExpected);
   });
});