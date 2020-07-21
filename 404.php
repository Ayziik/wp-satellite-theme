<?php
get_header();
?>

<main class="main-404">
  <figure>
    <img src="<?php echo bloginfo('template_url'); ?>/assets/image/404.svg" alt="Page not found" width="100">
  </figure>

  <h1>Упс, страница не найдена.</h1>

  <h2>Мы сожалеем, но страница, которую вы ищете, не существует.</h2>

  <a class="to-home-btn" href="<?php echo get_home_url() ?>">Вернуться на главную</a>
</main>

<?php
get_footer();
?>
