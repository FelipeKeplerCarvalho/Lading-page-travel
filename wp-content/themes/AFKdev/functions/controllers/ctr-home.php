<?php 


class CTR_home {


    public static function get_info(){


        $info = new stdClass();

        $info->cat_nome = get_field('categoria_name');
        $info->cat_intro = get_field('categoria_intro');
        $info->cat_repetear = get_field('cat_card');

        $info->destino_top = get_field('destino_top_frase');
        $info->destino_titulo = get_field('destino_titulo');
        $info->destino_card = get_field('destino_card');

        $info->bene_sub = get_field('sub_titulo_bene');
        $info->bene_title = get_field('titulo_bene');
        $info->bene_beneficios = get_field('itens_de_beneficios');
        $info->bene_img = get_field('imagem_bene');

        $info->test_sub = get_field('sub_title_testimonials');
        $info->test_title = get_field('title_testimonials'); 
        $info->depoimentos = get_field('depoimentos'); 

        return $info;
    }


}