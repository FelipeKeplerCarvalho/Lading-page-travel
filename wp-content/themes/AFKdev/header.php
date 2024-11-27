<!doctype html>
<html id="topo" <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>

	<header>
		<div class="header-content container">
			<img src="<?php echo get_template_directory_uri(). '/assets/img/header/Logo.png' ;?>" alt="">
			<div>
				<ul>
					<li>Destinations</li>
					<li>Hotels</li>
					<li>Flights</li>
					<li>Bookins</li>
					<li>Sing Up</li>
				</ul>
			</div>
		</div>
	</header>