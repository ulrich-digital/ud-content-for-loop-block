<?php
/**
 * Enqueue editor-spezifische JS-Daten für "Content for Loop Block"
 */

defined('ABSPATH') || exit;

add_action('enqueue_block_editor_assets', function () {
    $post_types = array_values(get_post_types(['public' => true], 'names'));


    wp_localize_script(
        'ud-content-for-loop-block-editor-script',
        'udContentLoopBlockSettings',
        [
            'nonce' => wp_create_nonce('wp_rest'),
            'availablePostTypes' => $post_types,
            'placeholderImageUrl' => plugins_url('assets/images/placeholder.svg', __DIR__),

        ]
    );
});
