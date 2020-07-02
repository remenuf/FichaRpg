document.querySelector('#f_background').onmousemove = (e) => {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop

        e.target.style.setProperty('--x', `${ x }px`)
        e.target.style.setProperty('--y', `${ y }px`)
    };

document.querySelector('#f_pp').style.backgroundImage = `url('${pp1}')`;

document.querySelector('#f_sub .s_name').innerHTML = nome;
document.querySelector('#f_sub .s_title').innerHTML = `<< ${titulo} >>`;
document.querySelector('#f_info .i_name2').innerHTML = nome;
document.querySelector('#f_info .i_rank2').innerHTML = rank;
document.querySelector('#f_info .i_title2').innerHTML = titulo;
document.querySelector('#f_info .i_class2').innerHTML = classe;
document.querySelector('#f_info .i_gender2').innerHTML = genero;
document.querySelector('#f_info .i_age2').innerHTML = idade;
document.querySelector('#f_info .i_altura2').innerHTML = altura;
document.querySelector('#f_info .i_peso2').innerHTML = peso;
document.querySelector('#f_info .i_sangue2').innerHTML = sangue;
document.querySelector('#f_info .i_location2').innerHTML = localizacao;
document.querySelector('#f_info .i_gold2').innerHTML = gold;
document.querySelector('#f_info .i_origem2').innerHTML = origem;

document.querySelector('#f_build .b_str2').innerHTML = stat_calculator('F' , forca);
document.querySelector('#f_build .b_int2').innerHTML = stat_calculator('I' , inteligencia);
document.querySelector('#f_build .b_dex2').innerHTML = stat_calculator('A' , agilidade);;
document.querySelector('#f_build .b_sab2').innerHTML = stat_calculator('S' , sentidos);
document.querySelector('#f_build .b_vit2').innerHTML = stat_calculator('V' , vitalidade);

document.querySelector('#f_build #b_stat .hp2').innerHTML = hp_calculator(stat_calculator('V' , vitalidade), classe, nivel_sub);
document.querySelector('#f_build #b_stat .mp2').innerHTML = mp_calculator(stat_calculator('I' , inteligencia), classe);

document.querySelector('#f_grupo .g_af2').innerHTML = afiliacao;
document.querySelector('#f_grupo .g_cargo2').innerHTML = cargo;
document.querySelector('#f_grupo .g_mc2').innerHTML = missoes_c;
document.querySelector('#f_grupo .g_mf2').innerHTML = missoes_f;
document.querySelector('#f_grupo .g_salary2').innerHTML = salario;

document.querySelector('#f_popularidade .p_grau2').innerHTML = grau_fama;
document.querySelector('#f_popularidade .p_pontos2').innerHTML = pontos_fama;
document.querySelector('#f_popularidade .p_portais2').innerHTML = portais_concluidos;

document.querySelector('#f_detalhes .classe2').innerHTML = classe;
document.querySelector('#f_detalhes .sub2').innerHTML = sub_classe;
document.querySelector('#f_detalhes .lvl2').innerHTML = `Grau ${nivel_sub}`;

document.querySelector('.financeiro').innerHTML = `<c>G$: <r2>${gold}</r2>

<hr>
<r>MORADIA</r>
LOCALIDADE: ${moradia_local}
CUSTO: ${moradia_custo} G$

<hr>
<r>DESPESAS</r>
FATURA HOSPITALAR: ${hospital}
</c>`;

function stat_calculator(atributo , valor){
    for (var x of document.getElementsByClassName('i_detail')){
    
        for (var i of x.querySelector('.i_detail .d_top .d_s f3').innerText){
            if(i == atributo) valor += Number(x.querySelector('.i_detail .d_top .d_s f').innerHTML);
        }
        for (var i of x.querySelector('.i_detail .d_top .d_s f4').innerText){
            if(i == atributo) valor += Number(x.querySelector('.i_detail .d_top .d_s f2').innerHTML);
        }
    }

    return valor;
}

function hp_calculator(valor, classe, sub){
    var mod = 0;
    var mod2 = 0;
    if(classe == 'Guerreiro') mod = 10;
    if(classe == 'Assassino') mod = 7.5;
    if(classe == 'Mago') mod = 5;
    if(classe == 'Curandeiro') mod = 5;
    if(Number(sub) == 1) mod2 = 3;
    if(Number(sub) == 2) mod2 = 5;
    if(Number(sub) == 3) mod2 = 10;
    if(Number(sub) == 4) mod2 = 15;
    if(Number(sub) == 5) mod2 = 20;

    return valor * mod * mod2;
}

function mp_calculator(valor, classe){
    var mod = 0;
    if(classe == 'Guerreiro') mod = 5;
    if(classe == 'Assassino') mod = 7.5;
    if(classe == 'Mago') mod = 10;
    if(classe == 'Curandeiro') mod = 10;

    return valor * mod;
}

function remove_status(){
    document.querySelector('#f_index .i_status').style.display = 'none';
    document.querySelector('#f_sub').style.opacity = '0';
    document.querySelector('#f_info').style.opacity = '0';
    document.querySelector('.f_line1').style.opacity = '0';
    document.querySelector('.f_line2').style.opacity = '0';
    document.querySelector('#f_build').style.opacity = '0';
    document.querySelector('#b_status').style.background = '#161B31';
    document.querySelector('#b_status').style.color = '#3989A1';

    for (var i of document.getElementsByClassName('equip')){
        i.style.opacity = '0';
        i.style.pointerEvents = 'none';
    }
}

function remove_bio(){
    info();
    aparencia();
    document.querySelector('#f_info').style.opacity = '0';
    document.querySelector('#f_info .i_origem').style.opacity = '0';
    document.querySelector('#f_info .i_origem2').style.opacity = '0';
    document.querySelector('#bio_text').style.opacity = '0';
    document.querySelector('#bio_text').style.pointerEvents = 'none';
    document.querySelector('#b_bio1').style.opacity = '0';
    document.querySelector('#b_bio1').style.pointerEvents = 'none';
    document.querySelector('#b_bio2').style.opacity = '0';
    document.querySelector('#b_bio2').style.pointerEvents = 'none';
    document.querySelector('#b_bio').style.background = '#161B31';
    document.querySelector('#b_bio').style.color = '#3989A1';
    document.querySelector('#f_index .i_name').style.display = 'none';
    document.querySelector('#f_index .i_bio').style.display = 'none';
}

function remove_class(){
    detalhes();
    ativas();

    document.querySelector('#f_pp').style.backgroundImage = `url('${pp1}')`;

    document.querySelector('#f_index .i_classe').style.display = 'none';
    document.querySelector('#sheet3').style.opacity = '0';
    document.querySelector('#sheet3').style.transform = 'translate(-245px, 295px)';
    document.querySelector('#f_detalhes').style.opacity = '0';
    document.querySelector('#ativas').style.opacity = '0';
    document.querySelector('#ativas').style.pointerEvents = 'none';
    document.querySelector('#f_build').style.opacity = '0';
    document.querySelector('#f_build .b_str').style.left = '367px';
    document.querySelector('#f_build .b_str').style.top = '350px';    
    document.querySelector('#f_build .b_str2').style.left = '425px';
    document.querySelector('#f_build .b_str2').style.top = '350px';    
    document.querySelector('#f_build .b_int').style.left = '500px';
    document.querySelector('#f_build .b_int').style.top = '350px';
    document.querySelector('#f_build .b_int2').style.left = '610px';
    document.querySelector('#f_build .b_int2').style.top = '350px';
    document.querySelector('#f_build .b_dex').style.left = '363px';
    document.querySelector('#f_build .b_dex').style.top = '379px';
    document.querySelector('#f_build .b_dex2').style.left = '449px';
    document.querySelector('#f_build .b_dex2').style.top = '379px';    
    document.querySelector('#f_build .b_sab').style.left = '504px';
    document.querySelector('#f_build .b_sab').style.top = '379px';    
    document.querySelector('#f_build .b_sab2').style.left = '585px';
    document.querySelector('#f_build .b_sab2').style.top = '379px';
    document.querySelector('#f_build .b_vit').style.left = '362px';
    document.querySelector('#f_build .b_vit').style.top = '408px';
    document.querySelector('#f_build .b_vit2').style.left = '457px';
    document.querySelector('#f_build .b_vit2').style.top = '408px';
    document.querySelector('#b_stat').style.transform = 'translate(585px, 442px)';
    
    document.querySelector('#b_main #b_classe').style.background = '#161B31';
    document.querySelector('#b_main #b_classe').style.color = '#3989A1';
    document.querySelector('#b_class1').style.opacity = '0';
    document.querySelector('#b_class1').style.pointerEvents = 'none';
    document.querySelector('#b_class2').style.opacity = '0';
    document.querySelector('#b_class2').style.pointerEvents = 'none';
}

function remove_bag(){
    itens();
    document.querySelector('#f_index .i_inventory').style.display = 'none';
    
    for (var i of document.getElementsByClassName('equip')){
        i.style.opacity = '0';
        i.style.pointerEvents = 'none';
    }

    document.querySelector('#f_bag').style.opacity = '0';
    document.querySelector('#f_bag').style.pointerEvents = 'none';    

    for (var i of document.getElementsByClassName('i_detail')){
        i.style.left = '101px';
        i.style.top = '200px';
    }

    document.querySelector('#b_main #b_inventory').style.color = '#3989A1';
    document.querySelector('#b_main #b_inventory').style.background = '#161B31';
    document.querySelector('#b_inventario').style.opacity = '0';
    document.querySelector('#b_inventario').style.pointerEvents = 'none';

}

function f_status(){
    remove_bio();
    remove_class();
    remove_bag();
    remove_status();
    document.querySelector('#f_info').style.opacity = '1';
    document.querySelector('#f_index').style.width = '433px';
    document.querySelector('#f_index').style.height = '79px';
    document.querySelector('#f_index').style.transform = 'translate(133.3px, 30px)';
    document.querySelector('#f_index .i_status').style.display = 'initial';
    document.querySelector('#f_sub').style.opacity = '1';
    document.querySelector('#f_pp').style.width = '170px';
    document.querySelector('#f_pp').style.height = '300px';
    document.querySelector('#f_pp').style.transform = 'translate(99px, 198.5px)';
    document.querySelector('#sheet2').style.width = '344.47px';
    document.querySelector('#sheet2').style.height = '219.96px';
    document.querySelector('#sheet2').style.transform = 'translate(350px, 134px)';
    document.querySelector('#sheet2').style.opacity = '0';
    document.querySelector('#sheet1').style.width = '319px';
    document.querySelector('#sheet1').style.height = '366px';
    document.querySelector('#sheet1').style.transform = 'translate(356px, 134px)';
    document.querySelector('#f_info .i_name').style.left = '366px';
    document.querySelector('#f_info .i_name').style.top = '140px';
    document.querySelector('#f_info .i_name2').style.left = '410px';
    document.querySelector('#f_info .i_name2').style.top = '140px';
    document.querySelector('#f_info .i_rank').style.opacity = '1';
    document.querySelector('#f_info .i_rank2').style.opacity = '1';
    document.querySelector('#f_info .i_title').style.left = '364px';
    document.querySelector('#f_info .i_title').style.top = '169px';
    document.querySelector('#f_info .i_title2').style.left = '414px';
    document.querySelector('#f_info .i_title2').style.top = '169px';
    document.querySelector('#f_info .i_class').style.opacity = '1';
    document.querySelector('#f_info .i_class2').style.opacity = '1';
    document.querySelector('#f_info .i_gender').style.left = '364px';
    document.querySelector('#f_info .i_gender').style.top = '227px';
    document.querySelector('#f_info .i_gender2').style.left = '420px';
    document.querySelector('#f_info .i_gender2').style.top = '227px';
    document.querySelector('#f_info .i_age').style.left = '367.5px';
    document.querySelector('#f_info .i_age').style.top = '256px';
    document.querySelector('#f_info .i_age2').style.left = '412px';
    document.querySelector('#f_info .i_age2').style.top = '256px';
    document.querySelector('#f_info .i_altura').style.left = '365px';
    document.querySelector('#f_info .i_altura').style.top = '285px';
    document.querySelector('#f_info .i_altura2').style.left = '425px';
    document.querySelector('#f_info .i_altura2').style.top = '285px';
    document.querySelector('#f_info .i_peso').style.left = '368px';
    document.querySelector('#f_info .i_peso').style.top = '314px';
    document.querySelector('#f_info .i_peso2').style.left = '412px';
    document.querySelector('#f_info .i_peso2').style.top = '314px';
    document.querySelector('#f_info .i_sangue').style.left = '498px';
    document.querySelector('#f_info .i_sangue').style.top = '314px';
    document.querySelector('#f_info .i_sangue2').style.left = '631px';
    document.querySelector('#f_info .i_sangue2').style.top = '314px';
    document.querySelector('#f_info .i_location').style.left = '360px';
    document.querySelector('#f_info .i_location').style.top = '442px';
    document.querySelector('#f_info .i_location2').style.left = '468px';
    document.querySelector('#f_info .i_location2').style.top = '442px';
    document.querySelector('#f_info .i_gold').style.opacity = '1';
    document.querySelector('#f_info .i_gold2').style.opacity = '1';
    document.querySelector('#f_info .i_origem').style.opacity = '0';
    document.querySelector('#f_info .i_origem2').style.opacity = '0';
    document.querySelector('.f_line1').style.opacity = '1';
    document.querySelector('.f_line2').style.opacity = '1';
    document.querySelector('#f_build').style.opacity = '1';

    for (var i of document.getElementsByClassName('equip')){
        i.style.opacity = '1';
        i.style.pointerEvents = 'auto';
        i.style.width = '66px';
        i.style.height = '66px';
    }

    document.querySelector('#f_helm').style.transform = 'translate(25px, 134px)';
    document.querySelector('#f_armor').style.transform = 'translate(25px, 209px)';
    document.querySelector('#f_gauntlet').style.transform = 'translate(25px, 284px)';
    document.querySelector('#f_weapon1').style.transform = 'translate(25px, 359px)';
    document.querySelector('#f_boots').style.transform = 'translate(25px, 434px)';
    document.querySelector('#f_neck').style.transform = 'translate(279px, 134px)';
    document.querySelector('#f_cape').style.transform = 'translate(279px, 209px)';
    document.querySelector('#f_ring').style.transform = 'translate(279px, 284px)';
    document.querySelector('#f_weapon2').style.transform = 'translate(279px, 359px)';
    document.querySelector('#f_acessory').style.transform = 'translate(279px, 434px)';

    document.querySelector('#b_status').style.background = 'transparent';
    document.querySelector('#b_status').style.color = '#00FF77';
}

function f_bio(){
    remove_status();
    remove_class();
    remove_bag();
    remove_bio();

    document.querySelector('#f_info').style.opacity = '1';
    document.querySelector('#f_index').style.transform = "translate(0px, 0px)";
    document.querySelector('#f_index').style.width = "700px";
    document.querySelector('#f_index').style.heigth = "80px";
    document.querySelector('#f_index .i_status').style.display = 'none';
    document.querySelector('#f_index .i_name').style.display = 'initial';
    document.querySelector('#f_index .i_bio').style.display = 'initial';
    document.querySelector('#f_sub').style.opacity = '0';
    document.querySelector('#f_pp').style.width = '238px';
    document.querySelector('#f_pp').style.height = '422.96px';
    document.querySelector('#f_pp').style.transform = 'translate(0px, 79px)';
    document.querySelector('#sheet2').style.width = '456px';
    document.querySelector('#sheet2').style.height = '214.96px';
    document.querySelector('#sheet2').style.transform = 'translate(239.68px, 287px)';
    document.querySelector('#sheet2').style.opacity = '1';
    document.querySelector('#sheet1').style.width = '456px';
    document.querySelector('#sheet1').style.height = '210.96px';
    document.querySelector('#sheet1').style.transform = 'translate(239.68px, 79px)';
    document.querySelector('#f_info .i_name').style.left = '254px';
    document.querySelector('#f_info .i_name').style.top = '300px';
    document.querySelector('#f_info .i_name2').style.left = '299px';
    document.querySelector('#f_info .i_name2').style.top = '300px';
    document.querySelector('#f_info .i_rank').style.opacity = '0';
    document.querySelector('#f_info .i_rank2').style.opacity = '0';
    document.querySelector('#f_info .i_title').style.left = '470px';
    document.querySelector('#f_info .i_title').style.top = '300px';
    document.querySelector('#f_info .i_title2').style.left = '520px';
    document.querySelector('#f_info .i_title2').style.top = '300px';
    document.querySelector('#f_info .i_class').style.opacity = '0';
    document.querySelector('#f_info .i_class2').style.opacity = '0';
    document.querySelector('#f_info .i_gender').style.left = '251px';
    document.querySelector('#f_info .i_gender').style.top = '329px';
    document.querySelector('#f_info .i_gender2').style.left = '310px';
    document.querySelector('#f_info .i_gender2').style.top = '329px';
    document.querySelector('#f_info .i_age').style.left = '254px';
    document.querySelector('#f_info .i_age').style.top = '358px';
    document.querySelector('#f_info .i_age2').style.left = '300px';
    document.querySelector('#f_info .i_age2').style.top = '358px';
    document.querySelector('#f_info .i_altura').style.left = '252px';
    document.querySelector('#f_info .i_altura').style.top = '387px';
    document.querySelector('#f_info .i_altura2').style.left = '315px';
    document.querySelector('#f_info .i_altura2').style.top = '387px';
    document.querySelector('#f_info .i_peso').style.left = '254px';
    document.querySelector('#f_info .i_peso').style.top = '416px';
    document.querySelector('#f_info .i_peso2').style.left = '298px';
    document.querySelector('#f_info .i_peso2').style.top = '416px';
    document.querySelector('#f_info .i_sangue').style.left = '243px';
    document.querySelector('#f_info .i_sangue').style.top = '445px';
    document.querySelector('#f_info .i_sangue2').style.left = '375px';
    document.querySelector('#f_info .i_sangue2').style.top = '445px';
    document.querySelector('#f_info .i_location').style.left = '463px';
    document.querySelector('#f_info .i_location').style.top = '329px';
    document.querySelector('#f_info .i_location2').style.left = '573px';
    document.querySelector('#f_info .i_location2').style.top = '329px';
    document.querySelector('#f_info .i_gold').style.opacity = '0';
    document.querySelector('#f_info .i_gold2').style.opacity = '0';
    document.querySelector('#f_info .i_origem').style.opacity = '1';
    document.querySelector('#f_info .i_origem2').style.opacity = '1';
    document.querySelector('.f_line1').style.opacity = '0';
    document.querySelector('.f_line2').style.opacity = '0';
    document.querySelector('#f_build').style.opacity = '0';
    document.querySelector('#bio_text').style.opacity = '1';
    document.querySelector('#bio_text').style.pointerEvents = 'auto';

    document.querySelector('#b_bio1').style.opacity = '1';
    document.querySelector('#b_bio1').style.pointerEvents = 'auto';
    document.querySelector('#b_bio2').style.opacity = '1';
    document.querySelector('#b_bio2').style.pointerEvents = 'auto';

    document.querySelector('#b_bio').style.background = 'transparent';
    document.querySelector('#b_bio').style.color = '#00FF77';
    document.querySelector('#b_status').style.background = '#161B31';
    document.querySelector('#b_status').style.color = '#3989A1';

    for (var i of document.getElementsByClassName('equip')){
        i.style.opacity = '0';
        i.style.pointerEvents = 'none';
    }
}

function f_class(){
    remove_status();
    remove_bio();
    remove_bag();
    remove_class();

    document.querySelector('#f_pp').style.backgroundImage = `url('${pp2}')`;

    document.querySelector('#f_index').style.transform = "translate(0px, 0px)";
    document.querySelector('#f_index').style.width = "700px";
    document.querySelector('#f_index').style.heigth = "80px";    
    document.querySelector('#f_index .i_classe').style.display = 'initial';
    document.querySelector('#f_pp').style.height = '216px';
    document.querySelector('#f_pp').style.width = '239.68px';
    document.querySelector('#f_pp').style.transform = 'translate(0px, 79px)';
    document.querySelector('#sheet3').style.opacity = '1';
    document.querySelector('#sheet3').style.transform = 'translate(0px, 295px)';
    document.querySelector('#sheet2').style.width = '228.32px';
    document.querySelector('#sheet2').style.height = '424.89px';
    document.querySelector('#sheet2').style.transform = 'translate(468.68px, 79px)';
    document.querySelector('#sheet2').style.opacity = '1';
    document.querySelector('#sheet1').style.width = '228.32px';
    document.querySelector('#sheet1').style.height = '424.89px';
    document.querySelector('#sheet1').style.transform = 'translate(239.68px, 79px)';
    document.querySelector('#f_detalhes').style.opacity = '1';
    document.querySelector('#ativas').style.opacity = '1';
    document.querySelector('#ativas').style.pointerEvents = 'auto';
    document.querySelector('#f_build').style.opacity = '1';
    document.querySelector('#f_build .b_str').style.left = '5px';
    document.querySelector('#f_build .b_str').style.top = '307px';    
    document.querySelector('#f_build .b_str2').style.left = '64px';
    document.querySelector('#f_build .b_str2').style.top = '307px';    
    document.querySelector('#f_build .b_int').style.left = '-3px';
    document.querySelector('#f_build .b_int').style.top = '394px';
    document.querySelector('#f_build .b_int2').style.left = '109px';
    document.querySelector('#f_build .b_int2').style.top = '394px';
    document.querySelector('#f_build .b_dex').style.left = '0px';
    document.querySelector('#f_build .b_dex').style.top = '336px';
    document.querySelector('#f_build .b_dex2').style.left = '87px';
    document.querySelector('#f_build .b_dex2').style.top = '336px';    
    document.querySelector('#f_build .b_sab').style.left = '1px';
    document.querySelector('#f_build .b_sab').style.top = '423px';    
    document.querySelector('#f_build .b_sab2').style.left = '84px';
    document.querySelector('#f_build .b_sab2').style.top = '423px';
    document.querySelector('#f_build .b_vit').style.left = '0px';
    document.querySelector('#f_build .b_vit').style.top = '365px';
    document.querySelector('#f_build .b_vit2').style.left = '90px';
    document.querySelector('#f_build .b_vit2').style.top = '365px';
    document.querySelector('#b_stat').style.transform = 'translate(150px, 446px)';    
    
    document.querySelector('#b_main #b_classe').style.background = 'transparent';
    document.querySelector('#b_main #b_classe').style.color = '#00FF77';
    document.querySelector('#b_class1').style.opacity = '1';
    document.querySelector('#b_class1').style.pointerEvents = 'auto';
    document.querySelector('#b_class2').style.opacity = '1';
    document.querySelector('#b_class2').style.pointerEvents = 'auto';
}

function f_bag(){
    remove_status();
    remove_bio();
    remove_class();
    remove_bag();

    document.querySelector('#f_index').style.transform = "translate(0px, 0px)";
    document.querySelector('#f_index').style.width = "700px";
    document.querySelector('#f_index').style.heigth = "80px";
    document.querySelector('#f_index .i_inventory').style.display = 'initial';
    document.querySelector('#f_pp').style.width = '252px';
    document.querySelector('#f_pp').style.height = '444px';
    document.querySelector('#f_pp').style.transform = 'translate(133px, 79px)';
    document.querySelector('#sheet2').style.opacity = '0';
    document.querySelector('#sheet1').style.width = '342px';
    document.querySelector('#sheet1').style.height = '444px';
    document.querySelector('#sheet1').style.transform = 'translate(354px, 79px)';

    for (var i of document.getElementsByClassName('equip')){
        i.style.opacity = '1';
        i.style.pointerEvents = 'auto';
        i.style.width = '88px';
        i.style.height = '88px';
    }

    document.querySelector('#f_helm').style.transform = 'translate(0px, 80px)';
    document.querySelector('#f_armor').style.transform = 'translate(0px, 168px)';
    document.querySelector('#f_gauntlet').style.transform = 'translate(0px, 258px)';
    document.querySelector('#f_weapon1').style.transform = 'translate(0px, 346px)';
    document.querySelector('#f_boots').style.transform = 'translate(0px, 436px)';
    document.querySelector('#f_neck').style.transform = 'translate(90px, 80px)';
    document.querySelector('#f_cape').style.transform = 'translate(90px, 168px)';
    document.querySelector('#f_ring').style.transform = 'translate(90px, 258px)';
    document.querySelector('#f_weapon2').style.transform = 'translate(90px, 346px)';
    document.querySelector('#f_acessory').style.transform = 'translate(90px, 436px)';
    document.querySelector('#f_bag').style.opacity = '1';
    document.querySelector('#f_bag').style.pointerEvents = 'auto';    

    for (var i of document.getElementsByClassName('i_detail')){
        i.style.left = '179.5px';
        i.style.top = '81px';
    }

    document.querySelector('#b_main #b_inventory').style.color = '#00FF77';
    document.querySelector('#b_main #b_inventory').style.background = 'transparent';
    document.querySelector('#b_inventario').style.opacity = '1';
    document.querySelector('#b_inventario').style.pointerEvents = 'auto';
}

function info(){
    document.querySelector('#f_info').style.opacity = 1;
    document.querySelector('#f_grupo').style.opacity = 0;
    document.querySelector('#f_popularidade').style.opacity = 0;
    document.querySelector('#f_rel').style.opacity = 0;

    document.querySelector('#b_info').style.color = '#00FF77';
    document.querySelector('#b_info').style.background = 'transparent';
    document.querySelector('#b_rel').style.color = '#3989A1';
    document.querySelector('#b_rel').style.background = '#161B31';
    document.querySelector('#b_pop').style.color = '#3989A1';
    document.querySelector('#b_pop').style.background = '#161B31';
    document.querySelector('#b_grupo').style.color = '#3989A1';
    document.querySelector('#b_grupo').style.background = '#161B31';
}

function grupo(){
    document.querySelector('#f_info').style.opacity = 0;
    document.querySelector('#f_grupo').style.opacity = 1;
    document.querySelector('#f_popularidade').style.opacity = 0;
    document.querySelector('#f_rel').style.opacity = 0;

    document.querySelector('#b_info').style.color = '#3989A1';
    document.querySelector('#b_info').style.background = '#161B31';
    document.querySelector('#b_rel').style.color = '#3989A1';
    document.querySelector('#b_rel').style.background = '#161B31';
    document.querySelector('#b_pop').style.color = '#3989A1';
    document.querySelector('#b_pop').style.background = '#161B31';
    document.querySelector('#b_grupo').style.color = '#00FF77';
    document.querySelector('#b_grupo').style.background = 'transparent';
}

function pop(){
    document.querySelector('#f_info').style.opacity = 0;
    document.querySelector('#f_grupo').style.opacity = 0;
    document.querySelector('#f_popularidade').style.opacity = 1;
    document.querySelector('#f_rel').style.opacity = 0;

    document.querySelector('#b_info').style.color = '#3989A1';
    document.querySelector('#b_info').style.background = '#161B31';
    document.querySelector('#b_rel').style.color = '#3989A1';
    document.querySelector('#b_rel').style.background = '#161B31';
    document.querySelector('#b_pop').style.color = '#00FF77';
    document.querySelector('#b_pop').style.background = 'transparent';
    document.querySelector('#b_grupo').style.color = '#3989A1';
    document.querySelector('#b_grupo').style.background = '#161B31';
}

function rel(){
    document.querySelector('#f_info').style.opacity = 0;
    document.querySelector('#f_grupo').style.opacity = 0;
    document.querySelector('#f_popularidade').style.opacity = 0;
    document.querySelector('#f_rel').style.opacity = 1;

    document.querySelector('#b_info').style.color = '#3989A1';
    document.querySelector('#b_info').style.background = '#161B31';
    document.querySelector('#b_rel').style.color = '#00FF77';
    document.querySelector('#b_rel').style.background = 'transparent';
    document.querySelector('#b_pop').style.color = '#3989A1';
    document.querySelector('#b_pop').style.background = '#161B31';
    document.querySelector('#b_grupo').style.color = '#3989A1';
    document.querySelector('#b_grupo').style.background = '#161B31';
}

function aparencia(){
    document.querySelector('.personalidade').style.opacity = 0;
    document.querySelector('.aparencia').style.opacity = 1;
    document.querySelector('.historia').style.opacity = 0;
    document.querySelector('.personalidade').style.pointerEvents = 'none';
    document.querySelector('.aparencia').style.pointerEvents = 'auto';
    document.querySelector('.historia').style.pointerEvents = 'none';

    document.querySelector('#b_aparencia').style.color = '#00FF77';
    document.querySelector('#b_aparencia').style.background = 'transparent';
    document.querySelector('#b_personalidade').style.color = '#3989A1';
    document.querySelector('#b_personalidade').style.background = '#161B31';
    document.querySelector('#b_historia').style.color = '#3989A1';
    document.querySelector('#b_historia').style.background = '#161B31';
}

function personalidade(){
    document.querySelector('.personalidade').style.opacity = 1;
    document.querySelector('.aparencia').style.opacity = 0;
    document.querySelector('.historia').style.opacity = 0;
    document.querySelector('.personalidade').style.pointerEvents = 'auto';
    document.querySelector('.aparencia').style.pointerEvents = 'none';
    document.querySelector('.historia').style.pointerEvents = 'none';

    document.querySelector('#b_personalidade').style.color = '#00FF77';
    document.querySelector('#b_personalidade').style.background = 'transparent';
    document.querySelector('#b_aparencia').style.color = '#3989A1';
    document.querySelector('#b_aparencia').style.background = '#161B31';
    document.querySelector('#b_historia').style.color = '#3989A1';
    document.querySelector('#b_historia').style.background = '#161B31';
}

function historia(){
    document.querySelector('.personalidade').style.opacity = 0;
    document.querySelector('.aparencia').style.opacity = 0;
    document.querySelector('.historia').style.opacity = 1;
    document.querySelector('.personalidade').style.pointerEvents = 'none';
    document.querySelector('.aparencia').style.pointerEvents = 'none';
    document.querySelector('.historia').style.pointerEvents = 'auto';

    document.querySelector('#b_historia').style.color = '#00FF77';
    document.querySelector('#b_historia').style.background = 'transparent';
    document.querySelector('#b_aparencia').style.color = '#3989A1';
    document.querySelector('#b_aparencia').style.background = '#161B31';
    document.querySelector('#b_personalidade').style.color = '#3989A1';
    document.querySelector('#b_personalidade').style.background = '#161B31';
}

function detalhes(){
    document.querySelector('#f_maestrias').style.opacity = 0;
    document.querySelector('#f_detalhes').style.opacity = 1;
    document.querySelector('#f_maestrias').style.pointerEvents = 'none';

    document.querySelector('#b_detalhes').style.color = '#00FF77';
    document.querySelector('#b_detalhes').style.background = 'transparent';
    document.querySelector('#b_maestrias').style.color = '#3989A1';
    document.querySelector('#b_maestrias').style.background = '#161B31';
}

function maestria(){
    document.querySelector('#f_maestrias').style.opacity = 1;
    document.querySelector('#f_detalhes').style.opacity = 0;
    document.querySelector('#f_maestrias').style.pointerEvents = 'auto';

    document.querySelector('#b_maestrias').style.color = '#00FF77';
    document.querySelector('#b_maestrias').style.background = 'transparent';
    document.querySelector('#b_detalhes').style.color = '#3989A1';
    document.querySelector('#b_detalhes').style.background = '#161B31';
}

function ativas(){
    document.querySelector('#ativas').style.opacity = 1;
    document.querySelector('#passivas').style.opacity = 0;
    document.querySelector('#ativas').style.pointerEvents = 'auto';
    document.querySelector('#passivas').style.pointerEvents = 'none';

    document.querySelector('#b_ativa').style.color = '#00FF77';
    document.querySelector('#b_ativa').style.background = 'transparent';
    document.querySelector('#b_passiva').style.color = '#3989A1';
    document.querySelector('#b_passiva').style.background = '#161B31';
}

function passivas(){
    document.querySelector('#ativas').style.opacity = 0;
    document.querySelector('#passivas').style.opacity = 1;
    document.querySelector('#ativas').style.pointerEvents = 'none';
    document.querySelector('#passivas').style.pointerEvents = 'auto';

    document.querySelector('#b_passiva').style.color = '#00FF77';
    document.querySelector('#b_passiva').style.background = 'transparent';
    document.querySelector('#b_ativa').style.color = '#3989A1';
    document.querySelector('#b_ativa').style.background = '#161B31';
}

function itens(){
    document.querySelector('#f_bag').style.opacity = 1;
    document.querySelector('#f_bag').style.pointerEvents = 'auto';   
    document.querySelector('.financeiro').style.opacity = 0
    document.querySelector('#b_inventario #b_itens').style.color = '#00FF77';
    document.querySelector('#b_inventario #b_itens').style.background = 'transparent';
    document.querySelector('#b_inventario #b_financeiro').style.color = '#3989A1';
    document.querySelector('#b_inventario #b_financeiro').style.background = '#161B31';
}

function financeiro(){
    document.querySelector('#f_bag').style.opacity = 0;
    document.querySelector('#f_bag').style.pointerEvents = 'none';   
    document.querySelector('.financeiro').style.opacity = 1

    document.querySelector('#b_inventario #b_financeiro').style.color = '#00FF77';
    document.querySelector('#b_inventario #b_financeiro').style.background = 'transparent';
    document.querySelector('#b_inventario #b_itens').style.color = '#3989A1';
    document.querySelector('#b_inventario #b_itens').style.background = '#161B31';
}