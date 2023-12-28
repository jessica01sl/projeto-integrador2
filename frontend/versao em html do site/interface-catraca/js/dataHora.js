var dataHoraElement = document.getElementById("dataHora");

function atualizarDataHora() {
    var agora = new Date();

    var dia = agora.getDate();
    var mes = agora.getMonth() + 1; 
    var ano = agora.getFullYear();

    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();

    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    dataHoraElement.innerHTML = `${dia}/${mes}/${ano} ${horas}:${minutos}`;
}

atualizarDataHora();
setInterval(atualizarDataHora, 1000);
