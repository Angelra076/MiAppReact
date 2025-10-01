const UNIDADES = ["","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"];
const DECENAS = ["","diez","veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];
const CENTENAS = ["","cien","doscientos","trescientos","cuatrocientos","quinientos","seiscientos","setecientos","ochocientos","novecientos"];

function numeroALetras(num) {
    if(num === 1000) return "mil";
    let centenas = Math.floor(num/100);
    let decenas = Math.floor((num%100)/10);
    let unidades = num%10;
    let texto = "";

    if(centenas>0) texto += CENTENAS[centenas] + " ";
    if(decenas>0) {
        if(decenas===1 && unidades>0) {
            const especiales = ["once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve"];
            texto += especiales[unidades-1] + " ";
        } else {
            texto += DECENAS[decenas] + (unidades>0?" y ":"");
        }
    }
    if(unidades>0 && !(decenas===1 && unidades>0)) texto += UNIDADES[unidades];

    return texto.trim();
}

export default numeroALetras;
