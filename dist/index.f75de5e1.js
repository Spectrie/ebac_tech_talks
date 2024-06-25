AOS.init();
const dataDoEvento = new Date("Jun 25, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEVENTO = timeStampDoEvento - timeStampAtual;
    const diasAteOevento = Math.floor(distanciaAteOEVENTO / 86400000);
    const horasAteOEvento = Math.floor(distanciaAteOEVENTO % 1000 * 86400 / 3600000);
    const minutosAteOEvento = Math.floor(distanciaAteOEVENTO % 3600000 / 60000);
    const SegundosAteOEvento = Math.floor(distanciaAteOEVENTO % 60000 / 1000);
    document.getElementById("contador").innerHTML = `${diasAteOevento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${SegundosAteOEvento}s`;
    if (distanciaAteOEVENTO < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "Evento expirado";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
