
let amountToSpawn = 3;

let offset = 150;

let yoffsetSpawn = 100;

function spawnObsticales(amount,x,y) {
for(let i = 0; i < amount; i++){  
  
  const obsNeuron = new DynamicObject(x,y,30,'grey',{x:4,y:0},'neuronObsticale' + i);

  obsNeuron.update = () => {
    if(obsNeuron.collision.otherCollName == neuron.name){
      particleSpawn(obsNeuron.x,obsNeuron.y,20,obsNeuron.color,10);
      DynamicObjects.splice(DynamicObjects.findIndex(isLargeNumber),1);    
      document.location.reload(true);
    }
    if(obsNeuron.x > innerWidth){
      obsNeuron.x = 0;
     // alert("Pos: " + obsNeuron.x);
    }
  }
  DynamicObjects.push(obsNeuron);
  console.log("Spawned an obsticale: " + obsNeuron);
  x = x+offset;
  y = y-yoffsetSpawn;
  }
}


spawnObsticales(amountToSpawn,0,innerHeight/2+100);




