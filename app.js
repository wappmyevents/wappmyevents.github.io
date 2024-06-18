function jsProcSumar(a = 0, b = 0) {

    return a + b;
}

function jsProcSaludo(texto) {
    window.alert(texto);
}

//funcion para llamar al funcion de Dart
function callFt_ftProcSaludo(){
    if(window.ftProcSaludo){
        window.ftProcSaludo("Saludo llamado desde JS ");
    }
}

function callFt_ftProcSaludoMsg(msg){
    if(window.ftProcSaludo){
        window.ftProcSaludo(msg);
    }
}

function callFt_ftProcPonTipoOpWAppMyEventsExtra(sTipOpc){
    if(window.callFt_ftProcPonTipoOpWAppMyEventsExtra){
        window.callFt_ftProcPonTipoOpWAppMyEventsExtra(sTipOpc);
    }
}

function callFt_ftProcPonImgSel(imgDatsBytes){
    if(window.callFt_ftProcPonImgSel){
        window.callFt_ftProcPonImgSel(imgDatsBytes);
    }
}


