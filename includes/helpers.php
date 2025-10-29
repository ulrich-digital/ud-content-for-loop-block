<?php

add_action( 'rest_api_init', function () {
    register_rest_field(
        'user',
        'roles',
        [
            'get_callback' => function ( $user ) {
                $userdata = get_userdata( $user['id'] );
                return $userdata ? $userdata->roles : [];
            },
            'update_callback' => null,
            'schema' => [
                'description' => 'Benutzerrollen',
                'type'        => 'array',
                'items'       => [
                    'type' => 'string',
                ],
                'context'     => ['view', 'edit'],
            ],
        ]
    );
} );


/**
 * Gallery-Block prüfen → wenn leer, Klasse hinzufügen
 */
add_filter( 'render_block_core/gallery', function( $block_content, $block ) {
    // Falls keine innerBlocks vorhanden → Gallery leer
    if ( empty( $block['innerBlocks'] ) ) {
        // Klasse `is-empty` anhängen
        $block_content = preg_replace(
            '/class="([^"]+)"/',
            'class="$1 is-empty"',
            $block_content,
            1
        );
    }
    return $block_content;
}, 10, 2 );

