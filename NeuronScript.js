const neuron = new DynamicObject(100,innerHeight/2,30,'blue',{x:0,y:0},'neuronPlayer');

let _playerSpeed = 4;
let _playerCurrentSpeed = 1;

const isLargeNumber = (element) => element.name;

neuron.update = () => {
    console.log(_playerCurrentSpeed);
    if(!neuron.isClicked){
        _playerCurrentSpeed = _playerCurrentSpeed > 0 ? _playerCurrentSpeed-_playerSpeed/1000 : 0;
    }

    if(neuron.collision.otherCollName == 'neucloisCore'){
        particleSpawn(neuron.x,neuron.y,20,neuron.color,10);
        DynamicObjects.splice(DynamicObjects.findIndex(isLargeNumber),1);    
        console.log("ass");
    }
    
}

addEventListener('mousemove', (event) => {
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
addEventListener('mouseup', (event) => {
    if(neuron.isClicked){
        neuron.velocity = {x:0,y:0}
        neuron.isClicked = false;
        //console.log("shit");
    }
});


DynamicObjects.push(neuron);


