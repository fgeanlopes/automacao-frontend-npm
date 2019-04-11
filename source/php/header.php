<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"><meta name="description" content="<?php bloginfo('name'); ?> - <?php wp_title(''); ?>"><meta name="robots" content="follow , index"><title> <?php
        if (is_home()):
            bloginfo('name');
        elseif (is_category()):
            single_cat_title();
            echo ' - ';
            bloginfo('name');
        elseif (is_single()):
            single_post_title();
            echo ' - ';
            bloginfo('name');
        elseif (is_page()):
            single_post_title();
            echo ' - ';
            bloginfo('name');
        else:
            wp_title('', true);
        endif;

        ?> </title><link rel="icon" href="<?php echo get_stylesheet_directory_uri(); ?>/dist/img/favicon.png" type="image/png"><link rel="stylesheet" type="text/css" media="all" href="<?php echo get_stylesheet_directory_uri(); ?>/dist/css/style.css"></head><body><!--   FIM MENU MOBILE--><div class="menu-mobile"><a href="<?php echo home_url(); ?>/home"><!--                   FIM LOGO MENU MOBILE--> <img class="logo_empresa mobile" src="<?= get_stylesheet_directory_uri() ?>/dist/img/logo.png" alt="Logo Empresa Fora"><!--                   FIM LOGO MENU MOBILE--></a><div class="wrapper"><button id="bt-menu-mobile"><span class="top"></span> <span class="middle"></span> <span class="bottom"></span></button><div class="clear"></div></div><div id="wrapper-menu-mobile"></div></div><!--   FIM MENU MOBILE--><!--        BARRA DE NAVEGAÇÃO DESKTOP--><nav class="barra_de_navegacao"><div class="container position-relative"><div class="itens_barra_de_navegacao"><!--                   LOGO MENU DESKTOP--> <a href="<?php echo home_url(); ?>/home"><img class="logo_empresa desktop" src="<?= get_stylesheet_directory_uri() ?>/dist/img/logo.png" alt="Logo Empresa"> </a><!--                   FIM LOGO MENU DESKTOP--><!--                    LINKS DA BARRA DE NAVEGAÇÃO--><ul class="itens_nav"><li class="item_nav ativo"><a href="<?php echo home_url(); ?>/home">Sobre a MRA</a></li><li class="item_nav"><a href="<?php echo home_url(); ?>/estetica">Nosso Empreendimentos</a></li><li class="item_nav"><a href="<?php echo home_url(); ?>/ortodontia">Blog!</a></li><li class="item_nav"><a href="<?php echo home_url(); ?>/cirurgias">Fale com a gente</a></li><!-- FIM  LINKS DA BARRA DE NAVEGAÇÃO--></ul></div></div></nav></body></html>