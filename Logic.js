const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

console.log(c);

class StaticObject{
    constructor(x, y,scale ,color, objectName){
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.color = color;
        this.name = objectName;
        this.collision = {
            otherCollName : String,
            otherCollObject : null
        }
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.scale,0,Math.PI*2,false)
        c.fillStyle = this.color;
        console.log("ass");
        c.fill();
    }
    update(){

    }
}


class DynamicObject{
    constructor(x, y,scale ,color,velocity,objectName){
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.color = color;
        this.velocity = velocity;
        this.name = objectName;
        this.isClicked = false;
        this.collision = {
            otherCollName : String,
            otherCollObject : null
        }
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.scale,0,Math.PI*2,false)
        c.fillStyle = this.color;
        c.fill();
    }
    _update(){
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
        neuron.draw();
        
    }
    update(){
        
    }
 
}

class particleObject{
    constructor(x, y, size ,color,velocity){
        this.x = x;
        this.y = y;
        this.scale = size;
        this.color = color;
        this.velocity = velocity;
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.scale,0,Math.PI*2,false)
        c.fillStyle = this.color;
        c.fill();
    }
    _update(){
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
    }
}

const DynamicObjects = []
const particles = []

const StaticObjects = [
   // new StaticObject(innerWidth/2+500,innerHeight/2,120,'green', 'neucloisCore') // the neuclois.
]

StaticObjects.forEach(object => {
    object.draw();
})

function particleSpawn(x,y,size,amount, color, velSpeed ) {
    for (let i = 0; i < amount; i++) {
        particles.push(new particleObject(x,y,size,color,{x: ((Math.round(Math.random()) * 2 - 1) * Math.random()) * velSpeed, y:((Math.round(Math.random()) * 2 - 1) * Math.random()) * velSpeed }));
    }
}


let animationId;
function animate(){
    animationId = requestAnimationFrame(animate)
    c.fillStyle = 'rgba(0,0,0,0.2)';
    c.fillRect(0,0,canvas.width,canvas.height);
    DynamicObjects.forEach(object => {
        object.update();
        object._update();
        DynamicObjects.forEach(object1 => {
            const dist = Math.hypot(object.x-object1.x,object.y-object1.y);
            if(dist - object.scale - object1.scale < 1 && object.name != object1.name){
                object.collision.otherCollName = object1.name;
                object.collision.otherCollObject = object1;
                object1.collision.otherCollName = object.name;
                object1.collision.otherCollObject = object;
            }
        });
    });
    StaticObjects.forEach(object => {
        object.draw();
        object.update();
        DynamicObjects.forEach(object1 => {
            const dist = Math.hypot(object.x-object1.x,object.y-object1.y);
            if(dist - object.scale - object1.scale < 1 && object.name != object1.name){
                object.collision.otherCollName = object1.name;
                object.collision.otherCollObject = object1;
                object1.collision.otherCollName = object.name;
                object1.collision.otherCollObject = object;
            }
        });
    });
    particles.forEach(particle => {
        particle.draw();
        particle._update();
    });
}

addEventListener('mousedown', (event) => {
    DynamicObjects.forEach(object => {
        const dist = Math.hypot(event.clientX - object.x, event.clientY - object.y);
        if(dist - object.scale < 1){
            //console.log(object.name);
            object.isClicked = true;
            
        }
        //console.log(dist);
    });
})
addEventListener('click', (event) => {
    DynamicObjects.forEach(object => {
        object.isClicked = false;
    });
});

animate();