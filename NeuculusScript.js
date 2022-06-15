const neuclois = new StaticObject(innerWidth/2+500,innerHeight/2,120,'green', 'neucloisCore');

const bomb = document.querySelector('img');

const ass = (element) => element.name;

const lvlUrls = [
    "./Index.html",
    "./MovmentChall.html",
    "./ObsticaleChall.html"
]

neuclois.update = () =>{
    if(neuclois.collision.otherCollName == 'neuronPlayer'){
        particleSpawn(neuclois.x,neuclois.y,60,2,'grey',10);
        particleSpawn(neuclois.x,neuclois.y,10,16,'grey',10);
        StaticObjects.splice(StaticObjects.findIndex(isLargeNumber),1);
        setInterval(() => {
            if(_playerCurrentSpeed  < document.getElementById('speedThreshold').innerHTML){
                window.location.href = lvlUrls[document.getElementById('narLook').innerHTML.charAt(1)];
            }
            else{
                console.log("GAME OVER");
                bomb.style.zIndex="5";
                setInterval(() => {
                    window.location.href = lvlUrls[document.getElementById('narLook').innerHTML.charAt(0)];    
                }, 4000);
                
            }
        }, 2000);

        console.log("ass");
    }
}
StaticObjects.push(neuclois);



//Math.abs(neuclois.collision.otherCollObject.velocity.x) +Math.abs(neuclois.collision.otherCollObject.velocity.y)