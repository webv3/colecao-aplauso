
$(document).ready(function(){
    //$(".menu .sub_livros").slideToggle("none");//esconde os itens de livros
    
    var seta_livros = 0;//variavel para mudar a imgem livros
    
    if(seta_livros == 0){
        $(".menu #livros > a").click(function(){ 
            $(".menu .sub_livros").slideToggle("slow");
            var seta_livros = 1;//variavel para mudar a imgem livros
            
            return false;
            if(seta_livros == 1){
                alert("numero zero");	
            }
        })
    }
    return false;
});
//MENU JQUERY
jQuery(document).ready(function(){
						   
		
	jQuery('#primeiro-livros').click(function(){
				jQuery(this).addClass('ativo');
		}, function(){
		jQuery(this).removeClass('ativo');
	})
	
	jQuery('#busca-livros input').focus(function(){
				jQuery(this).removeClass('mostra_texto_busca');
		}, function(){
		jQuery(this).addClass('ativo-busca');
	})
		
		
		//efeito swf img capa do livro
	/*jQuery('.capa-livro').click(function(){
				jQuery('.efeito-swf').removeClass('efeito-swf');
		});
	
	jQuery('.capa-livro').click(function(){
			jQuery('.fundo-swf').addClass('back-swf');
	});*/
	
	
	
	
	
	jQuery('.leia-livro-novo p').click(function(){
				jQuery('.efeito-swf').removeClass('efeito-swf');
		});
	
	jQuery('.leia-livro-novo p').click(function(){
			jQuery('.fundo-swf').addClass('back-swf');
	});
	

	
	
	
	
	/*
	jQuery('.leia-livro-novo-interna .clique-leia').click(function(){
				jQuery('.efeito-swf').removeClass('efeito-swf');
		});
	
	jQuery('.leia-livro-novo-interna .clique-leia').click(function(){
			jQuery('.fundo-swf').addClass('back-swf');
	});*/
	
	
	
	
	jQuery('.fechar-box').click(function(){
			jQuery('.efeito-swf').addClass('efeito-swf');
	});
	
	jQuery('.fechar-box').click(function(){
			jQuery('.fundo-swf').removeClass('back-swf');
	});
	
	jQuery('.fechar-box').click(function(){
			jQuery('#video_swf').addClass('efeito-swf');
	});
	
	jQuery('.fechar-box').click(function(){
			jQuery('.fechar-box').addClass('efeito-swf');
	});
	
	
	jQuery('.fechar-box').click(function(){
			jQuery('.box-swf').addClass('efeito-swf');
	});
	
	
	jQuery('.inp-nome').click(function(){
			jQuery('.news-seunome').removeClass('news-seunome');
	});	
	
	jQuery('.inp-nome').click(function(){
			jQuery('.nome-news').addClass('news-sem-nome');
	});
	
	jQuery('.inp-email').click(function(){
			jQuery('.news-seuemail').removeClass('news-seuemail');
	});	
	
	jQuery('.inp-email').click(function(){
			jQuery('.email-news').addClass('news-sem-email');
	});
	
	jQuery('.twittes-livros').hover(function(){
			jQuery('.twittes-livros').addClass('twitter-height');
	}, function(){
		jQuery(this).removeClass('twitter-height');
	});
	
	
	
		/*				   
	jQuery("#navegacao .menu .sub_livros").css("display","none");//esconde os itens de livros quando carrega pagina
	jQuery(".continua_web").css("display","block");//mostra os links na pagina
	jQuery("#navegacao .menu #livros a").click(function(){//quando clicar no icone LIVROS
		jQuery("#navegacao .menu .sub_livros").slideToggle("slow");//MOSTRA OU ESCONDE SUB ITENS
	})*/
});


/*
     FILE ARCHIVED ON 09:31:37 Oct 10, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:01:44 Nov 29, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 161.535 (3)
  esindex: 0.007
  captures_list: 176.619
  CDXLines.iter: 10.776 (3)
  PetaboxLoader3.datanode: 221.048 (4)
  exclusion.robots: 0.17
  exclusion.robots.policy: 0.161
  RedisCDXSource: 1.425
  PetaboxLoader3.resolve: 35.093
  load_resource: 99.838
*/