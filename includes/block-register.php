<?php
/**
 * Block-Registrierung für "Content for Loop Block"
 */

defined('ABSPATH') || exit;

function ud_content_for_loop_block_register_block() {
    register_block_type_from_metadata(__DIR__ . '/../');
}
add_action('init', 'ud_content_for_loop_block_register_block');
