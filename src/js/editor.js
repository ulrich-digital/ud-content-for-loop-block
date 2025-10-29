/**
 * editor.js
 *
 * JavaScript für den Block-Editor (Gutenberg).
 * Wird ausschließlich im Backend geladen.
 *
 * Hinweis:
 * Diese Datei enthält editor-spezifische Interaktionen oder React-Komponenten.
 * Wird über webpack zu editor.js gebündelt und in block.json oder enqueue.php eingebunden.
 */

import { receipt } from "@wordpress/icons";
import edit from './edit';
import save from './save';
import metadata from '../../block.json';


wp.blocks.registerBlockType(metadata.name, {
    ...metadata,
	icon: receipt, // ← hier explizit Gutenberg-Icon setzen
    edit,
    save,
});
