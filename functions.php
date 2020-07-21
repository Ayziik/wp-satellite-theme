<?php

add_action( 'wp_enqueue_scripts', 'addScripts' );

function addScripts() {
	wp_enqueue_style( 'hwMainStyle', get_stylesheet_uri(), [], null);
    wp_enqueue_style( 'normalize', get_template_directory_uri() . '/assets/css/normalize.css' );

    wp_enqueue_script( 'main', get_template_directory_uri() . '/assets/js/main.js',
        array(), null, true );
}