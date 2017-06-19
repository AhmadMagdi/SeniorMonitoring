
window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().hide(); // .exit();
	} catch (ignore) {
	}
    });

    // Sample code
    tizen.power.request("CPU", "CPU_AWAKE");
    var myVar = setInterval(myTimer, 995);
    var counter = 0;
    function myTimer() {
        counter += 1;
        document.getElementsByTagName("span")[0].innerHTML = counter;
    }
    
};
