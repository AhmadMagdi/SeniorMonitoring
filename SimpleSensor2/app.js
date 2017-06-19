function onchangedCB(pedometerInfo)
{
   console.log("Step status: " + pedometerInfo.stepStatus);
   console.log("Speed: " + pedometerInfo.speed);
   console.log("Walking frequency: " + pedometerInfo.walkingFrequency);
   document.getElementById("calories").innerHTML ="Step status: " + pedometerInfo.stepStatus +"Speed: " + pedometerInfo.speed + "Walking frequency: " + pedometerInfo.walkingFrequency ; 
   /* Deregisters a previously registered listener */
   tizen.humanactivitymonitor.unsetAccumulativePedometerListener();
}

tizen.humanactivitymonitor.setAccumulativePedometerListener(onchangedCB);