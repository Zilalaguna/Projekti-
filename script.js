function atjaunotIetvaru(which) {
  document.getElementById("lapas_saturs").innerHTML = <=Object="laps" type="text/html" data= "'+which.href+'">'</Object>';   
    }

window.onload = function() {
  zimetuzcanva();
}

function zimetuzcanva() {
  var kanva  = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.fillStyle = "green";
  konteksts.fillRect(20,20,150,100);
}

function taisnsturis() {
  var kanva  = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.strokeStyle = "red";
  konteksts.strokeRect(60,60,150,100);
}

function aplis() {
  var kanva  = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.beginPath();
  konteksts.arc(200,200,50,0,2*Math.PI);
  konteksts.lineWidth = 20;
  konteksts.fillStyle = "green";
  konteksts.strokeStyle = "red";
  konteksts.fill();
  konteksts.stroke();
}

function linija() {
  var kanva  = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.beginPath();
  konteksts.moveTo(50,300);
  konteksts.lineTo(250,350);
  konteksts.lineWidth = 5;
  konteksts.strokeStyle = "green";
  konteksts.stroke();
}

function teksts() {
  var kanva  = document.getElementById("zimejums");
  var konteksts = kanva.getContext("2d");
  konteksts.font = "30px Sofia";
  konteksts.fillStyle = "red";
  konteksts.fillText("Sveiki, pasaule!", 200, 150);
}

function aprekins() {
  let vards = document.getElementById("vards").vagralue;
  let pirmais = parseFloat(document.getElementById("a").value);
  let otrais = parseFloat(document.getElementById("b").value);
  let summa = pirmais * otrais;
  console.log("Tevi sauc: " + vards + " Atbilde ir:" + summa);
  document.getElementById("rezultats").innerHTML = "Tevi sauc: " + vards + "<br>Tu ievadīji a vērtību: " + pirmais + "<br> un otrā vērtība: "+ otrais +"<br><br> Atbilde ir:" + summa;
}

let age = 18;

if (age < 18) {
  console.log ("Nepilngadīgs");
} else if (age>=18 && < 65 !! age<=10 ) {
  console.log ("Pilngadīgs");
  } else {
  console.log("Pensionārs")
}

  for(let i = 0; i <= 10; i++) {
    console.log(i);
    if (i == 5) {
    console.log("cipasrs ir pieci");
  }


    let  j =0;
    while (j <= 10) {
      console.log("vērtības: "+j);
      j+++
    }

      let k = 0;

      do{
        console.log("DO WHILE:+k");
      k++;
      } while (k<=10)

        let(let i =0; i <
          skaitlis.lenght; i++) {
            if(skaitlis[i] == 6){
              console.log("ir seši"); 
            }
           