const neuron = new DynamicObject(innerWidth/2,innerHeight-30,30,'blue',{x:0,y:0},'neuronPlayer');

let _playerSpeed = 4;
let _playerCurrentSpeed = 1;

const isLargeNumber = (element) => element.name;

neuron.update = () => {
    if(!neuron.isClicked){
        _playerCurrentSpeed = _playerCurrentSpeed > 0 ? _playerCurrentSpeed-_playerSpeed/1000 : 0;
    }

    if(neuron.collision.otherCollName == 'neucloisCore'){
        particleSpawn(neuron.x,neuron.y,20,neuron.color,10);
        DynamicObjects.splice(DynamicObjects.findIndex(isLargeNumber),1);    
    }
    
}

addEventListener('mousemove', (event) => { //For PCs
    if(neuron.isClicked){
        const angle = Math.atan2(event.clientY-neuron.y,event.clientX-neuron.x);
        const _velocity = {
            x: Math.cos(angle) * _playerCurrentSpeed,
            y: Math.sin(angle) * _playerCurrentSpeed
        };
        neuron.velocity = _velocity;
        _playerCurrentSpeed += _playerSpeed/1000;
    }
});
addEventListener('mouseup', (event) => { //For PCs
    if(neuron.isClicked){
        neuron.velocity = {x:0,y:0}
        neuron.isClicked = false;
        //console.log("shit");
    }
});
addEventListener('touchmove', (event) => { //For phones
    if(neuron.isClicked){
        const angle = Math.atan2(event.changedTouches[0].clientY-neuron.y,event.changedTouches[0].clientX-neuron.x);
        const _velocity = {
            x: Math.cos(angle) * _playerCurrentSpeed,
            y: Math.sin(angle) * _playerCurrentSpeed
        };
        neuron.velocity = _velocity;
        _playerCurrentSpeed += _playerSpeed/1000;
    }
});
addEventListener('touchend', (event) => { //For phones
    if(neuron.isClicked){
        neuron.velocity = {x:0,y:0}
        neuron.isClicked = false;
        //console.log("shit");
    }
});


DynamicObjects.push(neuron);
//DynamicObjects.push(new DynamicObject(100,100,'red',{x:0,y:0},'testObject'));


