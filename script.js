function button_percentage_style(boton){
    boton.style.backgroundColor ="#26C0AB";
    boton.style.color="#00494D";
}

function button_percentage_style_normal_color(boton){
    boton.style.backgroundColor ="hsl(183, 100%, 15%)";
    boton.style.color="hsl(0, 0%, 100%)";
}

function button_percentage_style_normal(){
    let boton_005 = document.getElementById("button_percentage_cinco");
    let boton_01 = document.getElementById("button_percentage_diez");
    let boton_015 = document.getElementById("button_percentage_quince");
    let boton_025 = document.getElementById("button_percentage_veintiCinco");
    let boton_05 = document.getElementById("button_percentage_cincuenta");
    button_percentage_style_normal_color(boton_005);
    button_percentage_style_normal_color(boton_01);
    button_percentage_style_normal_color(boton_015);
    button_percentage_style_normal_color(boton_025);
    button_percentage_style_normal_color(boton_05);
}

function button_reset(){
    let button_reset = document.getElementById("button_reset");
    let bill = document.getElementById("inputBill");
    let people = document.getElementById("inputPeople");
    let tip_amount = document.getElementById("tip--amount");
    let total = document.getElementById("total");
    let input_custom = document.getElementById("input_custom")
    let mensaje_bill = document.getElementById("mensaje_error_bill_zero");
    let mensaje_people = document.getElementById("mensaje_error_people_zero")
    mensaje_bill.style.visibility="hidden";
    mensaje_people.style.visibility="hidden";
    people.style.borderColor="hsl(172, 67%, 45%)";
    bill.style.borderColor="hsl(172, 67%, 45%)";
    button_percentage_style_normal()
    bill.value="";
    people.value="";
    input_custom.value="";
    tip_amount.innerText="$0.00";
    total.innerText ="$0.00";
    button_reset.style.backgroundColor="hsl(184, 46%, 29%)";
    button_reset.style.color ="hsl(186, 14%, 43%)";
}

function activar_reset(){
    let button_reset = document.getElementById("button_reset");
    button_reset.style.backgroundColor ="hsl(172, 67%, 45%)";
    button_reset.style.color="hsl(183, 100%, 15%)";
}

function actualizar_bill(){
    let input_bill = document.getElementById("inputBill");
    let mensaje_bill = document.getElementById("mensaje_error_bill_zero");
    estado.bill = input_bill.value;
    validar_cero(estado.bill,input_bill,mensaje_bill)
    activar_reset()
    actualizar()
}


function input_people(){
    let input_people = document.getElementById("inputPeople");
    let mensaje_people_zero = document.getElementById("mensaje_error_people_zero")
    estado.people = input_people.value;
    validar_cero(estado.people,input_people,mensaje_people_zero);
    actualizar()
    activar_reset()
}

function button_percentage(porcentaje){
    estado.porcentaje = porcentaje;
    actualizar()
}

function custom(){
    let input_custom = document.getElementById("input_custom");
    estado.porcentaje = input_custom.value / 100;
    actualizar()
}

let estado = {}

function validar_cero(valor,elemento,mensaje){
    if (parseInt(valor) === 0){
        elemento.style.border="1px solid red";
        elemento.style.borderRadius="5%";
        mensaje.style.visibility="visible";
        console.log("entro")
    }else{
        mensaje.style.visibility="hidden";
    }
}

function actualizar(){
    let tip_amount = document.getElementById("tip--amount");
    let total = document.getElementById("total");
    let resultado_tip_amount = 0.0;
    let resultado_total= 0.0;

    if (estado.bill && estado.people && estado.porcentaje) {
        resultado_tip_amount = (estado.bill * estado.porcentaje) / estado.people
        tip_amount .innerText = "$" + resultado_tip_amount.toFixed(2);

        resultado_total= (estado.bill / estado.people) + resultado_tip_amount;
        total.innerText="$" + resultado_total.toFixed(2);
    } else if (estado.bill && estado.porcentaje) {
        tip_amount .innerText = "$0.00";
        total.innerText="$0.00";
    }

}
