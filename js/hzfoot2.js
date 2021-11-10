
var screenwidth = screen.width;
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
if (screenwidth < 500 && !IsPC()) {
}

else
{

        
    
}


/*var randoms = {
	ads_codes: ['<script src="https://xn--3bs795g.chat:4443/ty/x-4246-34.js"><'+'/script>','<script src="https://show.suning.fit:12443/ty/4C16A074-BC44-14398-34-62AF38A80A5C.alpha"><'+'/script>'],
	ads_weight: [10,10],

	get_random: function(weight) {
		var s = eval(weight.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	},
	init: function() {

		var rand = randoms.get_random(randoms.ads_weight);
		document.write(randoms.ads_codes[rand]);

	}
}
randoms.init();



var randomsa = {
	ads_codes: ['<script src="https://xn--3bs795g.chat:4443/ty/x-4217-33.js"><'+'/script>','<script src="https://show.suning.fit:12443/ty/D00B79B2-6C21-14353-33-C0FAA69A23B7.alpha"><'+'/script>'],
	ads_weight: [10,10],

	get_random: function(weighta) {
		var s = eval(weighta.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weighta.length - 1;
		for(var k in weighta){w+=weighta[k];if(w>=r){n=k;break;}};
		return n;
	},
	inita: function() {

		var randa = randomsa.get_random(randomsa.ads_weight);
		document.write(randomsa.ads_codes[randa]);

	}
}
randomsa.inita();


