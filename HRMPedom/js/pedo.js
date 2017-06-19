//<!-- Sample Code by Victor Dibia, Dencycom.com May 16, 2014 -->

//function tst() {
//	console.log("tst");
//}
(function() {
	alert('pedo here');

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

    	 document.getElementById("s").innerHTML =  'Total Steps : ' + pedometerData.totalStep;
    	 document.getElementById("c").innerHTML = 'Calories Burnt : ' + pedometerData.calorie;

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
