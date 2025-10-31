# Inhalt für Loops

**Ein universeller Block für die Darstellung von geloopten Inhalten wie News, Veranstaltungen, Unterseiten oder Datumsanzeigen.**


## Funktionsweise

Der Block dient als konsolidierter Anzeige-Container für verschiedene Inhaltstypen. Je nach gewähltem Typ (z. B. `news`, `ud_veranstaltungen`, `childpage`, `datetime`) wird ein spezifisches Template geladen. Dieses kann direkt im Editor bearbeitet und erweitert werden.


## Aufbau und Verhalten

Der Block ist modular konzipiert:

- **Templates** für verschiedene Inhaltstypen sind vordefiniert, aber nicht gesperrt.
- Inhalte wie `ud_news` oder `ud_veranstaltungen` können automatisch beim Anlegen mit dem passenden Layout bestückt werden.
- **Inspector Controls** ermöglichen die manuelle Auswahl des Inhaltstyps.


## Technische Besonderheiten

- Der Block prüft zur Laufzeit, welche Custom Post Types verfügbar sind und zeigt nur gültige Typen an.
- Wird ein Inhaltstyp nicht erkannt oder fehlen abhängige Blöcke (z. B. `ud/accordion-block`), wird automatisch ein Hinweis angezeigt.
- Die Templates basieren auf nativen Gutenberg-Blöcken und optionalen Plugin-Blöcken.
- Styling erfolgt scoped über `.wp-block-ud-loop-content` sowie `.is-content-type-*`.



## Abhängigkeiten 

Der Block ist kompatibel mit folgenden UD-Blöcken und kann deren Inhalte automatisch verarbeiten:

- `ud/datetime-block`
- `ud/accordion-block`
- `ud/link-block`

Sind diese Blöcke nicht installiert, bleibt der Editor vollständig funktionsfähig – die entsprechenden Funktionen werden einfach übersprungen.


## Autor

[ulrich.digital gmbh](https://ulrich.digital)


## Lizenz

GPL v2 or later
[https://www.gnu.org/licenses/gpl-2.0.html](https://www.gnu.org/licenses/gpl-2.0.html)




