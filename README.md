
Projet : Retour sur JS

Retour sur JS

Ce projet te demandera de manipuler des listes sans faire appel aux boucles for ou while.
1. Introduction

Aujourd'hui, nous allons te demander de faire la même chose qu'hier. Quoi ? Déjà vou ? Pas vraiment, puisqu'il y a un twist. Sacrés THP les filous 😏

En effet, hier était une journée visant à te remettre en douceur dans la syntaxe JS. Aujourd'hui nous allons attaquer une compétence importante : prendre le réflexe d'utiliser les fonctions professionnelles.

Et oui ! Tu devras refaire le projet de hier (un joker à la première personne qui a la référence), mais avec un twist : tu n'as pas le droit d'utiliser while, for et forEach !
2. Le projet

Comme tu as vu plus haut, nous allons te demander de ne pas utiliser while, for et forEach(). En effet si ces fonctions sont très pratiques pour apprendre l'informatique, elles sont assez peu utilisées en entreprise. Nous allons te demander dès maintenant de prendre le bon réflexe et utiliser les fonctions map(), filter() et reduce() quand c'est possible.
2.1. Startup Nation, le retour

Tu te souviens de cet exercice ? Et bien nous aussi !

Voici une liste d'entrepreneurs à succès :

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 },
];

Réalise un fichier script_01.js qui répondra aux questions suivantes :

    Sors une array qui ne contient que le prénom et le nom des entrepreneurs
    Pour chaque entrepreneur, remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui. Le résultat final devrait ressembler à ceci :

[
  { first: 'Steve', last: 'Jobs', age: 65 },
  { first: 'Oprah', last: 'Winfrey', age: 66 },
  // ... and so on
] ;

    Les clés first et last manquent de lisibilité, remplace-les par firstName et lastName
    Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 uniquement

2.2. Bibliothécaire, le retour

Le CDI du coin a adoré ton travail la dernière fois, et veut que tu reviennes en changeant tes boucles for et forEach() par des fonctions plus pros. Quel hasard, c'est exactement l'objet du projet du jour ! Coincidence ? Je ne crois pas...

const books = [
  { id: 133712, title: 'Gatsby le magnifique', rentedCount: 39 },
  { id: 237634, title: 'A la recherche du temps,perdu', rentedCount: 28 },
  { id: 873495, title: 'Orgueil & Préjugés', rentedCount: 67 },
  { id: 450915, title: 'Les frères Karamazov', rentedCount: 55 },
  { id: 837636, title: 'Dans les forêts de Sibérie', rentedCount: 15 },
  { id: 450911, title: 'Pourquoi j\'ai mangé mon père', rentedCount: 45 },
  { id: 675651, title: 'Et on tuera tous les affreux', rentedCount: 36 },
  { id: 888475, title: 'Le meilleur des mondes', rentedCount: 58 },
  { id: 364442, title: 'La disparition', rentedCount: 33 },
  { id: 635411, title: 'La lune seule le sait', rentedCount: 43 },
  { id: 465638, title: 'Voyage au centre de la Terre', rentedCount: 38 },
  { id: 748147, title: 'Guerre et Paix', rentedCount: 19 },
];

Réalise un fichier script_02.js qui répondra aux questions suivantes :

    Sors-moi une liste de tous les titres des livres du CDI
    Est-ce que tous les livres ont été au moins empruntés une fois ?
    Quel est livre le plus emprunté ?
    Quel est le livre le moins emprunté ?
    Supprime le livre avec l'ID 133712

2.3. Base de données

C'est ton deuxième jour dans l'entreprise CoolStartup.co et ton boss te demande de lui sortir quelques éléments d'une liste d'utilisateurs. C'est le moment de briller 💡.

Voici une liste qui contient quelques milliers d'utilisateurs. Dans cette liste nous allons te demander certaines données.

NB : il est à noter que nous stockerons le chiffre d'affaires (revenue) en integer du nombre de centimes. Ainsi, un utilisateur avec un "revenue" de 2100 nous a rapporté 21 €.

Réalise un fichier script_03.js qui répondra aux questions suivantes :

    Quel est le chiffre d'affaires moyen par utilisateur ?
    Quel est le pourcentage d'utilisateurs ayant rapporté de l'argent (revenue supérieur à 0) ?
    Parmi les utilisateurs ayant rapporté de l'argent, quel est le chiffre d'affaires moyen d'un utilisateur ?
    Combien avons-nous gagné d'argent au total ?
    Combien avons-nous d'utilisateurs en France ?
    Parmi ces utilisateurs, combien avons-nous de clients payants en France ?
    Donne-moi le chiffre d'affaires réparti dans nos 4 pays les plus représentés (Allemagne, États-Unis, France, Grande-Bretagne) (chiffre d'affaires total, en France, aux États-Unis, etc.)
    Fais-moi la liste de tous les pays dans lesquels nous avons gagné de l'argent ?
    Quels sont les 5 utilisateurs qui nous ont rapporté le plus d'agent ?
    Gagnons-nous plus d'argent auprès des hommes, ou des femmes ?
    Sors-moi les utilisateurs ayant rapporté au moins 75€
    Parmi nos 100 premiers utilisateurs, quel est le pourcentage qui sont des clients payants ?

3. Rendu attendu

Un joli repo qui contient trois fichiers JS qui répondent aux questions, mais sans utiliser while, for ni forEach. Ou alors tu connais un endroit où forEach() est justifiée.
