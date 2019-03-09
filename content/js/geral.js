﻿function checaNewslleter(){
    frm = document.frmNewsletter;
    
    if(frm.nome.value==''){
        document.getElementById('retornoNewsletter').innerHTML = 'Preencha o nome!';
        return false;
    }
    
    if(frm.email.value==''){
        document.getElementById('retornoNewsletter').innerHTML = 'Preencha o e-mail!';
        return false;
    }

    document.getElementById('retornoNewsletter').innerHTML = `<p>Obrigado!</p><p>Em breve você irá receber nossa newsletter</p>`;
    return true;
}



/*
 * Tira espaços vazios da variável
 * Exemplo:
 * if(trim(document.[nome_formulario].[nome_campo].value)=="")
 */
function trim(tmpStr)
{
	var tmpStr, atChar;
	
	if(tmpStr.length > 0)
	{
		atChar = tmpStr.charAt(0);
	}

	while(isSpace(atChar))
	{
		tmpStr = tmpStr.substring(1, tmpStr.length);
		atChar = tmpStr.charAt(0);
	}

	if(tmpStr.length > 0)
	{
		atChar = tmpStr.charAt(tmpStr.length-1);
	}

	while(isSpace(atChar))
	{
		tmpStr = tmpStr.substring(0,( tmpStr.length-1));
		atChar = tmpStr.charAt(tmpStr.length-1);
	}
	
	return tmpStr;
}

function isSpace(inChar)
{
	return (inChar == ' ' || inChar == '\t' || inChar == '\n');
}

/*
 * Pergunta antes de excluir
 * Exemplo:
 * if(confirm("Tem certeza que deseja excluir?"))
 */
function exclui(id)
{
	if(confirm("Tem certeza que deseja excluir?"))
		window.location.href="?acao=exclui&id=" + id;
}

/*
 * Não aceita a entrada de letras no campo
 * Exemplo:
 * onkeydown="sonumero(this)"
 */
function sonumero(campo)
{
	if ((event.keyCode>=96 && event.keyCode<=105)||(event.keyCode <= 58 && event.keyCode >= 48)||(event.keyCode == 8)||(event.keyCode==16)||(event.keyCode==46)||(event.keyCode==36)||(event.keyCode==193)||(event.keyCode==111)||(event.keyCode==191)||(event.keyCode==9)){
	 	event.returnValue = true;
	}else{
		event.returnValue = false;
	}
}

/*
 * Cria uma máscará no campo de qualquer tipo (ex: AAA-0000, (00) 0000-0000, 000.000.000-00 e etc...)
 * Exemplo:
 * Onkeypress="return txtBoxFormat(document.[nome_formulario], '[nome_campo]', '(00) 0000-0000', event);"
 */
function txtBoxFormat(objForm, strField, sMask, evtKeyPress)
{
	var i, nCount, sValue, fldLen, mskLen,bolMask, sCod, nTecla;

	if(document.all) { // Internet Explorer
		nTecla = evtKeyPress.keyCode; }
	else if(document.layers) { // Nestcape
		nTecla = evtKeyPress.which;
	}

	sValue = objForm[strField].value;

	// Limpa todos os caracteres de formatação que
	// já estiverem no campo.
	sValue = sValue.toString().replace( "-", "" );
	sValue = sValue.toString().replace( "-", "" );
	sValue = sValue.toString().replace( ".", "" );
	sValue = sValue.toString().replace( ".", "" );
	sValue = sValue.toString().replace( "/", "" );
	sValue = sValue.toString().replace( "/", "" );
	sValue = sValue.toString().replace( "(", "" );
	sValue = sValue.toString().replace( "(", "" );
	sValue = sValue.toString().replace( ")", "" );
	sValue = sValue.toString().replace( ")", "" );
	sValue = sValue.toString().replace( " ", "" );
	sValue = sValue.toString().replace( " ", "" );
	fldLen = sValue.length;
	mskLen = sMask.length;

	i = 0;
	nCount = 0;
	sCod = "";
	mskLen = fldLen;

	while (i <= mskLen) {
		bolMask = ((sMask.charAt(i) == "-") || (sMask.charAt(i) == ".") || (sMask.charAt(i) == "/"))
		bolMask = bolMask || ((sMask.charAt(i) == "(") || (sMask.charAt(i) == ")") || (sMask.charAt(i) == " "))

		if (bolMask) {
			sCod += sMask.charAt(i);
			mskLen++; 
		}else {
			sCod += sValue.charAt(nCount);
			nCount++;
		}

		i++;
	}

	objForm[strField].value = sCod;

	if (nTecla != 8) { // backspace
		if (sMask.charAt(i-1) == "0") { // apenas números...
			return ((nTecla > 47) && (nTecla < 58)); // números de 0 a 9
		} else { // qualquer caracter exceto número...
			return ((nTecla < 47) || (nTecla > 58));
		} 
	}else {
		return true;
	}
}



function mostra(sequencia, id, total)
{
	for( i=0; i<total; i++ )
	{
		n = i+1;
		
		if( sequencia == n )
		{
			eval("document.getElementById(\"" + id + "_" + n + "\").style.display=''");
			eval("document.getElementById(\"ampliar_" + id + "_" + n + "\").style.display=''");
		}
		else
		{
			eval("document.getElementById(\"" + id + "_" + n + "\").style.display='none'");
			eval("document.getElementById(\"ampliar_" + id + "_" + n + "\").style.display='none'");
		}
	}
}

function mudaImg(id, n, ft1, ft2, ft3)
{
	//alert('id = ' + id + ' | n = ' + n + ' | f1 = ' + ft1 + ' | f2 = ' + ft2 + ' | f3 = ' + ft3);
	if(n==1)
	{
		eval("document.getElementById(\"" + id + "_1\").style.display=''");
		
		if(ft2 != "" && ft2 != "NULL")
			eval("document.getElementById(\"" + id + "_2\").style.display='none'");
		
		if(ft3 != "" && ft3 != "NULL")
			eval("document.getElementById(\"" + id + "_3\").style.display='none'");
		
		
		eval("document.getElementById(\"" + id + "_m1\").style.display=''");
		
		if(ft2 != "" && ft2 != "NULL")
			eval("document.getElementById(\"" + id + "_m2\").style.display='none'");
		
		if(ft3 != "" && ft3 != "NULL")
			eval("document.getElementById(\"" + id + "_m3\").style.display='none'");
	}
	
	if(n==2)
	{
		if(ft1 != "" && ft1 != "NULL")
			eval("document.getElementById(\"" + id + "_1\").style.display='none'");
		
		eval("document.getElementById(\"" + id + "_2\").style.display=''");
		
		if(ft3 != "" && ft3 != "NULL")
			eval("document.getElementById(\"" + id + "_3\").style.display='none'");
		
		
		if(ft1 != "" && ft1 != "NULL")
			eval("document.getElementById(\"" + id + "_m1\").style.display='none'");
			
		eval("document.getElementById(\"" + id + "_m2\").style.display=''");
		
		if(ft3 != "" && ft3 != "NULL")
			eval("document.getElementById(\"" + id + "_m3\").style.display='none'");
	}
	
	if(n==3)
	{
		if(ft1 != "" && ft1 != "NULL")
			eval("document.getElementById(\"" + id + "_1\").style.display='none'");
		
		if(ft2 != "" && ft2 != "NULL")
			eval("document.getElementById(\"" + id + "_2\").style.display='none'");
		
		eval("document.getElementById(\"" + id + "_3\").style.display=''");
		
		
		if(ft1 != "" && ft1 != "NULL")
			eval("document.getElementById(\"" + id + "_m1\").style.display='none'");
		
		if(ft2 != "" && ft2 != "NULL")
			eval("document.getElementById(\"" + id + "_m2\").style.display='none'");
			
		eval("document.getElementById(\"" + id + "_m3\").style.display=''");
	}
}


/*
 * Valida CPF
 * PS: Funciona no IE e no FireFox
 * Exemplo:
 * onchange="validaCPF(this.value)"
 */
function validaCPF(cpf)
{
	cpf = cpf.replace(".","");
	cpf = cpf.replace(".","");
	cpf = cpf.replace(".","");
	cpf = cpf.replace("-","");
	
	erro = new String;
	if (cpf.length < 11) erro += "São necessários 11 dígitos para verificação do CPF! \n\n";
	var nonNumbers = /\D/;
	if (nonNumbers.test(cpf)) erro += "A verificação de CPF suporta apenas números! \n\n";
	if (cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999"){
		erro += "Número de CPF inválido!";
	}
	var a = [];
	var b = new Number;
	var c = 11;
	for (i=0; i<11; i++){
		a[i] = cpf.charAt(i);
		if (i < 9) b += (a[i] * --c);
	}
	if ((x = b % 11) < 2) { a[9] = 0 } else { a[9] = 11-x }
	b = 0;
	c = 11;
	for (y=0; y<10; y++) b += (a[y] * c--);
	if ((x = b % 11) < 2) { a[10] = 0; } else { a[10] = 11-x; }
	if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10])){
		erro +="Número de CPF inválido!";
	}
	if (erro.length > 0){
		alert(erro);
		return false;
	}
	return true;
}


/*
 * Cria uma máscará no campo com vários tipo CPF, CNPJ, TEL e DATA.
 * PS: Funciona no IE e no FireFox
 * Exemplo:
 * onKeyPress="Mascara('DATA',this,event);"
 */
function Mascara(tipo, campo, teclaPress)
{
	if (window.event)
	{
		var tecla = teclaPress.keyCode;
	} else {
		tecla = teclaPress.which;
	}
 
	var s = new String(campo.value);
	// Remove todos os caracteres à seguir: ( ) / - . e espaço, para tratar a string denovo.
	s = s.replace(/(\.|\(|\)|\/|\-| )+/g,'');
 
	tam = s.length + 1;
 
	if ( tecla != 9 && tecla != 8 ) {
		switch (tipo)
		{
		case 'CPF' :
			if (tam > 3 && tam < 7)
				campo.value = s.substr(0,3) + '.' + s.substr(3, tam);
			if (tam >= 7 && tam < 10)
				campo.value = s.substr(0,3) + '.' + s.substr(3,3) + '.' + s.substr(6,tam-6);
			if (tam >= 10 && tam < 12)
				campo.value = s.substr(0,3) + '.' + s.substr(3,3) + '.' + s.substr(6,3) + '-' + s.substr(9,tam-9);
		break;
 
		case 'CNPJ' :
 
			if (tam > 2 && tam < 6)
				campo.value = s.substr(0,2) + '.' + s.substr(2, tam);
			if (tam >= 6 && tam < 9)
				campo.value = s.substr(0,2) + '.' + s.substr(2,3) + '.' + s.substr(5,tam-5);
			if (tam >= 9 && tam < 13)
				campo.value = s.substr(0,2) + '.' + s.substr(2,3) + '.' + s.substr(5,3) + '/' + s.substr(8,tam-8);
			if (tam >= 13 && tam < 15)
				campo.value = s.substr(0,2) + '.' + s.substr(2,3) + '.' + s.substr(5,3) + '/' + s.substr(8,4)+ '-' + s.substr(12,tam-12);
		break;
 
		case 'TEL' :
			if (tam > 2 && tam < 4)
				campo.value = '(' + s.substr(0,2) + ') ' + s.substr(2,tam);
			if (tam >= 7 && tam < 11)
				campo.value = '(' + s.substr(0,2) + ') ' + s.substr(2,4) + '-' + s.substr(6,tam-6);
		break;
 
		case 'DATA' :
			if (tam > 2 && tam < 4)
				campo.value = s.substr(0,2) + '/' + s.substr(2, tam);
			if (tam > 4 && tam < 11)
				campo.value = s.substr(0,2) + '/' + s.substr(2,2) + '/' + s.substr(4,tam-4);
		break;
		}
	}
}


/*
 * Valida o e-mail 
 * Exemplo:
 * if(!email(document.[nome_formulario].[nome_campo], '[descricao_campo]')) return false;
 */
function email(textarea)
{
    var valor=textarea.value;
    var p_arroba=0;
    var p_ponto=0;
   
    //Caçando os elementos

	var regEmail = /^[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{¦}~]+@[-!#$%&\'*+\\/0-9=?A-Z^_`a-z{¦}~]+\.[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{¦}~]+$/;
	
	if (regEmail.test(valor)) {
		return true;
	} else {
         textarea.focus();
         alert('E-mail em formato incorreto!!');
         return false;						
	}
}