# Guida al Deploy (Locale)

Questo documento spiega come avviare l'intero sistema in un ambiente di sviluppo locale utilizzando Docker.

## Prerequisiti

-   [Docker](https://www.docker.com/get-started/) installato e in esecuzione.
-   Docker Compose (solitamente incluso con Docker Desktop).

## Avvio dell'Ambiente

L'intera applicazione (frontend, backend, database) è orchestrata tramite il file `docker-compose.yml` che si trova nella root del progetto.

Per avviare tutti i servizi, esegui il seguente comando dalla cartella root del progetto:

```bash
docker compose up --build
```

-   `--build`: Questa opzione forza la ricostruzione delle immagini Docker. È consigliabile usarla la prima volta o dopo aver apportato modifiche ai `Dockerfile` o al codice sorgente.

Dopo che il comando è stato eseguito, i servizi saranno disponibili ai seguenti indirizzi:

-   **Frontend**: [http://localhost:8080](http://localhost:8080)
-   **Backend API**: [http://localhost:3000](http://localhost:3000)
-   **Database**: Accessibile sulla porta `5432` dall'host (e dal servizio backend tramite il nome `database:5432`).

## Selezionare un Brand al Volo

Puoi decidere quale versione brandizzata dell'applicazione avviare modificando il file `.env`.

1.  Se non l'hai già fatto, crea un file `.env` nella root del progetto copiando da `.env.example`.
2.  Apri il file `.env`.
3.  Modifica il valore della variabile `BRAND` con il nome della configurazione del cliente desiderato (es. `BRAND=default` o `BRAND=clienteA`).

    ```
    # ...
    # Change this to build a different brand (e.g., 'default' or 'clienteB')
    BRAND=clienteA
    # ...
    ```

4.  Salva il file e riavvia i container con `docker compose up --build` per applicare le modifiche.

## Fermare l'Ambiente

Per fermare tutti i container, premi `Ctrl + C` nel terminale in cui `docker compose` è in esecuzione.

Per rimuovere i container e le reti create, esegui:

```bash
docker compose down
```

Per rimuovere anche il volume del database (ATTENZIONE: questo cancellerà tutti i dati), esegui:

```bash
docker compose down -v
```
