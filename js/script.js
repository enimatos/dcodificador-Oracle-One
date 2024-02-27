const campoEntrada = document.querySelector("#txt_entrada")
const campoSaida = document.querySelector(".txt_saida")
const btnLimpar = document.getElementsByClassName("btn_limpar")
const main = document.querySelector(".main")
const secao = document.querySelector(".resultado")
const botoesSaida = document.querySelector(".botoes_saida")
const largura = window.screen.width;
const body = document.querySelector(".tela")
const frases = document.querySelector(".frases")
const matriz = ['uma', 'vez','era','voce']
const alphabeto = ["abcdefghijklmnopqrdtuvwxyz"]


function criptografar(){
    let texto = campoEntrada.value;
    // let resultado = ''

    // for (let i in texto){
    //     if (texto[i] in alphabeto){
    //         texto[i].replace(matriz[i])
    //         console.log(texto[i])
    //     }
    // }
    let resultado = texto.replace(/a/g, "8=§").replace(/b/g, "Una").replace(/c/g,"J")
    .replace(/d/g,"<>").replace(/e/g,"#V").replace(/f/g,"@A").replace(/g/g,"<7>").replace(/h/g,"\/")
    .replace(/i/g,"%%").replace(/j/g,"enter").replace(/k/g,"ctr").replace(/l/g,"bº").replace(/m/g,"@!")
    .replace(/n/g,"Uend").replace(/o/g,"Te%a").replace(/p/g,"mD3").replace(/q/g,"ke&").replace(/r/g,"¨e5")
    .replace(/s/g,"!1").replace(/t/g,"5Y").replace(/u/g,"o#L").replace(/v/g,"oBa").replace(/w/g,"vish")
    .replace(/x/g,"gi}").replace(/y/g,"Qu°").replace(/z/g,"9f")
    
    
    if(largura > 400 && largura < 1200){
        main.style.height = "1384px"
        main.style.overflowY = "scroll"
        secao.style.height = "343px"

    }
    if (largura < 401){
        // main.style.height = "1715px"
        secao.style.height = "595px"
        main.style.overflow = "scroll"
   
    }
    document.querySelector(".resultado").innerHTML = `<textarea readonly class="txt_saida" > ${resultado}</textarea>
    <div class="botoes_saida" style="display:flex">
        <button class="btn_copiar" onclick="copiar()" style="width:100%">Copiar</button>
        <button class="btn_limpar" onclick="limpar()" style="width:100%">Limpar</button>
    </div>`
    ;

}

function descriptografar(){
    let texto = campoEntrada.value;;

    let resultadoDescriptografado = texto.replace(/8=§/g,"a").replace(/Una/g,"b").replace(/J/g,"c")
    .replace(/<>/g, "d").replace(/#V/g, "e").replace(/@A/g,"f").replace(/<7>/g,"g").replace(/\//g,"h")
    .replace(/%%/g,"i").replace(/enter/g,"j").replace(/ctr/g,"k").replace(/bº/g,"l").replace(/@!/g,"m")
    .replace(/Uend/g,"n").replace(/Te%a/g,"o").replace(/mD3/g,"p").replace(/ke&/g,"q").replace(/¨e5/g,"r")
    .replace(/!1/g,"s").replace(/5Y/g,"t").replace(/o#L/g,"u").replace(/oBa/g,"v").replace(/vish/g,"w")
    .replace(/gi}/g,"x").replace(/Qu°/g,"y").replace(/9f/g,"z")


    if(largura > 400 && largura < 1200){
        main.style.height = "1384px"
        main.style.overflowY = "scroll"
        secao.style.height = "343px"


    }
    if (largura < 401){
        main.style.height = "1715px"
        secao.style.height = "595px"
      
    }
    document.querySelector(".resultado").innerHTML = `<textarea readonly class="txt_saida" > ${resultadoDescriptografado}</textarea>
    <div class="botoes_saida" style="display:flex">
        <button class="btn_copiar" onclick="copiar()" style="width:100%">Copiar</button>
        <button class="btn_limpar" onclick="limpar()" style="width:100%">Limpar</button>
    </div>`
    ;
}


function copiar(){
    let textoCopiado = document.querySelector(".txt_saida");
    textoCopiado.select();
    document.execCommand('copy');
    alert("Texto copiado.");

}

function limpar(){
    campoEntrada.value = ""

    if(largura > 1200){
         secao.style.height = "944px"
    }else if(largura > 400 && largura < 1200){
        main.style.height = "1174px"
        secao.style.height = "186px"
    }else{
        main.style.height = "1715px"
        secao.style.height = "196px"    

    }
    document.querySelector(".resultado").innerHTML = `
    <img src="/assets/imagem_busca.png" alt="" class="imagem_busca">
            <div class="frases">
                <p class="negrito">Nenhuma mensagem encontrada</p>
                <p class="normal">Digite um texto que você deseja criptografar ou descriptografar.</p>
            </div>`
    ;
 }






