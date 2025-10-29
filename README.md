# Inhalt für Loops

**Ein universeller Block für die Darstellung von geloopten Inhalten wie News, Veranstaltungen, Unterseiten oder Datumsanzeigen.**


## Funktionsweise

Der Block dient als konsolidierter Anzeige-Container für verschiedene Inhaltstypen. Je nach gewähltem Typ (z. B. `news`, `ud_veranstaltungen`, `childpage`, `datetime`) wird ein spezifisches Template geladen. Dieses kann direkt im Editor bearbeitet und erweitert werden.


## Aufbau und Verhalten

Der Block ist modular konzipiert:

- **Templates** für verschiedene Inhaltstypen sind vordefiniert, aber nicht gesperrt.
- Inhalte wie `ud_news` oder `ud_veranstaltungen` können automatisch beim Anlegen mit dem passenden Layout bestückt werden.
- **Inspector Controls** ermöglichen die manuelle Auswahl des Inhaltstyps.
- Die Platzhalterbilder werden direkt aus dem Plugin-Verzeichnis geladen.


## Technische Besonderheiten

- Der Block prüft zur Laufzeit, welche Custom Post Types verfügbar sind und zeigt nur gültige Typen an.
- Wird ein Inhaltstyp nicht erkannt oder fehlen abhängige Blöcke (z. B. `ud/accordion-block`), wird automatisch ein Hinweis angezeigt.
- Die Templates basieren auf nativen Gutenberg-Blöcken und optionalen Plugin-Blöcken.
- Styling erfolgt scoped über `.wp-block-ud-loop-content` sowie `.is-content-type-*`.


## Styling

Der Block bringt nur lokales, block-spezifisches CSS mit. Alle Layout-Regeln sind:

- gezielt auf `.wp-block-ud-loop-content` eingeschränkt
- auf den Inhaltstyp (via `.is-content-type-*`) ausrichtbar
- für Bild- und Textelemente vorbereitet (z. B. `.teaser-text-container`, `.main-heading`)


## Abhängigkeiten (optional)

Der Block nutzt ggf. folgende externe Blöcke (Plugins erforderlich):

- `ud/datetime-block`
- `ud/accordion-block`
- `ud/link-block`

Fehlende Blöcke werden abgefangen – der Editor bleibt funktional.


## Entwickler:innen

- **Block-Name:** `ud/content-for-loop-block`
- **Editor-Klasse:** `wp-block-ud-loop-content`
- **Pfad zum Plugin:** `wp-content/plugins/ud-content-for-loop-block/`

Der Block ist ein eigenständiges Plugin und kann unabhängig von anderen Loop-Strukturen eingesetzt werden.


