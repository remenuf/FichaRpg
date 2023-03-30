$(function(){
    console.log('Rodando ficha ver 1.5');

    if($(".fichaData").length) sheetBuilder(); 
})

function buttons(){
    $('.f_menu button').click(function(){
        let target = $(this).attr('name');
        let parent = $(this).parent().attr('class');
        parent = parent.split(' ')[1];
        
        if(!$(this).hasClass('active')){
            $('.' + parent + ' .active').removeClass('active');
            $(this).addClass('active');
            $('#' + target).addClass('active');
        }
        else  if(parent !== 'first') $('.' + parent + ' .active').removeClass('active');
    })
}

function sheetBuilder(){
    let imagemTopo = $('imagemTopo').text();
    let imagemPequena = $('imagemPequena').text();
    let imagemFinal = $('imagemFinal').text();

    let jogador = $('jogador').text();
    let nome = $('nome').text();
    let idade = $('idade').text();
    let peso = $('peso').text();
    let altura = $('altura').text();
    let especie = $('especie').text();
    let nacionalidade = $('nacionalidade').text();
    let local = $('local').text();
    let vilania = $('vilania').text();
    let heroismo = $('heroismo').text();
    let grupo = $('grupo').text();
    let recompensa = $('recompensa').text();

    let poder = Number($('poder').text());
    let corporal = Number($('corporal').text());
    let acrobatico = Number($('acrobatico').text());
    let social = Number($('social').text());
    let intelectual = Number($('intelectual').text());
    let bonusHP = Number($('bonusHP').text());
    let bonusCarga = Number($('bonusCarga').text());

    let edc = $('edc').html();
    let habilidades = $('habilidades').html();

    let vantagens = $('vantagens').html();
    let desvantagens = $('desvantagens').html();
    let pericias = $('pericias').html();
    let oficio = $('oficio').html();

    let inventario = $('inventario').html();

    let tecnicas = $('tecnicas').html();

    let aparencia = $('aparencia').html();
    let historia = $('historia').html();
    let personalidade = $('personalidade').html();
    let notas = $('notas').html();

    let attCorp;
    let attAcro;
    let attSoc;
    let attInt;
    let attHp;
    if(poder !== NaN){
        attCorp = (corporal / 100) * poder;
        attAcro = (acrobatico / 100) * poder;
        attSoc = (social / 100) * poder;
        attInt = (intelectual / 100) * poder;
        bonusHP +=  Math.floor(attCorp / 2000) * 5;
        attHp = ((150 + bonusHP) / 100) * poder;
    }

    let groupColor;
    switch(grupo.toLowerCase()){
        case 'pirata':
            groupColor = '#df5252';
            break;
        case 'marinha':
            groupColor = '#52a2df';
            break;
        case 'governo':
            groupColor = '#9e9e9e';
            break;
        case 'revolucionário':
            groupColor = '#df5252';
            break;
        case 'caçador de recompensas':
            groupColor = '#52df75';
            break;
        case 'máfia':
            groupColor = '#ae52df';
            break;
        default:
            groupColor = '#997171';         
    }

    $('.fichaData').before(`
        <div class="ficha_personagem" style="--group: ${groupColor}; --opacity: ${groupColor}70">
        <div class="f_main_container">
            <div class="f_banner" style="background-image: url(${imagemTopo});">
                <div class="info">
                    <div class="border"></div>
                    <div class="f_avatar" style="background-image: url(${imagemPequena});"></div>
                    <p>${nome} <span>${jogador}</span></p>
                </div>
            </div>
            <div class="f_bio">
                <div class="f_data"><span>Nome: </span>${nome}</div>
                <div class="f_data"><span>Idade: </span>${idade}</div>
                <div class="f_data"><span>Peso: </span>${peso}</div>
                <div class="f_data"><span>Altura: </span>${altura}</div>
                <div class="f_data"><span>Raça: </span>${especie}</div>
                <div class="f_data"><span>Nacionalidade: </span>${nacionalidade}</div>
                <div class="f_data"><span>Localização: </span>${local}</div>
                <div class="f_data"><span>Vilania: </span>${vilania}</div>
                <div class="f_data"><span>Heroísmo: </span>${heroismo}</div>
                <div class="f_data"><span>Grupo: </span>${grupo}</div>
                <div class="f_data"><span>Recompensa: </span>${recompensa}</div>
            </div>
            <div class="f_menu first">
                <button type="button" name="atributos" class="active">Atributos</button>
                <button type="button" name="edc">Edc</button>
                <button type="button" name="habilidades">Habilidades</button>
            </div>
            <div class="f_first_container first">
                <div class="f_container active" id="atributos">
                    <div class="f_data"><span>Poder Total: </span>${poder}</div>
                    <div class="f_data"><span>HP: </span>${attHp}</div>
                    <div class="f_data"><span>Stamina: </span>1000</div>
                    <div class="f_data corp"><span>Corporal: </span>${attCorp} (${attCorp * ((10/100) + bonusCarga/100)} Kg)</div>
                    <div class="f_data dex"><span>Acrobático: </span>${attAcro}</div>
                    <div class="f_data social"><span>Social: </span>${attSoc}</div>
                    <div class="f_data int"><span>Intelectual: </span>${attInt}</div>
                    <div class="chart"><span>${corporal}%</span><span>${acrobatico}%</span><span>${social}%</span><span>${intelectual}%</span></div>
                </div>
                <div class="f_container" id="edc">${edc}</div>
                <div class="f_container" id="habilidades">${habilidades}</div>
            </div>
            <div class="f_menu second">
                <button type="button" name="vant">Vantagens e Desvantagens</button>
                <button type="button" name="pericias">Perícias</button>
                <button type="button" name="oficio">Ofício</button>
            </div>
            <div class="f_first_container second">
                <div class="f_container" id="vant">
                    <h2>Vantagens</h2>${vantagens}
                    <h2>Desvantagens</h2>${desvantagens}</div>
                <div class="f_container" id="pericias">${pericias}</div>
                <div class="f_container" id="oficio">${oficio}</div>
            </div>
            <div class="f_menu third">
                <button type="button" name="bag">Inventário</button>
                <button type="button" name="tec">Técnicas</button>
            </div>
            <div class="f_first_container third">
                <div class="f_container" id="bag">${inventario}</div>
                <div class="f_container" id="tec">${tecnicas}</div>
            </div>
            <div class="photoplayer" style="background-image: url(${imagemFinal});"></div>
            <div class="f_menu fourth">
                <button type="button" name="aparencia">Aparência</button>
                <button type="button" name="personalidade">Personalidade</button>
                <button type="button" name="historia">História</button>
            </div>
            <div class="f_first_container fourth">
                <div class="f_container" id="aparencia">${aparencia}</div>
                <div class="f_container" id="personalidade">${personalidade}</div>
                <div class="f_container" id="historia">${historia}</div>
            </div>
            <div class="f_menu fifth">
                <button type="button" name="notas">Anotações</button>
            </div>
            <div class="f_first_container fifth">
                <div class="f_container" id="notas">${notas}</div>
            </div>
        </div>
    </div>
    `)

    $('.fichaData').remove();
    cssBuilder(corporal, acrobatico, social, intelectual);
    buttons();
}

/* LEMBRAR DE TROCAR AS VARIÁVEIS NO CSS SEMPRE QUE DAR CONTROL V AQUI */
function cssBuilder(corporal, acrobatico, social, intelectual){
    $('head').append(`
        <style>
        @import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700&display=swap");
        :root {
          --corp: #f16868;
          --acro: #a5fa70;
          --social: #e07aff;
          --int: #7cbcf0;
          --corpP: ${corporal};
          --acroP: ${acrobatico};
          --socialP: ${social};
          --intP: ${intelectual};
        }
        
        .ficha_personagem {
          box-sizing: border-box;
          width: 100%;
        }
        .ficha_personagem * {
          box-sizing: border-box;
          font-family: "Roboto", sans-serif;
          font-size: 16px;
        }
        .ficha_personagem button, .ficha_personagem p, .ficha_personagem span {
          all: initial;
        }
        
        .f_main_container {
          margin: auto;
          width: 600px;
          padding: 0px 20px 20px 20px;
          min-height: 700px;
          background-color: #fafafa;
          border-radius: 8px;
          border-left: solid 15px var(--group);
          overflow: hidden;
          display: flex;
          flex-flow: column nowrap;
          row-gap: 20px;
        }
        
        .f_banner {
          display: flex;
          width: 600px;
          height: 220px;
          position: relative;
          left: -20px;
          background-size: cover;
          background-position: center top;
        }
        .f_banner::before {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          z-index: 5;
          content: "";
          width: 100%;
          height: 100%;
          background-color: #000;
          opacity: 30%;
        }
        .f_banner .info {
          z-index: 10;
          margin: auto;
          display: inline-flex;
          flex-flow: row nowrap;
          -moz-column-gap: 20px;
               column-gap: 20px;
          justify-content: space-around;
          align-items: center;
          padding: 30px;
          position: relative;
        }
        .f_banner .info .border {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          border: solid 5px var(--group);
          -webkit-clip-path: polygon(0 0, 10% 0, 10% 10%, 90% 10%, 90% 0, 100% 0, 100% 25%, 90% 25%, 90% 75%, 100% 75%, 100% 100%, 90% 100%, 90% 90%, 10% 90%, 10% 100%, 0 100%, 0 75%, 10% 75%, 10% 25%, 0 25%);
                  clip-path: polygon(0 0, 10% 0, 10% 10%, 90% 10%, 90% 0, 100% 0, 100% 25%, 90% 25%, 90% 75%, 100% 75%, 100% 100%, 90% 100%, 90% 90%, 10% 90%, 10% 100%, 0 100%, 0 75%, 10% 75%, 10% 25%, 0 25%);
          opacity: 50%;
        }
        .f_banner .info .f_avatar {
          z-index: 12;
          box-sizing: content-box;
          background-size: cover;
          background-position: center top;
          width: 90px;
          height: 90px;
          position: relative;
          border-radius: 100%;
          overflow: visible;
        }
        .f_banner .info .f_avatar::before {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          border: solid 5px var(--opacity);
          border-radius: 100%;
          position: absolute;
          top: -5px;
          left: -5px;
        }
        .f_banner .info p {
          text-align: center;
          z-index: 12;
          color: white;
          font-size: 32px;
          font-family: "Roboto Slab", serif;
        }
        .f_banner .info p span {
          text-align: center;
          color: white;
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          display: block;
        }
        
        .f_bio {
          display: flex;
          flex-flow: row wrap;
          gap: 10px;
        }
        
        .f_data {
          overflow: hidden;
          flex: 1 1 auto;
          background-color: #f2f2f2;
          border: solid 0.5px var(--opacity);
          height: 40px;
          border-radius: 3px;
          padding: 10px;
          display: flex;
          flex-flow: row nowrap;
          -moz-column-gap: 10px;
               column-gap: 10px;
          align-items: center;
        }
        .f_data span {
          font-weight: 800;
          font-family: "Roboto", sans-serif;
          font-size: 16px;
        }
        
        .f_menu {
          display: flex;
          flex-flow: row;
          border-top-right-radius: 5px;
          border-top-left-radius: 5px;
          overflow: hidden;
          margin-bottom: -20px;
        }
        .f_menu button {
          flex: 1 1 auto;
          background-color: #d6d6d6;
          text-align: center;
          font-family: "Roboto Slab", serif;
          font-weight: bold;
          font-size: 18px;
          height: 50px;
          opacity: 70%;
        }
        .f_menu button.active {
          background-color: var(--group);
          color: white;
          opacity: 100%;
        }
        .f_menu button:hover {
          cursor: pointer;
          opacity: 100%;
        }
        
        .f_first_container {
          width: 100%;
          background-color: #f2f2f2;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          overflow: hidden;
          padding: 10px;
        }
        
        .f_container {
          flex-flow: column nowrap;
          gap: 10px;
          width: 100%;
          display: none;
          white-space: pre-line;
          text-align: justify;
        }
        .f_container.active {
          display: flex;
        }
        .f_container .f_data {
          background-color: #fafafa;
          border: none;
        }
        .f_container .f_data.corp, .f_container .f_data.dex, .f_container .f_data.social, .f_container .f_data.int {
          width: calc(50% - 10px);
          border-bottom: 5px solid #000;
        }
        .f_container .f_data.corp {
          border-bottom-color: var(--corp);
        }
        .f_container .f_data.dex {
          border-bottom-color: var(--acro);
        }
        .f_container .f_data.social {
          border-bottom-color: var(--social);
        }
        .f_container .f_data.int {
          border-bottom-color: var(--int);
        }
        .f_container h2 {
          font-size: 20px;
          font-family: "Roboto Slab", serif;
          font-weight: 800;
          color: var(--group);
          text-align: center;
          margin: auto;
        }
        .f_container summary {
          cursor: pointer;
        }
        
        .chart {
          display: flex;
          flex-flow: row nowrap;
          overflow: hidden;
          border-radius: 5px;
          width: 100%;
          height: 30px;
        }
        .chart span {
          font-weight: 800;
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          text-align: center;
          flex: 1 1 auto;
          padding: 5px 0px 5px 0px;
          background-color: #fafafa;
        }
        .chart span:nth-child(1) {
          background-color: var(--corp);
          flex: var(--corpP) 1 auto;
        }
        .chart span:nth-child(2) {
          background-color: var(--acro);
          flex: var(--acroP) 1 auto;
        }
        .chart span:nth-child(3) {
          background-color: var(--social);
          flex: var(--socialP) 1 auto;
        }
        .chart span:nth-child(4) {
          background-color: var(--int);
          flex: var(--intP) 1 auto;
        }
        
        #atributos {
          flex-flow: row wrap;
        }
        
        .photoplayer {
          background-position: center;
          background-size: cover;
          width: 100%;
          height: 350px;
        }
        </style>
    `);
}
