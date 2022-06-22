
let amountToSpawn = 3;

let offset = 150;

let yoffsetSpawn = 50;

function spawnObsticales(amount,x,y) {
for(let i = 0; i < amount; i++){  
  
  const obsNeuron = new DynamicObject(x,y,30,'grey',{x:0,y:8},'neuronObsticale' + i);

  obsNeuron.update = () => {
    if(obsNeuron.collision.otherCollName == neuron.name){
      particleSpawn(obsNeuron.x,obsNeuron.y,20,obsNeuron.color,10);
      DynamicObjects.splice(DynamicObjects.findIndex(isLargeNumber),1);    
      document.location.reload(true);
    }
    if(obsNeuron.y > innerWidth - obsNeuron.scale - 400){
      obsNeuron.y = 0;
    }
  }
  DynamicObjects.push(obsNeuron);
  console.log("Spawned an obsticale: " + obsNeuron);
  x = x+offset;
  y = y-offset;
  }
}


spawnObsticales(amountToSpawn,innerWidth/2,0);




