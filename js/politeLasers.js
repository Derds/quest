
function getLaserSetting(manners) {
    var setting = "";
    if(manners === "please"){
        var setting = "OFF";
    }
    else{
        var setting = "ON";
    }
    return setting;
  }
  
  const currentSetting = getLaserSetting();
  console.log('The current laser setting is: ' + currentSetting);