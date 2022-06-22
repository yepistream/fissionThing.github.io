const narratorTexts =[
    "DOBRO DOSLI\r\nJa cu danas pokusati da vas naucim osnove Fizicke fizije kroz interaktivnost\r\nPlavi krug je nutron(proton), dok je zeleni krug nucleus(centar atoma).\r\nDa bih pomerili neutron morate da drzite levi klik na njemu i da ga pomerite prema nucleusu",
    "Kao sto ste videli nucleus se razbio na dva atoma koji imaju manju nucleus.\r\nOvo se desava zbog Columbovih zakona, to jest da se neutroni stalno guraju jedan od drugog za 20N(wetn), i istovremeno tako se pravi i energija.\r\nAli to nije jedino sto radi tokom razdvajanja nucleos-a desavase i razbacj visak neutrona sto tera sve druge nucleos koji su u blizini da i oni pocnu da pustaju, to se zove nuklearna lancena reakcija.\r\nU sledecoem delu ce te nauciti da ako posaljemo neutron velikom brzinu nucleus ima sanse da eksplodira zbog njegove i sve nucleose u blizini da razdeli pod velikom brzinom i isto vremeno da izbaci veoma veliku termicku energiju.\n\rAli mi ne zelimo da napravimo nuklearku zato morati biti pazljivi sa brzinum neutrona.\r\nSrecno!",
    "I pod zadnjem delu lekcije za NUKLEARMU FIZIJU\r\nNe smemo zaboraviti druge elektrone koje kruze okolo atoma.",
    "Marko Kazimirovic, II-1 , 2022, za cas fizike oko nuklearne fizije.\r\nSve od 2D pogona do samoih pokreta ove visualne prezentacije/video igrice napravljeno od strane Marka Kazmirovica."
]

const narratorText =narratorTexts[document.getElementById("narLook").innerText.charAt(0)]; 
const narratorG = document.getElementById("Narrator");

narratorG.innerHTML = "";

var i = 0;

function myLoop() {        
    setTimeout(function() {
      narratorG.innerHTML = narratorG.innerHTML + narratorText.charAt(i);
      i++;
      if (i < narratorText.length) {
        myLoop();
      }
    }, 5)  
  }
  
myLoop();   

