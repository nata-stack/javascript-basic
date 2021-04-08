let cifra = "";
let acumulado = 0;
let p_operacion = true;
let sumar = false;
let restar = false;
let multiplicar = false;
let dividir = false;


function escribeNumeros(x){
    document.getElementById("display").value = cifra + x;
    cifra = document.getElementById("display").value;
}

function reset(){
    cifra = "";
    acumulado = 0;
    p_operacion = true;
    sumar = false;
    restar = false;
    document.getElementById("display").value = 0;
}

function suma(){
    if(restar){
        acumulado = acumulado - parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }else{
        acumulado = acumulado + parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }
    cifra = "";
    sumar = true;
    restar = false;
    multiplicar = false;
    dividir = false;
    p_operacion = false;
}

function resta(){
    if(p_operacion == false){
        if(sumar){
            acumulado = acumulado + parseInt(cifra);
            document.getElementById("display").value = acumulado; 
        }else{
            acumulado = acumulado - parseInt(cifra);
            document.getElementById("display").value = acumulado; 
        }
    }else{
        acumulado = parseInt(cifra);
        p_operacion = false;
    }
    cifra = "";
    sumar = false;
    restar = true;
    dividir = false;
    multiplicar = false;
}

function multiplica(){
    if(p_operacion == false){
        acumulado = acumulado * parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }else{
        acumulado = parseInt(cifra);
        p_operacion = false;
    }
    cifra = "";
    sumar = false;
    restar = false;
    dividir = false;
    multiplicar = true;
}

function divide(){
    if(p_operacion == false){
        acumulado = acumulado / parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }else{
        acumulado = parseInt(cifra);
        p_operacion = false;
    }
    cifra = "";
    sumar = false;
    restar = false;
    dividir = true;
    multiplicar = false;
}

function resultado(){
    if(sumar){
        document.getElementById("display").value = acumulado + parseInt(cifra);
    }else if(restar){
        document.getElementById("display").value = acumulado - parseInt(cifra);
    }else if(multiplicar){
        document.getElementById("display").value = acumulado * parseInt(cifra);
    }else if(dividir){
        document.getElementById("display").value = acumulado / parseInt(cifra);
    }
    acumulado = parseInt(document.getElementById("display").value);
    cifra = 0;
}
