var apiLib = {
    get: function (site,callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
            }
        };
        xhttp.open('GET', site, true);
        xhttp.send();
    }
};
apiLib.get("https://amazinigmech2418.github.io/ObjectifyJS/objects.js",function(data){eval(data);});
apiLib.get("https://amazinigmech2418.github.io/ObjectifyJS/numbers.js",function(data){eval(data);});
apiLib.get("https://amazinigmech2418.github.io/ObjectifyJS/strings.js",function(data){eval(data);});
function extract(arg) {
var numberMap = arg.toNumberMap();
for(var zzz=0; zzz<numberMap.length; zzz++) {
numberMap[zzz] = numberMap[zzz].toString(2);
}


var array = [];
for (var z = 0; z<numberMap.length; z++) {
array.push(String.fromCharCode(parseInt(numberMap[z].slice(0,7),2)));
array.push(String.fromCharCode(parseInt(numberMap[z].slice(7),2)));
}
return array.join("");
}
