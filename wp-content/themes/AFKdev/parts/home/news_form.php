<?php global $infos; ?>

<section id="Form">
    <div class="form-bg">
        <div class="form-holder container">
            <img class="arrow-img" src="<?= get_template_directory_uri() ?>/assets/img/form/form-icon.png" alt="">
            <h2>
                <?= $infos->form; ?>
            </h2>
            <form id="news-form" action="<?= admin_url('admin-ajax.php');?>" method="post"> 
                <!-- Admin_url('admin-ajax.php') = serve para disparar o hook, lembra dos plugins que pegam o hook para fazer algo acontecer e etc-->
                <!-- Você usa classes (class) para estilização com CSS e atributos data-* para interagir via JavaScript. -->
                <input type="hidden" name="recaptcha_response" id="recaptchaResponse" /> <!-- Ta invisivel pq o recaptcha já vem preenchido -->
                <input type="hidden" name="action" value="send_news"> <!-- send_news é o valor usado no campo action no seu formulário. Ele é o nome que você escolhe 
                para a sua ação personalizada. -->
                <input type="text" name="E-mail" placeholder="Your E-mail">
                <button>Subscribe</button>
            </form>
            <h2 id="form-response" ></h2>
            <img class="plus" src="<?= get_template_directory_uri(); ?>/assets/img/form/plus.png" alt="">
        </div>
    </div>
</section>