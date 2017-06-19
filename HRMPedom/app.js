/*global tau*/
/*exported init*/

var seniorid=null; //localStorage.getItem("seniorid");
var INFO_SETTIMEOUT_DELAY = 10000;  
var INFO_SHOW_DELAY = 10000;  

//var TEXT_STOP = 'Stop';  
//var TEXT_START = 'Start';  

var heartRateEl;  
//var heartImg;  
var infoBackBtn;  
//var hrmControlBtn;  
//var measuringText;  

var gRate=0;
var cntr=0;
var tmp=0;
var infoTimeoutEnd = 0;
var infoTimeout = 0;

var sensorStarted = false;  
document.getElementsByTagName("body")[0].addEventListener("load",init());
/*
 * Function invoked on onload event
 */
function init() 
{
    console.log("init() called...");
    //alert("init");
    heartRateEl = document.getElementById('h');
    //heartImg = document.getElementById('heart-img');
    infoBackBtn = document.getElementById('info-back-btn');
    //hrmControlBtn= document.getElementById('hrm-control-btn');
    //measuringText = document.getElementById('measuring-info');
    
    //Registering click event handler for buttons.
    infoBackBtn.addEventListener('click', onInfoBackBtnClick);
    //hrmControlBtn.addEventListener('click', onhrmControlBtnClick);
    tizen.power.request("CPU", "CPU_AWAKE");
    startSensor();
    //tst();
}

/*
 * Click event handler for HRM sensor Start/Stop
 * Toggles the sensor state.
 */
//function onhrmControlBtnClick() {
//    console.log("onhrmControlBtnClick() called...");
//    
//    if (hrmControlBtn.innerHTML === TEXT_START){
//        console.log("info on button = start");
//        startSensor();
//    } else {
//        console.log("info on button = stop");
//        stopSensor();
//    }
//}

/*
 * Starts the HRM sensor and registers a change listener.
 * Update the UI: Shows measuring text, and change button text to Stop.
 */    
function startSensor() {
    console.log("start sensor() called...");
    //alert("start sensor");
    sensorStarted = true;
    clearTimers();
    //measuringText.classList.remove('hide');
    //measuringText.classList.add('show');
    //hrmControlBtn.innerHTML = TEXT_STOP;
    
    tizen.humanactivitymonitor.start('HRM', onHeartRateDataChange, onerrorCB);
    SeniorID();
}

function SeniorID() {
	if (!seniorid || seniorid==null || seniorid==undefined ) {
		seniorid = prompt("Please Enter Senior ID", "id");
		localStorage.setItem("seniorid", seniorid);
	}
	console.log("sid = "+ seniorid);
}

/*
 * Clear the timers if running for handling the information popup.
 */
function clearTimers() {
    console.log("Clear timers() called");
    window.clearTimeout(infoTimeout);
    window.clearTimeout(infoTimeoutEnd);
    infoTimeout = 0;
    infoTimeoutEnd = 0;
}

/*
 * Callback function Handles change event on current heart rate.
 * 
 */
function onHeartRateDataChange(heartRateInfo) {
    console.log("onHeartRateDataChange() called...");
   //alert("heart");
    if (!sensorStarted){
        return;
    }
    
    var rate = heartRateInfo.heartRate;
    var activePage = document.getElementsByClassName('ui-page-active')[0];
    var activePageId = activePage ? activePage.id : '';

    /*
     * If heart rate value is invalid-
     * Remove heart image animation, 
     * Displays measuring text and start a timer to show the information popup after 10 seconds. 
     */
     
    if (rate < 1) {
        console.log("Heart rate value < 1");
        rate = 0;
        heartRateEl.innerHTML = '';
        //heartImg.classList.remove('animate');
        //measuringText.classList.remove('hide');
        //measuringText.classList.add('show');

        /* Start a timer when sensor is started but not able to measure the heart rate
         * showMeasuringInfo() function will be execute after 10 sec and will show a info popup.
         */
         
        	if (activePageId === 'main' && infoTimeout === 0) {
        		infoTimeout = window.setTimeout(showMeasuringInfo, INFO_SETTIMEOUT_DELAY);
        	}
    	} else {
        /*
         * If heart rate value is valid
         * Clear all the timers to  handle info popup
         * Hides measuring text
         * Start the animation on heart image
         * and displays the heart rate value.
         */
        clearTimers();
        //hideMeasuringInfo();
        console.log("heartRateEl is valid information...");
        //if (!heartImg.classList.contains('animate')) {
            //heartImg.classList.add('animate');
            //measuringText.classList.remove('show');
            //measuringText.classList.add('hide');
        //}
        gRate+=rate;
        cntr++;
        heartRateEl.innerHTML = "Heart Rate: "+rate;
        
    	}
}

/* 
 * Call back when an error occurs */
 

function onerrorCB(error) {
    console.log("Error name:"+error.name + ", message: "+error.message);
}

/*
 * Displays information popup.
 */
function showMeasuringInfo() {

    console.log("showMeasuringInfo() called..");
    infoTimeout = 0;
    tau.changePage('#info');
    
    /* Start a timer when info popup is shown
     * hideMeasuringInfo() function will be execute after 10 sec and which will redirect to main page.
     */
    infoTimeoutEnd = window.setTimeout(hideMeasuringInfo, INFO_SHOW_DELAY);
}



/*
 * Hides information popup, redirects to main page.
 */

function hideMeasuringInfo() {
    console.log("hideMeasuringInfo() called..");
    tau.changePage('#main');
    infoTimeoutEnd = 0;
}

/*
 * Stops the sensor
 * Clears timers (to handle info popup)
 * Update the UI: Hides measuring text, stop animation on heart image and change button text to Start.
 */    
//function stopSensor() {
//    console.log("stopSensor() called...");
//    sensorStarted = false;
//    heartImg.classList.remove('animate');
//    measuringText.classList.remove('show');
//    measuringText.classList.add('hide');
//    
//    clearTimers();    
//    
//    tizen.humanactivitymonitor.stop("HRM");
//    hrmControlBtn.innerHTML = TEXT_START;
//}

/*
 * Click event handler for back button on info page
 * Hides the information popup and redirects to main page.
 */
function onInfoBackBtnClick() {
    console.log("onInfoBackBtnClick() called...");
    window.clearTimeout(infoTimeoutEnd);
    infoTimeoutEnd = 0;
    tau.changePage('#main');
}


(function() {
	//alert('pedo here');

	var pedometer = null,
    pedometerData = {},
    CONTEXT_TYPE = 'PEDOMETER';

	if (tizen && tizen.humanactivitymonitor !== undefined) {
        pedometer = tizen.humanactivitymonitor;
        console.log('Pedometer found');
        start();
    }else {
    	console.log('Pedometer not found');
    }

	 //Start pedomenter ;
	 function getPedometerData(pedometerInfo) {
         var pData = {
             calorie: pedometerInfo.cumulativeCalorie,
             distance: pedometerInfo.cumulativeDistance,
             runDownStep: pedometerInfo.cumulativeRunDownStepCount,
             runStep: pedometerInfo.cumulativeRunStepCount,
             runUpStep: pedometerInfo.cumulativeRunUpStepCount,
             speed: pedometerInfo.speed,
             stepStatus: pedometerInfo.stepStatus,
             totalStep: pedometerInfo.cumulativeTotalStepCount,
             walkDownStep: pedometerInfo.cumulativeWalkDownStepCount,
             walkStep: pedometerInfo.cumulativeWalkStepCount,
             walkUpStep: pedometerInfo.cumulativeWalkUpStepCount,
             walkingFrequency: pedometerInfo.walkingFrequency
         };

         pedometerData = pData;
         return pData;
     }

     /**
      * Return last received motion data
      * @return {object}
      */
     function getData() {
         return pedometerData;
     }

     /**
      * Reset pedometer data
      */
     function resetData() {
    	// console.log("---------------------------------");
    	 //alert("----------------------------------");
         pedometerData = {
             calorie: 0,
             distance: 0,
             runDownStep: 0,
             runStep: 0,
             runUpStep: 0,
             speed: 0,
             stepStatus: '',
             totalStep: 0,
             walkDownStep: 0,
             walkStep: 0,
             walkUpStep: 0,
             walkingFrequency: 0
         };
     }

     /**
      * @param {PedometerInfo} pedometerInfo
      * @param {string} eventName
      */
     function handlePedometerInfo(pedometerInfo, eventName) {
    	 pedometerData = getPedometerData(pedometerInfo)
    	 console.log('Total Steps : ' + pedometerData.totalStep);

    	 document.getElementById("s").innerHTML =  'Steps : ' + pedometerData.totalStep;
    	 document.getElementById("c").innerHTML = 'Calories : ' + pedometerData.calorie;

     }

     /**
      * Registers a change listener
      * @public
      */
     function start() {
         resetData();
         pedometer.start(
             CONTEXT_TYPE,
             function onSuccess(pedometerInfo) {
                 handlePedometerInfo(pedometerInfo, 'pedometer.change');
             }
         );
     }

     //var xVar = setInterval(dataTimer, 300000);
     var xVar = setInterval(dataTimer, 30000);
     //var counter = 0;
     function dataTimer() {
       //alert("data :"+ seniorid + " "+ gRate + " " + pedometerData.totalStep);
    	/* var req = "{" +
 						"'auth' : {" +
 							"'DriverManagerId' : 'SeniorHealthMonitoring'," +
 							"'DriverManagerPassword' : 'SeniorHealthMonitoringPass'" +
 						"}," +
 						"'package' : {" +
 							"'sensorInfo' : {" +
 								"'sensorId' : '" + 2433 +"'"+
 							"}" +
 							",'sensorData' : {" +
 								"'heartRate' : '" + 100 + "' ," +
 								"'nSteps' : '" + 20 + "'" +
 							"}" +
 						"}" +
 					"}";
    	 */
        var req = {
		"auth": {
			"DriverManagerId" : "SeniorHealthMonitoring",
			"DriverManagerPassword" : "SeniorHealthMonitoringPass"},
		"package": {
			"sensorInfo": {
				"sensorId" : "2433"
			},"sensorData" : {
				"heartRate" : "100 ",
				"nSteps" : "20" }
		}
	};
        req.package.sensorInfo.sensorId=seniorid;
        req.package.sensorData.heartRate=Math.round(gRate/cntr);
        gRate=0;
        cntr=0;
        req.package.sensorData.nSteps=pedometerData.totalStep - tmp;
       //alert(req.package.sensorData.heartRate);
       //var req ={};
      // req.auth={};
        alert("data :"+ req.package.sensorInfo.sensorId + " "+ req.package.sensorData.heartRate + " " + req.package.sensorData.nSteps);
    	 var xmlhttp = null;
    	 xmlhttp = new XMLHttpRequest();

    	 xmlhttp.onreadystatechange = function(){
    		 if (xmlhttp.readyState == xmlhttp.DONE){
    			alert(xmlhttp.responseText);
    		 }
    		 else{
    			 alert(xmlhttp.statusText);
    		 }
    	 };
    	 xmlhttp.onerror = function(e){
    		 alert("onerror: " + xmlhttp.statusText);
    	 };

    	 xmlhttp.open("POST", "http://dev.masterofthings.com/PostSensorData");

    	 xmlhttp.send(JSON.stringify(req));
    	 
    	 
    	 tmp = pedometerData.totalStep;
    	// alert(pedometerData.totalStep);
    	 //resetData();
    	 //alert(pedometerData.totalStep);
    	 //counter += 1;
         //document.getElementsByTagName("span")[0].innerHTML = counter;
     }
     //dataTimer();
     
     /**
      * Unregisters a change listener
      * @public
      */
     function stop() {
         pedometer.stop(CONTEXT_TYPE);
     }

     /**
      * Initializes the module
      */
})();




( function () {
    
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
        var page = document.getElementsByClassName( 'ui-page-active' )[0], pageid = page ? page.id : "";
            if( pageid === "main" ) {
                try {
                    //tizen.humanactivitymonitor.stop("HRM");
                    tizen.application.getCurrentApplication().hide(); //exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
    
} () );