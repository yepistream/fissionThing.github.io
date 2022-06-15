const obsNeuron = new DynamicObject(100,innerHeight,30,'blue',{x:0,y:3},'neuronObsticale');

obsNeuron.updatea = () => {
    if(obsNeuron.collision.otherCollName == neuron.name){
        particleSpawn(neuron.x,neuron.y,20,neuron.color,10);
        DynamicObjects.splice(DynamicObjects.findIndex(isLargeNumber),1);    
        console.log("ass");
    }
}



