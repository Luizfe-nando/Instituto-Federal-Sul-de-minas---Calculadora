function calculadora(){
    var valor1 = document.getElementById("valor1").value;
    var operações = document.getElementById("operações").value;
    var valor2 = document.getElementById("valor2").value;
    
    if(operações == "adição"){        
        document.getElementById("resultado").value = parseFloat(valor1) + parseFloat(valor2);

    }else if(operações == "subtração"){
        let calculo = valor1 - valor2;
        document.getElementById("resultado").value= parseFloat(valor1) - parseFloat(valor2);

    }else if(operações == "multiplicação"){
        let calculo = valor1 * valor2;
        document.getElementById("resultado").value= parseFloat(valor1) * parseFloat(valor2);

    }else if(operações == "divisão"){
        let calculo = valor1 / valor2;
        document.getElementById("resultado").value= parseFloat(valor1) / parseFloat(valor2);

    }else {
       alert('Você precisa selecionar uma Operação'); 
    }

}

function calculadora1(){
    var valor1 = document.getElementById("valor1").value;
    var operações = document.getElementById("operações").value;
    var valor2 = document.getElementById("valor2").value;

    
    switch(operações){

        case "adição":
            calculo = valor1 + valor2;
            document.getElementById("resultado").value= parseFloat(valor1) + parseFloat(valor2);
            break 

        case "subtração":
            calculo = valor1 - valor2;
            document.getElementById("resultado").value= parseFloat(valor1) - parseFloat(valor2);
            break  

        case "multiplicação":
            calculo = valor1 * valor2;
            document.getElementById("resultado").value= parseFloat(valor1) * parseFloat(valor2); 
            break 
        case "divisão":
            calculo = valor1 / valor2;
            document.getElementById("resultado").value= parseFloat(valor1) / parseFloat(valor2); 
            break  
        
        default:

         alert('Você precisa selecionar uma Operação');
    }
}