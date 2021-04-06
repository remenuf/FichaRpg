function classGenerator (classe){
    if(classe == 'Fighter'){
        return '<img src="https://i.imgur.com/YJYjV1F.png">Warrior - Fighter';
    }
    else if(classe == 'Tank'){
        return '<img src="https://i.imgur.com/zDPu70e.png">Warrior - Tank';
    }
    else if(classe == 'Elementalist'){
        return '<img src="https://i.imgur.com/5XMYfts.png">Mage - Elementalist';
    }
    else if(classe == 'Summoner'){
        return '<img src="https://i.imgur.com/lRFVdOY.png">Mage - Summoner';
    }
    else if(classe == 'Healer'){
        return '<img src="https://i.imgur.com/DyvMUge.png">Support - Healer';
    }
    else if(classe == 'Spellbreaker'){
        return '<img src="https://i.imgur.com/oBQdh08.png">Support - Spellbreaker';
    }
    else if(classe == 'Reaper'){
        return '<img src="https://i.imgur.com/dkqhmv8.png">Assassin - Reaper';
    }
    else{
        return '<img src="https://i.imgur.com/00ho70d.png">Assassin - Ranger';
    }
}

function hpCalculator (vit , classe){
    if(classe == 'Fighter' || classe == 'Tank') return Number(vit)*30;
    else if(classe == 'Elementalist' || classe == 'Summoner') return Number(vit)*10;
    else if(classe == 'Healer' || classe == 'Spellbreaker') return Number(vit)*20;
    else return Number(vit)*15;
}

function mpCalculator (int , classe){
    if(classe == 'Fighter' || classe == 'Tank') return Number(int)*10;
    else if(classe == 'Elementalist' || classe == 'Summoner') return Number(int)*30;
    else if(classe == 'Healer' || classe == 'Spellbreaker') return Number(int)*20;
    else return Number(int)*25;
}

function rankCalculator (att){
    if(att < 50) return 'E';
    else if(att < 100) return 'D';
    else if (att < 180) return 'C';
    else if (att < 340) return 'B';
    else if (att < 840) return 'A';
    else if (att < 1050) return 'S¹';
    else return 'S²';
}

function passivaGenerator (classe){
    if(classe == 'Fighter'){
        return `<div class="skill" style="color: brown;"><img src="https://i.imgur.com/4ayKmJ0.png">- Sangue Quente
        <div class="description">Nome da Skill: Sangue Quente
Descrição: A medida que um lutador sente e se acostuma com o calor da batalha, seu verdadeiro potencial aflora em forma de um maior poder de ataque.
Condição: N/a
Bônus: Para cada post de combate consecutivo, o usuário recebe um bônus de 10% no dano total que vai se acumulando, sendo 100% o valor máximo. Ex: (Post 1: Dano + 10% do dano; Post 2: Dano + 20% do dano; …; Post 10: Dano + 100% do dano).
</div></div>`;
    }
    else if(classe == 'Tank'){
        return `<div class="skill" style="color: brown;"><img src="https://i.imgur.com/UlOibXM.png">- Blindado
        <div class="description">Nome da Skill: Blindado
Descrição: Maldito! Parece que não morre nunca.
Condição: Sempre que perder 10% do HP máximo.
Bônus: A cada 10% de HP perdido, ganhe 5% de redução de dano. Não afeta danos de DoT. A passiva corresponde ao seu HP atual e, se receber cura, poderá perder parte do bônus.
</div></div>`;
    }
    else if(classe == 'Elementalist'){
        return `<div class="skill" style="color: #ffeb3b;"><img src="https://i.imgur.com/XhFfaws.png">- Glass Cannon
        <div class="description">Nome da Skill: Glass Cannon
Descrição: Tendo uma incrível afinidade com a própria  mana, quando necessário, os Elementalistas conseguem quebrar os limites do próprio poder. Depois de executar 3 skills, a próxima skill gastará o dobro de mana, porém, este mesmo consumo será adicionado ao dano total.
Condição: Atacar após utilizar três skills; ataques em área só receberão metade do bônus.
Bônus: 100% do MP consumido é adicionado ao dano total.
</div></div>`;
    }
    else if(classe == 'Summoner'){
        return `<div class="skill" style="color: #ffeb3b;"><img src="https://i.imgur.com/ZtXabJX.png">- Pelo Rei!
        <div class="description">Nome da Skill: Pelo Rei!
Descrição: O Summoner e sua criatura conseguem se comunicar telepaticamente por sinais pequenos (vontade e emoções). Sempre que seu amo se sentir ameaçado, a invocação dará tudo de seu ser para protegê-lo.
Condição: Ser alvejado.
Bônus: Sempre que o invocador estiver sobre ataque direto, suas criaturas invocadas receberão o aumento de Um Rank em um atributo pré determinado, alterando o valor para o mínimo daquela categoria.
</div></div>`;
    }
    else if(classe == 'Healer'){
        return `<div class="skill" style="color: #3dee44;"><img src="https://i.imgur.com/aOVgLHv.png">- Escudo Divino
        <div class="description">Nome da Skill: Escudo Divino
Descrição: Sempre que cura uma criatura que não seja a si mesmo, o healer ganha para si um escudo de mana que o protege.
Condição: Curar alguém que não a si mesmo.
Bônus: Um escudo de mana que defende um único ataque, absorvendo o dano no valor equivalente à sua cura.
</div></div>`;
    }
    else if(classe == 'Spellbreaker'){
        return `<div class="skill" style="color: #3dee44;"><img src="https://i.imgur.com/ULQRNFF.png">- Zona Neutra
        <div class="description">Nome da Skill: Zona Neutra
Descrição: Ao esgotar uma parte de seu poder, o Spellbreaker libera uma aura que anula a magia ao seu redor.
Condição: Ficar abaixo de 50% de MP.
Bônus: Durante 1 post, todos os Buff's/Debuffs utilizados pelos oponente são desfeitos, além disso, nenhuma skill ou magia pode ser utilizada pela parte contrária. Isto não cancelará invocações.
</div></div>`;
    }
    else if(classe == 'Reaper'){
        return `<div class="skill" style="color: #9c27b0;"><img src="https://i.imgur.com/Cbzvtbt.png">- Traiçoeiro
        <div class="description">Nome da Skill: Traiçoeiro
Descrição: Como um mestre na execução, o Reaper sempre que se sobressai sobre o oponente tem a oportunidade de acertar um dano crítico.
Condição: Atacar o oponente desprevenido.
Bônus: +50% no dano total.
</div></div>`;
    }
    else{
        return `<div class="skill" style="color: #9c27b0;"><img src="https://i.imgur.com/tatRl86.png">- Pistoleiro Arcano
        <div class="description">Nome da Skill: Pistoleiro Arcano.
Descrição: A medida que o combate se desenrola, o Ranger consegue aos poucos reunir mana sem que isso o esgote. A cada dez disparos, sua décima munição irá conter um efeito de imbuição de mana maior ainda, agregando seu dano total. Este tiro também é garantia de acerto, e sempre alcançará seu alvo.
Condição: Ativada a cada décimo disparo contra um oponente.
Bônus: +50% no dano total. O projétil sempre irá acertar o alvo.
</div></div>`;
    }
}

var pp = $('pp').html();
var ap = $('ap').html();
var characterClass = $('classe').html();
var forca = Number($('for').html());
var agi = Number($('agi').html());
var sen = Number($('sen').html());
var int = Number($('int').html());
var vit = Number($('vit').html());

var bforca = 0;
var bagi = 0;
var bsen = 0;
var bint = 0;
var bvit = 0;

$('.ficha').html(
    `<div class="charImg">${$('imagem').html()}</div>
    <div class="name">${$('nome').html()}</div><div class="title">&lt;&lt; ${$('titulo').html()} &gt;&gt;</div>
    <div class="baseInfo">Gênero: ${$('genero').html()}
        Idade: ${$('idade').html()}
        Altura: ${$('altura').html()}
        Peso: ${$('peso').html()}
        Localização: ${$('local').html()}
        Origem: ${$('origem').html()}
    </div>
    <div class="rank">${$('rank').html()}</div><div class="classe">${classGenerator($('classe').html())}</div><br>
    <div class="equipment">
        <div id='equipInfo1' class='equipInfo'></div>
        <div class="equip1 arma1" style="background-image: url(https://i.imgur.com/m90cqsl.png)"></div><div class="equip1 elmo" style="background-image: url(https://i.imgur.com/KrccRB8.png)"></div><div class="equip1 armadura" style="background-image: url(https://i.imgur.com/TWASOAN.png)"></div><div class="equip1 luvas" style="background-image: url(https://i.imgur.com/8DxqU8Q.png)"></div><div class="equip1 botas" style="margin-right: 0px; background-image: url(https://i.imgur.com/unBtQ6c.png)"></div>
    </div>
    <div class="build">Hp:
        Mp:

        Força:
        Agilidade:
        Sentidos:
        Inteligência:
        Vitalidade:

        PP's:
        AP's:
        <div class="valores">${hpCalculator($('vit').html(), $('classe').html())}
            ${mpCalculator($('int').html(), $('classe').html())}
            
            ${forca} (bruto) + ${bforca} (equip) = ${forca + bforca} (${rankCalculator(forca + bforca)})
            ${agi} (bruto) + ${bagi} (equip) = ${agi + bagi} (${rankCalculator(agi + bagi)})
            ${sen} (bruto) + ${bsen} (equip) = ${sen + bsen} (${rankCalculator(sen + bsen)})
            ${int} (bruto) + ${bint} (equip) = ${int + bint} (${rankCalculator(int + bint)})
            ${vit} (bruto) + ${bvit} (equip) = ${vit + bvit} (${rankCalculator(vit + bvit)})

            ${$('pp').html()}
            ${$('ap').html()}
        </div><div class="hr"></div>
        <div class="pericias">
            <ff>Pericias</ff>
            ${$('pericias').html()}
        </div>
    </div>
    <div class="equipment">
        <div id='equipInfo2' class='equipInfo'></div>
        <div class="equip2 arma2" style="background-image: url(https://i.imgur.com/m90cqsl.png)"></div><div class="equip2 colar" style="background-image: url(https://i.imgur.com/L9UeW99.png)"></div><div class="equip2 capa" style="background-image: url(https://i.imgur.com/goHnP0Z.png)"></div><div class="equip2 anel" style="background-image: url(https://i.imgur.com/bxa2pOx.png)"></div><div class="equip2 emblema" style="margin-right: 0px; background-image: url(https://i.imgur.com/11P03pZ.png)"></div>
    </div>
    <div class="inventory"><kek>G$: ${$('dinheiro').html()}
        Moradia:</kek> ${$('moradia').html()}
        <hr>
        <div class="bag">
            ${$('inventario').html()}
        </div>
        <div class="itemData"><div class="fechar">X</div></div>
    </div>
    <div class="skills"><div class="fTitle">SKILLS</div>
        <div class="ativas">
            ${$('ativas').html()}
        </div>
        <div class="passivas">
            ${passivaGenerator($('classe').html())}${$('passivas').html()}
        </div>
    </div>
    <div class="skillData"></div>
    <div class="aparencia"><div class="fTitle">APARÊNCIA</div>
        ${$('aparencia').html()}
    </div>
    <div class="personalidade"><div class="fTitle">PERSONALIDADE</div>
        ${$('personalidade').html()}
    </div>
    <div class="historia"><div class="fTitle">BACKGROUND</div>
        ${$('historia').html()}
    </div>
    <div class="conhecidos"><div class="fTitle">RELAÇÕES PLAYER/NPC</div>
        ${$('relacoes').html()}
    </div>
    <div class="reputation"><div class="fTitle">REPUTAÇÃO</div>
        Afiliação: ${$('afiliacao').html()}
        Cargo: ${$('cargo').html()}
        Missões concluídas: ${$('mConcluidas').html()}
        Missões fracassadas: ${$('mFracassadas').html()}
        Salário: ${$('salario').html()}

        Grau de fama: ${$('fama').html()}
        Pontos de fama/infâmia: ${$('pontosFama').html()}

        Títulos:
        ${$('titulo2').html()}
    </div>`
);

/*----------------------------------------------------------*/

document.querySelector('.ficha').onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop

    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
};


var itemIndex;
for (itemIndex of document.getElementsByClassName('item')){
    itemIndex.onclick = data =>{
        document.querySelector('.itemData').innerHTML = '<div class="fechar">X</div>' + data.target.innerHTML;
        document.querySelector('.itemData').style.opacity = '1';
        document.querySelector('.itemData').style.pointerEvents = 'auto';
        document.querySelector('.itemData .fechar').style.pointerEvents = 'auto';
        $( ".itemData .fechar" ).click(function() {
            document.querySelector('.itemData').style.opacity = '0';
            document.querySelector('.itemData').style.pointerEvents = 'none';
            document.querySelector('.itemData .fechar').style.pointerEvents = 'none';
          });
    }
}

var skillIndex;
for (skillIndex of document.getElementsByClassName('skill')){
    skillIndex.onclick = data =>{
        document.querySelector('.skillData').innerHTML = '<div class="fechar">X</div>' + data.target.querySelector('.description').innerHTML;
        document.querySelector('.skillData').style.opacity = '1';
        document.querySelector('.skillData').style.pointerEvents = 'auto';
        document.querySelector('.skillData .fechar').style.pointerEvents = 'auto';
        $( ".skillData .fechar" ).click(function() {
            document.querySelector('.skillData').style.opacity = '0';
            document.querySelector('.skillData').style.pointerEvents = 'none';
            document.querySelector('.skillData .fechar').style.pointerEvents = 'none';
          });
    }
}

var skillControl = 1;
var aparenciaControl = 1;
var personalidadeControl = 1;
var historiaControl = 1;
var conhecidosControl = 1;

$( ".skills .fTitle" ).click(function() {
    if(skillControl == 1){
        skillControl = 0;
        $('.skills').css('height', '400px');
        $('.skills').css('background-color', '#151727');
        $('.skills').css('border', '1px solid #FFDD00');
        $('.skills').css('overflow-y', 'scroll');
    }
    else{
        skillControl = 1;    
        $('.skills').css('height', '40px');
        $('.skills').css('background-color', '#203349');
        $('.skills').css('border', '1px solid #203349');
        $('.skills').css('overflow-y', 'hidden');
    }
  });

  $( ".aparencia .fTitle" ).click(function() {
    if(aparenciaControl == 1){
        aparenciaControl = 0;
        $('.aparencia').css('height', '300px');
        $('.aparencia').css('background-color', '#151727');
        $('.aparencia').css('border', '1px solid #FFDD00');
        $('.aparencia').css('overflow-y', 'scroll');
    }
    else{
        aparenciaControl = 1;
        $('.aparencia').css('height', '40px');
        $('.aparencia').css('background-color', '#203349');
        $('.aparencia').css('border', '1px solid #203349');
        $('.aparencia').css('overflow-y', 'hidden');
    }
  });

  $( ".personalidade .fTitle" ).click(function() {
    if(personalidadeControl == 1){
        personalidadeControl = 0;     
        $('.personalidade').css('height', '300px');
        $('.personalidade').css('background-color', '#151727');
        $('.personalidade').css('border', '1px solid #FFDD00');
        $('.personalidade').css('overflow-y', 'scroll');
    }
    else{
        personalidadeControl = 1;
        $('.personalidade').css('height', '40px');
        $('.personalidade').css('background-color', '#203349');
        $('.personalidade').css('border', '1px solid #203349');
        $('.personalidade').css('overflow-y', 'hidden');
    }
  });

  $( ".historia .fTitle" ).click(function() {
    if(historiaControl == 1){
        historiaControl = 0;     
        $('.historia').css('height', '300px');
        $('.historia').css('background-color', '#151727');
        $('.historia').css('border', '1px solid #FFDD00');
        $('.historia').css('overflow-y', 'scroll');
    }
    else{
        historiaControl = 1;
        $('.historia').css('height', '40px');
        $('.historia').css('background-color', '#203349');
        $('.historia').css('border', '1px solid #203349');
        $('.historia').css('overflow-y', 'hidden');
    }
  });

  $( ".conhecidos .fTitle" ).click(function() {
    if(conhecidosControl == 1){
        conhecidosControl = 0;     
        $('.conhecidos').css('height', '300px');
        $('.conhecidos').css('background-color', '#151727');
        $('.conhecidos').css('border', '1px solid #FFDD00');
        $('.conhecidos').css('overflow-y', 'scroll');
    }
    else{
        conhecidosControl = 1;
        $('.conhecidos').css('height', '40px');
        $('.conhecidos').css('background-color', '#203349');
        $('.conhecidos').css('border', '1px solid #203349');
        $('.conhecidos').css('overflow-y', 'hidden');
    }
  });

/*----------ITens*/

function statReload(string){
    $('.valores').html(`${hpCalculator(vit + bvit, characterClass)}
    ${mpCalculator(int + bint, characterClass)}
    
    ${forca} (bruto) + ${bforca} (equip) = ${forca + bforca} (${rankCalculator(forca + bforca)})
    ${agi} (bruto) + ${bagi} (equip) = ${agi + bagi} (${rankCalculator(agi + bagi)})
    ${sen} (bruto) + ${bsen} (equip) = ${sen + bsen} (${rankCalculator(sen + bsen)})
    ${int} (bruto) + ${bint} (equip) = ${int + bint} (${rankCalculator(int + bint)})
    ${vit} (bruto) + ${bvit} (equip) = ${vit + bvit} (${rankCalculator(vit + bvit)})

    ${pp}
    ${ap}`);

    return string;
}

var security = 0;
function itemPenality (atributo, bonus, condition, i){
    if (i == 1) return;
    var penality = Math.round(bonus/2);
    if(typeof atributo == 'string') atributo = atributo.toLowerCase();
    if(condition == 'n') {return '-x-';}
    if(atributo == 'força'){
        if(agi + bagi - penality < 0) security = 1;
        else bagi -= penality;
        return statReload('Agilidade');
    }
    if(atributo == 'agilidade'){
        if(vit + bvit - penality < 0) security = 1;
        else bvit -= penality;
        return statReload('Vitalidade');
    }
    if(atributo == 'sentidos'){
        if(int + bint - penality < 0) security = 1;
        else bint -= penality;
        return statReload('Inteligência');
    }
    if(atributo == 'inteligência'){
        if(sen + bsen - penality < 0) security = 1;
        else bsen -= penality;
        return statReload('Sentidos');
    }
    if(atributo == 'vitalidade'){
        if(forca + bforca - penality < 0) security = 1;
        else bforca -= penality;
        return statReload('Força');
    }
    return 'Erro na penalidade do item';
}

function itemBonus (atributo, bonus){
    if(typeof atributo == 'string') atributo = atributo.toLowerCase();
    if(atributo == 'força') bforca += bonus;
    if(atributo == 'agilidade') bagi += bonus;
    if(atributo == 'sentidos') bsen += bonus;
    if(atributo == 'inteligência') bint += bonus;
    if(atributo == 'vitalidade') bvit += bonus;

    return statReload('');
}

var itemType;
for(var itemIndex of document.getElementsByClassName('item')){
    if ($(itemIndex).find('equip').html() == 'arma1' && $('.arma1').html() == '') itemType = '.arma1';
    else if ($(itemIndex).find('equip').html() == 'elmo' && $('.elmo').html() == '') itemType = '.elmo';
    else if ($(itemIndex).find('equip').html() == 'armadura' && $('.armadura').html() == '') itemType = '.armadura';
    else if ($(itemIndex).find('equip').html() == 'luvas' && $('.luvas').html() == '') itemType = '.luvas';
    else if ($(itemIndex).find('equip').html() == 'botas' && $('.botas').html() == '') itemType = '.botas';
    else if ($(itemIndex).find('equip').html() == 'arma2' && $('.arma2').html() == '') itemType = '.arma2';
    else if ($(itemIndex).find('equip').html() == 'colar' && $('.colar').html() == '') itemType = '.colar';
    else if ($(itemIndex).find('equip').html() == 'capa' && $('.capa').html() == '') itemType = '.capa';
    else if ($(itemIndex).find('equip').html() == 'anel' && $('.anel').html() == '') itemType = '.anel';
    else if ($(itemIndex).find('equip').html() == 'emblema' && $('.emblema').html() == '') itemType = '.emblema';
    else security = 1;
 
    $(itemType).html(`<!--<div class="fechar">X</div>
    <div class="bonus">+${$(itemIndex).find('bonus').html()}
    <div class="bonusatt">${$(itemIndex).find('atributo').html()}</div></div>
    <hr class="equipLine">
    <div class="penalidade">-${Math.round(Number($(itemIndex).find('bonus').html()) / 2)}
    <div class="penalidadeatt">${itemPenality($(itemIndex).find('atributo').html(), Number($(itemIndex).find('bonus').html()), $(itemIndex).find('penalidade').html(), security)}</div></div>
    <div class="efeito">${$(itemIndex).find('efeito').html()}</div>-->`);
    
    if(security == 0) itemBonus($(itemIndex).find('atributo').html(), Number($(itemIndex).find('bonus').html()));
    if(security != 0){security = 0; $(itemType).html('');}
    else $(itemType).css('background-image', $(itemIndex).css('background-image'));
    itemType = '';
}

for(var equipIndex of document.getElementsByClassName('equip1')){
    $(equipIndex).click(element =>{
        if($(element.target).html() != ''){
            $('#equipInfo1').html($(element.target).html().substring(4, $(element.target).html().length - 3));
            $('.elmo').css('left','-127px');
            $('.armadura').css('left','-254px');
            $('.luvas').css('left','-381px');
            $('.botas').css('left','-508px');
            $('.equip1').css('z-index','0');
            $(element.target).css('z-index', '1');
            setTimeout(() => {
                $('#equipInfo1').css('border','1px solid #FFDD00');
                $('#equipInfo1').css('width', '506px');
            }, 500);
            setTimeout(() => {
                $('#equipInfo1 .fechar').css('opacity','1');
            }, 900);
        }
        fecharEquip('#equipInfo1', '.equip1');
    });
}

for(var equipIndex of document.getElementsByClassName('equip2')){
    $(equipIndex).click(element =>{
        if($(element.target).html() != ''){
            $('#equipInfo2').html($(element.target).html().substring(4, $(element.target).html().length - 3));
            $('.colar').css('left','-127px');
            $('.capa').css('left','-254px');
            $('.anel').css('left','-381px');
            $('.emblema').css('left','-508px');
            $('.equip2').css('z-index','0');
            $(element.target).css('z-index', '1');
            setTimeout(() => {
                $('#equipInfo2').css('border','1px solid #FFDD00');
                $('#equipInfo2').css('width', '506px');
            }, 500);
            setTimeout(() => {
                $('#equipInfo2 .fechar').css('opacity','1');
            }, 900);
        }
        fecharEquip('#equipInfo2', '.equip2');
    });
}

function fecharEquip(slot , geral){$(`${slot} .fechar`).click(function(){
    $(`${slot} .fechar`).css('opacity','0');
    setTimeout(() => {
        $(slot).css('border','0px solid #FFDD00');
        $(slot).css('width', '0px');
        setTimeout(() => {
            $(geral).css('left','0px');
        }, 500);
    }, 100);
})}
