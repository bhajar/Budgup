#Budg'up

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br/>
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9789ba2235b6403aa24a31248b62d5fe)](https://www.codacy.com/app/ProjetBudgup/Budgup?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ProjetBudgup/Budgup&amp;utm_campaign=Badge_Grade) <br/>
[![Build Status](https://travis-ci.org/ProjetBudgup/Budgup.svg?branch=master)](https://travis-ci.org/ProjetBudgup/Budgup) <br/>
[![Coverage Status](https://coveralls.io/repos/github/ProjetBudgup/Budgup/badge.svg?branch=master)](https://coveralls.io/github/ProjetBudgup/Budgup?branch=master)
[![GitHub release](https://img.shields.io/github/release/ProjetBudgup/Budgup.svg)]()

## Page de présentation

https://projetbudgup.github.io/Budgup/

## Description générale
Budg’up est une application sécurisée qui vise à aider ses utilisateurs à gérer au mieux leurs ressources financières. Avec Budg'up vous pourrez observer l'évolution de votre solde, avoir une vision claire et hiérarchisée de vos dépenses et même être alerté en cas de découvert. Grâce aux données de consommation récupérées des différentes entreprises partenaires nous pourrons vous aider à vous fixer des objectifs mensuels et à ne pas les dépasser.

Un véritable assistant sûr et sécurisé dans la poche !

## Installer l'environnement 

Veuillez suivre les instructions ici :  https://dev.cozy.io/v2.html#set-up-the-development-environment

Clonez ce répertoire, installez les dependences et lancez le serveur (vous aurez besoin de Node.js)

## Lancer l'environnement Cozy

     cozy-dev vm:init
     cozy-dev vm:start

## Installer le projet

     git clone git://github.com/ProjetBudgup/Budgup.git
     cd Budgup

     
## Lancer le projet    

     npm install
     
     npm run dev
     open http://localhost:9250/


## tester le projet localement
### Ajouter cette ligne dans package.json 
"test": "./node_modules/.bin/gulp",

puis lance : npm test

