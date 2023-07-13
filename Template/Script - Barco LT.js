$(function(){
    console.log('Navegando ficha B ver 1.1');

    if($(".barcoData").length) boatBuilder();
});

function boatButtons(){
    $('.b-menu button').click(function(){
        let target = $(this).attr('name');
        
        
        if(!$(this).hasClass('active')){
            $('.ficha-barco .active').removeClass('active');
            $(this).addClass('active');
            $('#' + target).addClass('active');
        }
        else $('.ficha-barco .active').removeClass('active');
    });
}

function boatBuilder(){
    let nome = $('nome').text();
    let dono = $('dono').text();
    let link = $('ficha').text();
    let armazem = $('armazem').html();
    let detalhes = $('detalhes').html();
    let notas = $('notas').html();
    let imagem = $('imagem').text();
    
    let hp = Number($('hp').text()).toLocaleString();
    let velocidade = Number($('velocidade').text()).toLocaleString();
    let armadura = Number($('armadura').text()).toLocaleString();
    let espaço = Number($('espaço').text()).toLocaleString();

    let valor = ((hp * 100) + (armadura * 100) + (velocidade*100000) + (espaço*1000)).toLocaleString();

    $('.barcoData').before(
        `
        <div class="ficha-barco">
            <div class="b-banner"></div>
            <div class="b-bio">
                <div class="b-data"><span>Nome: </span>${nome}</div>
                <div class="b-data"><span>Proprietário: </span><a href="${link}" target="_blank">${dono}</a></div>
                <div class="b-data"><span>Valor: </span>${valor} Berries</div>
            </div>
            <div class="b-title">Atributos</div>
            <div class="b-container b-atributos">
                <div class="b-data"><span>HP: </span>${hp}</div>
                <div class="b-data"><span>Velocidade: </span>${velocidade} Km/h</div>
                <div class="b-data"><span>Armadura: </span>${armadura}</div>
                <div class="b-data"><span>Espaço Interno: </span>${espaço} m³</div>
            </div>
            <div class="b-menu">
                <button type="button" name="armazem">Armazém</button>
                <button type="button" name="desc">Descrição</button>
                <button type="button" name="notas">Anotações</button>
            </div>
            <div class="b-container">
                <div class="b-aux-container" id="armazem">${armazem}</div>
                <div class="b-aux-container" id="desc">${detalhes}</div>
                <div class="b-aux-container" id="notas">${notas}</div>
            </div>
        </div>
        `
    );

    $(".barcoData").remove();
    cssBoatBuilder(imagem);
    boatButtons();
}

function cssBoatBuilder(imagem){
    $('head').append(`
        <style>
            @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700&display=swap");
            .ficha-barco {
            --barco: url(${imagem});
            --b_cor: #403576;
            box-sizing: border-box;
            margin: auto;
            width: 600px;
            padding: 0px 20px 20px 20px;
            min-height: 700px;
            background-color: #141426;
            border-radius: 8px;
            border-left: solid 15px var(--b_cor);
            overflow: hidden;
            display: flex;
            flex-flow: column nowrap;
            row-gap: 20px;
            color: #fff;
            }
            .ficha-barco * {
            box-sizing: border-box;
            font-family: "Roboto", sans-serif;
            font-size: 16px;
            }
            .ficha-barco button, .ficha-barco p, .ficha-barco span {
            all: initial;
            box-sizing: border-box;
            }
            .ficha-barco .b-banner {
            width: 585px;
            height: 300px;
            background-size: cover;
            background-position: center;
            background-image: var(--barco);
            position: relative;
            right: 20px;
            }
            .ficha-barco .b-bio {
            display: flex;
            flex-flow: row wrap;
            gap: 10px;
            }
            .ficha-barco .b-data {
            overflow: hidden;
            flex: 1 1 auto;
            background-color: #0e0e18;
            border: solid 0.5px rgba(65, 54, 120, 0.5);
            height: 40px;
            border-radius: 3px;
            padding: 10px;
            display: flex;
            flex-flow: row nowrap;
            -moz-column-gap: 10px;
                column-gap: 10px;
            align-items: center;
            }
            .ficha-barco .b-data span {
            font-weight: 800;
            font-family: "Roboto", sans-serif;
            font-size: 16px;
            color: #fff;
            }
            .ficha-barco .b-data a {
            color: #dbd3ff;
            text-decoration: none;
            }
            .ficha-barco .b-title {
            width: 100%;
            padding: 13px;
            font-family: "Roboto Slab", serif;
            font-weight: bold;
            font-size: 18px;
            text-align: center;
            color: #FFF;
            background-color: var(--b_cor);
            border-radius: 5px 5px 0px 0px;
            margin-bottom: -20px;
            }
            .ficha-barco .b-container {
            width: 100%;
            background-color: #0e0e18;
            border-radius: 0px 0px 5px 5px;
            overflow: hidden;
            padding: 10px;
            border: solid 0.5px rgba(65, 54, 120, 0.5);
            border-top: none;
            }
            .ficha-barco .b-atributos {
            display: flex;
            flex-flow: row wrap;
            gap: 10px;
            }
            .ficha-barco .b-atributos .b-data {
            width: calc(50% - 10px);
            background-color: #141426;
            border: none;
            border-bottom: 5px solid #000;
            }
            .ficha-barco .b-atributos .b-data:nth-child(1) {
            border-color: #f16868;
            }
            .ficha-barco .b-atributos .b-data:nth-child(2) {
            border-color: #a5fa70;
            }
            .ficha-barco .b-atributos .b-data:nth-child(3) {
            border-color: #7cbcf0;
            }
            .ficha-barco .b-atributos .b-data:nth-child(4) {
            border-color: #e07aff;
            }
            .ficha-barco .b-menu {
            display: flex;
            flex-flow: row;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
            overflow: hidden;
            margin-bottom: -20px;
            }
            .ficha-barco .b-menu button {
            flex: 1 1 auto;
            background-color: #2b273d;
            color: #fff;
            text-align: center;
            font-family: "Roboto Slab", serif;
            font-weight: bold;
            font-size: 18px;
            height: 50px;
            opacity: 70%;
            }
            .ficha-barco .b-menu button.active {
            background-color: var(--b_cor);
            opacity: 100%;
            }
            .ficha-barco .b-menu button:hover {
            cursor: pointer;
            opacity: 100%;
            }
            .ficha-barco .b-aux-container {
            display: none;
            }
            .ficha-barco .b-aux-container.active {
            display: block;
            }
        </style>
    `);
}
