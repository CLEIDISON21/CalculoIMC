function verificar() {
    var Peso = window.document.getElementById('txtpeso');
    var Altura = window.document.getElementById('txtalt');
    var res = window.document.getElementById('res');

    var peso = Number(Peso.value);
    var altura = Number(Altura.value);
    
    // Se a altura foi inserida em centímetros, converta para metros
    if (altura > 3) { // Supondo que a altura em metros seria acima de 3m
        altura = altura / 100;  // Convertendo para metros
    }

    // Calcular o IMC
    var imc = peso / (altura * altura);
    var grau = '';

    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    // Classificação do IMC
    if (imc < 18.5) {
        grau = 'abaixo do peso';
        img.setAttribute('src', 'abaixo do normal.png');
    } else if (imc >= 18.5 && imc <= 24.9) {
        grau = 'Peso ideal';
        img.setAttribute('src', 'normal.png');
    } else if (imc >= 25 && imc <= 29.9) {  // Corrigido de 24,9 para 25
        grau = 'Sobrepeso';     
        img.setAttribute('src', 'sobrepeso.png');
    } else if (imc >= 30 && imc <= 34.9) { // Corrigido de 29,9 para 30
        grau = 'Obesidade';
        img.setAttribute('src', 'obesidade grau 1.png');
    } else if (imc >= 35 && imc <= 39.9) { // Corrigido de 34,9 para 35
        grau = 'Obesidade severa';
        img.setAttribute('src', 'obesidade grau 2.png');
    } else {
        grau = 'Obesidade mórbida';
        img.setAttribute('src', 'obesidade grau 3.png');
    }

    // Exibir o resultado
    res.style.textAlign = 'center';
    res.innerHTML = `Você está com o IMC de ${imc.toFixed(1)} ${grau} `;	
    res.appendChild(img);
}
