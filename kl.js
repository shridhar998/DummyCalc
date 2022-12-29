function solve(){
    var x=parseInt(document.getElementById("num1").value);
    var y=parseInt(document.getElementById("num2").value);
    var op=document.getElementById("op").value;
    let z=0;
    if(op==='+'){
        z=x+y;
    }
    else if(op==='-'){
        z=x-y;
    }
    else if(op==='*'){
        z=x*y;
    }
    else{
        z=x/y;
    }
    document.getElementById('res').innerHTML=`The result is ${z}`;
}