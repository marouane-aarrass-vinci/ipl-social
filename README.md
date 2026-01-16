# IPL Social

## Informations étudiant
- Nom : AARRASS
- Prénom : Marouane
- Email VINCI : marouane.aarrass@student.vinci.be

## URL GitHub du projet
https://github.com/marouane-aarrass-vinci/IPL-social



## Description du projet
Ce projet consiste à mettre en place un environnement DevOps pour le projet
**IPL Social**.

Une pipeline d’intégration continue (CI) est configurée à l’aide de **GitHub Actions**.
Elle permet d’exécuter automatiquement les tests lors d’une Pull Request vers la
branche principale `main`.

Le développement suit la méthodologie **TDD (Test Driven Development)** :
les tests automatisés sont écrits avant l’implémentation du code afin de valider
le bon fonctionnement du projet.

Aucun déploiement sur serveur n’est réalisé, conformément aux consignes.

## Technologies utilisées
- Node.js
- Jest
- GitHub Actions

## Lancer les tests
Commande permettant d’exécuter les tests localement :

```bash
npm test
