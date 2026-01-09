# Guida alla Personalizzazione (White-Labeling)

Questa guida spiega come creare una nuova versione personalizzata dell'applicazione.

## Concetto

Il sistema utilizza le **build configurations** di Angular per applicare il branding. Ogni "brand" (cliente) ha una sua cartella dedicata che contiene asset e file di configurazione specifici. Durante il processo di build, i file di default vengono sostituiti con quelli del brand selezionato.

## Struttura delle Cartelle

La struttura per la personalizzazione si trova in `frontend/src/assets/branding/`. Ogni sottocartella rappresenta un brand:

```
frontend/src/assets/branding/
├── default/            # Branding di fallback
│   ├── assets/         # Logo, favicon, etc.
│   ├── _theme.scss     # Variabili SCSS specifiche
│   └── theme.json      # Nomi, colori in formato JSON
└── clienteA/           # Esempio di un brand per un cliente
    ├── assets/
    ├── _theme.scss
    └── theme.json
```

## Come Creare un Nuovo Brand

1.  **Duplicare una Cartella Esistente**: Copia la cartella `default` (o un altro brand esistente) in `frontend/src/assets/branding/` e rinominala con il nome del nuovo cliente (es. `clienteB`).

2.  **Personalizzare i File**: Modifica i file all'interno della nuova cartella (`clienteB`):
    *   `theme.json`: Aggiorna il nome dell'app e i codici colore.
    *   `_theme.scss`: Aggiungi o modifica stili SCSS se necessario.
    *   `assets/`: Sostituisci il logo, la favicon e altre immagini.

3.  **Configurare la Build in `angular.json`**:
    *   Apri il file `frontend/angular.json`.
    *   Naviga fino a `projects.frontend.architect.build.configurations`.
    *   Aggiungi una nuova configurazione per `clienteB`, copiando quella di `clienteA` e aggiornando i percorsi per puntare ai file di `clienteB`.

    ```json
    "clienteB": {
      "fileReplacements": [
        {
          "replace": "src/assets/branding/default/theme.json",
          "with": "src/assets/branding/clienteB/theme.json"
        },
        {
          "replace": "src/assets/branding/default/_theme.scss",
          "with": "src/assets/branding/clienteB/_theme.scss"
        }
      ],
      // ... altre opzioni di build
    }
    ```

4.  **Generare la Build Personalizzata**: Per compilare l'applicazione con il nuovo brand, usa il nome della configurazione nel comando di build o nel `docker-compose.yml`.
