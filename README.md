# Grain d'Espoir Essonne — Activités

## État fonctionnel — septembre 2026

Le dépôt `activities` présente les activités déjà réalisées par **Grain d'Espoir Essonne**.

Production :

```text
https://activites.graindespoir.fr
```

### Fonctionnalités principales

- entête harmonisé avec le site principal et le calendrier ;
- logo Grain d'Espoir Essonne ;
- citations dynamiques QuoVaGo ;
- affichage dynamique des activités passées ;
- cartes alimentées depuis la base Supabase ;
- images issues de Google Drive ;
- badge **COMPLÉTÉ** sur les activités terminées ;
- section **Notre mission** ;
- bouton flottant permettant de revenir au site principal.

### Source des données

Les cartes ne sont plus définies manuellement dans `index.html`.

Elles proviennent de :

```text
public.activities
```

avec les critères :

```text
status = PAST
visibility = PUBLIC
is_active = true
start_at < date actuelle
```

Les activités sont affichées de la plus récente à la plus ancienne.

### Images

Les images utilisées par les cartes sont disponibles dans :

```text
images/activites/
```

La source de référence est :

```text
Google Drive
RESSOURCES/ACTIVITES
```

La synchronisation est assurée par le dépôt `common-backend`.

### Configuration Supabase

La configuration locale provient du fichier :

```text
.env
```

La configuration utilisable par le navigateur est générée dans :

```text
assets/js/runtime-config.js
```

Les fichiers suivants ne doivent pas être versionnés :

```text
.env
assets/js/runtime-config.js
```

La sécurité des données repose sur les règles RLS configurées dans Supabase.

### Déploiement

Toute modification doit être validée sur une branche de développement avant fusion dans `main`.
