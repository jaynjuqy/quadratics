
function fxn() {
    console.log("Function fxn() is called!");
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);

    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
        document.getElementById("demo").innerHTML = "Invalid Inputs";
    } else {
        let nb = b * -1;
        let discriminant = b * b - 4 * a * c;

        console.log("Discriminant:", discriminant);

        if (discriminant < 0) {
            window.alert("No real solutions (Undefined)!");
        } else {
            let sqRoot = Math.sqrt(discriminant);
            let x1 = (nb + sqRoot) / (2 * a);  
            let x2 = (nb - sqRoot) / (2 * a);

            console.log("x1:", x1);
            console.log("x2:", x2);

            let x1x2 = x1 + "," + x2;
            document.getElementById("x1x2").innerHTML = `The Values of X are: ${x1x2}`;
        }
    }
}

function plot(){
    console.log("Function plot() called");
    var cont=document.getElementsByClassName("container")[0];
    var cStyle=window.getComputedStyle(cont);
    if(cStyle.display==="none"){
        cont.style.display="block";
    }else{
        cont.style.display="none";
    }
}

function submit(){
    console.log("Function submit() called");

    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);

    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);

    let start=document.getElementById("strt").value;
    let end=document.getElementById("end").value;
    let rng;
    if(start<0){
        let strt=start*-1;
        rng= strt+end;
    }else{
        rng=end-start;
    }

    const Xarr=[];
    const Yarr=[];
    let x=start;
    let y;
    let i=0;

    for(i; i<rng; i++){
        y=(a*x*x)+(b*x)+c;
        Yarr.push(y);
        Xarr.push(x);
        if (x<=end){
            x++;
        }else{
            break;
        }
    }
    new Chart("mychart", {
        type: "line",
        data: {
            labels: Xarr,
            datasets: [{
                backgroundColor: "rgba(0, 0, 255, 0.1)",
                borderColor: "rgba(0, 0, 255, 1.0)",    
                data: Yarr
            }]
        },
        options: {}
    });
    
    console.log("xarr: "+Xarr);
    console.log("yarr: "+Yarr);
}