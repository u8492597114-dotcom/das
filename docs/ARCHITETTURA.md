# Architettura del Sistema White-Label

Questo documento descrive l'architettura generale del sistema software template.

## Panoramica

Il sistema è basato su un'architettura **monolitica modulare** containerizzata, progettata per garantire una netta separazione delle responsabilità, facilità di manutenzione e deploy rapido di versioni personalizzate.

L'intera applicazione è orchestrata tramite Docker Compose e suddivisa in tre container principali:

1.  **Frontend**: Un'applicazione Single Page Application (SPA) sviluppata in **Angular**.
2.  **Backend**: Un'API server sviluppata con **NestJS** (basato su Node.js).
3.  **Database**: Un'istanza di **PostgreSQL** per la persistenza dei dati.

## Componenti

### 1. Frontend

-   **Framework**: Angular
-   **Scopo**: Fornire l'interfaccia utente per i moduli Gestionale, CRM ed E-commerce.
-   **Container**: L'applicazione viene compilata e servita staticamente tramite **Nginx** per massimizzare performance e sicurezza.
-   **Personalizzazione**: Il meccanismo di white-labeling è gestito a livello di build tramite le "configurations" di Angular.

### 2. Backend

-   **Framework**: NestJS
-   **Scopo**: Espone un'API (REST/GraphQL) che gestisce tutta la logica di business. Il codice è organizzato internamente in moduli che rispecchiano le aree funzionali (`GestionaleModule`, `CrmModule`, `EcommerceModule`).
-   **Comunicazione**: Comunica con il database PostgreSQL e viene consumato dal frontend.

### 3. Database

-   **Sistema**: PostgreSQL
-   **Scopo**: Persistenza dei dati.
-   **Dati**: I dati vengono salvati su un volume Docker per garantire che non vengano persi al riavvio o alla rimozione dei container.

## Flusso di Comunicazione

-   L'utente interagisce con il **Frontend** (servito da Nginx) tramite il browser.
-   Il **Frontend** effettua chiamate API al **Backend**.
-   Il **Backend** processa le richieste, applica la logica di business e interagisce con il **Database** per leggere o scrivere dati.
-   Il **Backend** risponde al **Frontend**, che aggiorna la UI di conseguenza.
