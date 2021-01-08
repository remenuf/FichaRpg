var exp = 0;

var forFisica = 0;
var agilidade = 0;
var constituicao = 0;
var destreza = 0;
var controleChakra = 0;
var reflexo = 0;
var forEspiritual = 0;
var manipulacao = 0;
var estabilidade = 0;
var acuidade = 0;
var determinacao = 0;

var sum = 0

function percentage (value, bonus){
    return Math.floor(Number(value) + (Number(bonus) / 100) * Number(value));
}

$('.base').blur(function(){
    $('.base').each(function(){
        if($(this).val() == '' || Number($(this).val() < 0) )$(this).val(0);
    })

    exp = Number($('#xp').val());
    forFisica = Number($('#forFisica').val());
    agilidade = Number($('#agilidade').val());
    constituicao = Number($('#constituição').val());
    destreza = Number($('#destreza').val());
    controleChakra = Number($('#controleChakra').val());
    reflexo = Number($('#reflexo').val());
    forEspiritual = Number($('#forEspiritual').val());
    manipulacao = Number($('#manipulação').val());
    estabilidade = Number($('#estabilidade').val());
    acuidade = Number($('#acuidade').val());
    determinacao = Number($('#determinação').val());

    sum = forFisica + agilidade + constituicao + destreza + controleChakra + reflexo + forEspiritual + manipulacao + estabilidade + acuidade + determinacao;

    if(sum < exp){
        $('xp2').html(`Ainda lhe restam <xp>${exp - sum}</xp> pontos para distribuir`);
        if (exp - sum == 1) $('xp2').html(`Ainda lhe resta <xp>${exp - sum}</xp> ponto para distribuir`);
        $('xp').css('color', ' #52b362');
    }
    else if(sum > exp){
        $('xp2').html(`Você excedeu o limite por <xp>${-1*(exp - sum)}</xp> pontos`);
        if (sum - exp == 1) $('xp2').html(`Você excedeu o limite por <xp>${-1*(exp - sum)}</xp> ponto`);
        $('xp').css('color', ' #ff3d3d');
    }
    else if(sum == exp){
        $('xp2').html(`Você distribuiu todos os pontos`);
    }

    $('#hp').html(`${sum + 100}`);
    $('#sanidade').html(`${Math.floor((sum + 100) / 2)}`);
    $('#chakra').html(`${forEspiritual + determinacao + (controleChakra * 2) + 20}`);
    $('#stamina').html(`${forFisica + (constituicao * 2) + 20}`);
    $('#DanoTai').html(`${percentage(forFisica, $('#bonus_forFisica').val())}`);
    $('#DanoNin').html(`${percentage(forEspiritual, $('#bonus_forEspiritual').val())}`);
    $('#acerto').html(`${Math.floor(percentage(destreza, $('#bonus_destreza').val()) + (0.5 * percentage(acuidade, $('#bonus_acuidade').val())))}`);
    $('#esquiva').html(`${Math.floor(percentage(agilidade, $('#bonus_agilidade').val()) + (0.5 * percentage(reflexo, $('#bonus_reflexo').val())))}`);
    $('#bloqueio').html(`${Math.floor(percentage(reflexo, $('#bonus_reflexo').val()) + (0.5 * percentage(agilidade, $('#bonus_agilidade').val())))}`);
    $('#resNin').html(`${Math.floor(percentage(controleChakra, $('#bonus_controleChakra').val()) + (0.5 * percentage(constituicao, $('#bonus_constituição').val())))}`);
    $('#resTai').html(`${Math.floor(percentage(constituicao, $('#bonus_constituição').val()) + (0.5 * percentage(controleChakra, $('#bonus_controleChakra').val())))}`);
    $('#forGen').html(`${percentage(manipulacao, $('#bonus_manipulação').val())}`);
    $('#vontade').html(`${Math.floor(percentage(determinacao, $('#bonus_determinação').val()) + (0.5 * percentage(estabilidade, $('#bonus_estabilidade').val())))}`);
    $('#resiliência').html(`${Math.floor(percentage(estabilidade, $('#bonus_estabilidade').val()) + (0.5 * percentage(determinacao, $('#bonus_determinação').val())))}`);
    $('#indução').html(`${Math.floor(percentage(acuidade, $('#acuidade').val()) + (0.5 * percentage(destreza, $('#bonus_destreza').val())))}`);
});


$('.clean').click(function(){
    $('.base').each(function(){
        $(this).val(0);
    })

    exp = Number($('#xp').val());
    forFisica = Number($('#forFisica').val());
    agilidade = Number($('#agilidade').val());
    constituicao = Number($('#constituição').val());
    destreza = Number($('#destreza').val());
    controleChakra = Number($('#controleChakra').val());
    reflexo = Number($('#reflexo').val());
    forEspiritual = Number($('#forEspiritual').val());
    manipulacao = Number($('#manipulação').val());
    estabilidade = Number($('#estabilidade').val());
    acuidade = Number($('#acuidade').val());
    determinacao = Number($('#determinação').val());

    sum = forFisica + agilidade + constituicao + destreza + controleChakra + reflexo + forEspiritual + manipulacao + estabilidade + acuidade + determinacao;

    if(sum < exp){
        $('xp2').html(`Ainda lhe restam <xp>${exp - sum}</xp> pontos para distribuir`);
        if (exp - sum == 1) $('xp2').html(`Ainda lhe resta <xp>${exp - sum}</xp> ponto para distribuir`);
        $('xp').css('color', ' #52b362');
    }
    else if(sum > exp){
        $('xp2').html(`Você excedeu o limite por <xp>${-1*(exp - sum)}</xp> pontos`);
        if (sum - exp == 1) $('xp2').html(`Você excedeu o limite por <xp>${-1*(exp - sum)}</xp> ponto`);
        $('xp').css('color', ' #ff3d3d');
    }
    else if(sum == exp){
        $('xp2').html(`Você distribuiu todos os pontos`);
    }

    $('#hp').html(`${sum + 100}`);
    $('#sanidade').html(`${Math.floor((sum + 100) / 2)}`);
    $('#chakra').html(`${forEspiritual + determinacao + (controleChakra * 2) + 20}`);
    $('#stamina').html(`${forFisica + (constituicao * 2) + 20}`);
    $('#DanoTai').html(`${percentage(forFisica, $('#bonus_forFisica').val())}`);
    $('#DanoNin').html(`${percentage(forEspiritual, $('#bonus_forEspiritual').val())}`);
    $('#acerto').html(`${percentage(destreza, $('#bonus_destreza').val()) + (0.5 * percentage(acuidade, $('#bonus_acuidade').val()))}`);
    $('#esquiva').html(`${percentage(agilidade, $('#bonus_agilidade').val()) + (0.5 * percentage(reflexo, $('#bonus_reflexo').val()))}`);
    $('#bloqueio').html(`${percentage(reflexo, $('#bonus_reflexo').val()) + (0.5 * percentage(agilidade, $('#bonus_agilidade').val()))}`);
    $('#resNin').html(`${percentage(controleChakra, $('#bonus_controleChakra').val()) + (0.5 * percentage(constituicao, $('#bonus_constituição').val()))}`);
    $('#resTai').html(`${percentage(constituicao, $('#bonus_constituição').val()) + (0.5 * percentage(controleChakra, $('#bonus_controleChakra').val()))}`);
    $('#forGen').html(`${percentage(manipulacao, $('#bonus_manipulação').val())}`);
    $('#vontade').html(`${percentage(determinacao, $('#bonus_determinação').val()) + (0.5 * percentage(estabilidade, $('#bonus_estabilidade').val()))}`);
    $('#resiliência').html(`${percentage(estabilidade, $('#bonus_estabilidade').val()) + (0.5 * percentage(determinacao, $('#bonus_determinação').val()))}`);
    $('#indução').html(`${percentage(acuidade, $('#acuidade').val()) + (0.5 * percentage(destreza, $('#bonus_destreza').val()))}`);

});

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }

  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }
  
  function filtro(bruto, bonus){
      bonus = Number(bonus);
      if(bonus > 0) return `${bruto} [color=navyblue](+${bonus}% Clã)[/color] = ${percentage(bruto, bonus)}`;
      return bruto;
  }

  $('.copy').click(function(){
    var codeFicha = `[b]Força Física:[/b] ${filtro(forFisica, $('#bonus_forFisica').val())}
[b]Agilidade:[/b] ${filtro(agilidade, $('#bonus_agilidade').val())}
[b]Constituição:[/b] ${filtro(constituicao, $('#bonus_constituição').val())}
[b]Destreza:[/b] ${filtro(destreza, $('#bonus_destreza').val())}
[b]Controle de Chakra:[/b] ${filtro(controleChakra, $('#bonus_controleChakra').val())}
[b]Reflexo:[/b] ${filtro(reflexo, $('#bonus_reflexo').val())}
[b]Força Espiritual:[/b] ${filtro(forEspiritual, $('#bonus_forEspiritual').val())}
[b]Manipulação:[/b] ${filtro(manipulacao, $('#bonus_manipulação').val())}
[b]Estabilidade:[/b] ${filtro(estabilidade, $('#bonus_estabilidade').val())}
[b]Acuidade:[/b] ${filtro(acuidade, $('#bonus_acuidade').val())}
[b]Determinação:[/b] ${filtro(determinacao, $('#bonus_determinação').val())}

[center][size=16][color=softblue][b]~ ATRIBUTOS  SECUNDÁRIOS ~[/b][/color][/size][/center]

[color=green][b]HP:[/b] ${sum + 100}[/color]
[color=gray][b]SANIDADE:[/b] ${Math.floor((sum + 100) / 2)}[/color]
[color=blue][b]CHAKRA:[/b] ${forEspiritual + determinacao + (controleChakra * 2) + 20}[/color]
[color=orange][b]STAMINA:[/b] ${forFisica + (constituicao * 2) + 20}[/color]

[b]Dano Base - Taijutsu:[/b] ${percentage(forFisica, $('#bonus_forFisica').val())}
[b]Dano Base - Ninjutsu:[/b] ${percentage(forEspiritual, $('#bonus_forEspiritual').val())}

[b]Acerto:[/b] ${Math.floor(percentage(destreza, $('#bonus_destreza').val()) + (0.5 * percentage(acuidade, $('#bonus_acuidade').val())))}
[b]Esquiva:[/b] ${Math.floor(percentage(agilidade, $('#bonus_agilidade').val()) + (0.5 * percentage(reflexo, $('#bonus_reflexo').val())))}
[b]Bloqueio:[/b] ${Math.floor(percentage(reflexo, $('#bonus_reflexo').val()) + (0.5 * percentage(agilidade, $('#bonus_agilidade').val())))}
[b]Resistência Ninjutsu:[/b] ${Math.floor(percentage(controleChakra, $('#bonus_controleChakra').val()) + (0.5 * percentage(constituicao, $('#bonus_constituição').val())))}
[b]Resistência Taijutsu:[/b] ${Math.floor(percentage(constituicao, $('#bonus_constituição').val()) + (0.5 * percentage(controleChakra, $('#bonus_controleChakra').val())))}
[b]Força do Genjutsu:[/b] ${percentage(manipulacao, $('#bonus_manipulação').val())}
[b]Força de Vontade:[/b] ${Math.floor(percentage(determinacao, $('#bonus_determinação').val()) + (0.5 * percentage(estabilidade, $('#bonus_estabilidade').val())))}
[b]Resiliência:[/b] ${Math.floor(percentage(estabilidade, $('#bonus_estabilidade').val()) + (0.5 * percentage(determinacao, $('#bonus_determinação').val())))}
[b]Indução:[/b] ${Math.floor(percentage(acuidade, $('#acuidade').val()) + (0.5 * percentage(destreza, $('#bonus_destreza').val())))}

[b]Velocidade de Ataque:[/b] 3`;

    copyTextToClipboard(codeFicha);
});