<?php
get_header();
?>

<main>
    <div class="wrapper">
        <article>
            <?php the_post(); ?>

            <h1><?php the_title() ?></h1>

            <?php the_content(); ?>
        </article>
    </div>

    <div class="wrapper">
        <section class="comments-section">
            <?php
                $args = [
                        'status' => 'approve',
                        'number' => 6
                        ];
                $comments = get_comments($args);

                $commentsCount = count($comments);
            ?>

            <h3 class="comments-section__title">
                <?php
                    if ($commentsCount === 1) {
                        echo "1 комментарий";
                    };

                    if ($commentsCount > 1 && $commentsCount < 5) {
                        echo $commentsCount ." комментария";
                    };

                if ($commentsCount > 4 && $commentsCount < 21) {
                    echo $commentsCount ." комментариев";
                };
                ?>
            </h3>

            <?php foreach($comments as $comment) :  ?>
                <div class="comment">
                    <a class="comment__avatar" href="#">
                        <?php echo get_avatar($comment->comment_author_email);?>
                    </a>

                    <div class="comment__body">
                        <h5 class="comment__author">
                            <?php echo $comment->comment_author; ?>
                        </h5>
                        <span class="comment__date">
                            <?php echo $comment->comment_date; ?>
                        </span>
                        <p class="comment__content">
                            <?php echo $comment->comment_content; ?>
                        </p>
                    </div>
                </div>
            <?php endforeach; ?>
        </section>
    </div>

    <div class="wrapper">
        <section class="leave-comment">
            <?php if ( $user_ID ) : ?>
                <h3 class="leave-comment__title">Добавить комментарий</h3>
                <p>Вы вошли как <a href="<?php echo get_option('siteurl'); ?>/wp-admin/profile.php"><?php echo $user_identity; ?></a>. <a href="<?php echo wp_logout_url(get_permalink()); ?>" title="Выйти из этого аккаунта">Выйти &raquo;</a></p>

                <form class="leave-comment__form" action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" id="commentform"
                      method="post">
                    <div class="form-wrapper">
                        <label for="comment">Текст комментария*</label>
                        <textarea name="comment" id="comment" rows="5" required></textarea>
                    </div>

                    <input class="leave-comment__submit" type="submit" value="Отправить комментарий" />

                    <?php
                        comment_id_fields();
                        do_action('comment_form', $post->ID);
                    ?>
                </form>
            <?php else : ?>
                <h3 class="leave-comment__title" >Добавить комментарий</h3>
                <p>Ваш адрес email не будет опубликован. Обязательные поля помечены *</p>
                <form class="leave-comment__form" action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php"
                      id="commentform"
                      method="post">
                    <div class="form-wrapper">
                        <label for="comment">Текст комментария*</label>
                        <textarea name="comment" id="comment" rows="5" required></textarea>
                        <label for="author">Имя*</label>
                        <input name="author" id="author" value=" " type="text" size="30" required />
                        <label for="email">Email*</label>
                        <input name="email" id="email" value=" " type="text" size="30" required />
                    </div>

                    <input class="leave-comment__submit" type="submit" value="Отправить комментарий" />

                    <?php
                        comment_id_fields();
                        do_action('comment_form', $post->ID);
                    ?>
                </form>
            <?php endif;?>
        </section>
    </div>

    <button class="to-top hide"></button>
</main>

<?php
get_footer();
?>

