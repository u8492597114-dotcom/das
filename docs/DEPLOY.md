# Guida al Deploy (Locale)

Questo documento spiega come avviare l'intero sistema in un ambiente di sviluppo locale utilizzando Docker.

## Architettura di Rete

Il sistema utilizza un **reverse proxy** (basato su Nginx) per gestire il traffico in ingresso. Tutte le richieste sulla porta 80 vengono intercettate dal reverse proxy e instradate al servizio corretto.

Per questo motivo, l'accesso all'applicazione non avviene più tramite `localhost:PORTA`, ma utilizzando dei domini locali specifici.

## Prerequisiti

-   [Docker](https://www.docker.com/get-started/) installato e in esecuzione.
-   Docker Compose (solitamente incluso con Docker Desktop).
-   **Configurazione del file `hosts` locale** (vedi istruzioni sotto).

### Configurazione del File `hosts`

Per far funzionare i domini `.local`, devi dire al tuo computer di risolverli sull'indirizzo locale (`127.0.0.1`). Questo si fa modificando il file `hosts`.

1.  **Apri il file `hosts` con privilegi di amministratore**:
    *   **Linux/macOS**: `sudo nano /etc/hosts`
    *   **Windows**: Apri il Blocco Note come Amministratore e poi apri `C:\Windows\System32\drivers\etc\hosts`

2.  **Aggiungi le seguenti righe** in fondo al file:
    ```
    127.0.0.1 gestionale.local
    127.0.0.1 crm.local
    127.0.0.1 ecommerce.local
    ```

3.  **Salva il file**. Potrebbe essere necessario svuotare la cache DNS del tuo sistema operativo.

## Avvio dell'Ambiente

Per avviare tutti i servizi, esegui il seguente comando dalla cartella root del progetto:

```bash
docker compose up --build
```

Dopo che il comando è stato eseguito, i servizi saranno disponibili ai seguenti indirizzi:

-   **Frontend**:
    -   [http://gestionale.local](http://gestionale.local)
    -   [http://crm.local](http://crm.local)
    -   [http://ecommerce.local](http://ecommerce.local)
-   **Backend API**: [http://localhost:3000](http://localhost:3000) (accessibile direttamente per lo sviluppo)
-   **Database**: Accessibile sulla porta `5432` dall'host.

## Selezionare un Brand al Volo

Per cambiare la versione brandizzata dell'applicazione, modifica il file `.env`:

1.  Crea un file `.env` copiando da `.env.example` se non esiste.
2.  Apri il file `.env` e modifica il valore della variabile `BRAND`.
3.  Riavvia i container con `docker compose up --build`.

## Fermare l'Ambiente

Per fermare i container, premi `Ctrl + C`. Per rimuoverli, esegui `docker compose down`. Per rimuovere anche il volume del database, `docker compose down -v`.
