# Initiation aux applications web

## Prérequis

Avant de commencer, installez **Visual Studio Code**, un éditeur de texte permettant d'écrire du code :  
🔗 [Télécharger VS Code](https://code.visualstudio.com)

Ensuite, ajoutez ces **extensions** pour faciliter le travail :
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (permet de voir les changements en direct)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (pour formater le code automatiquement)

---

## Introduction

Cette initiation vous apprendra les bases du **web** :

✔️ Comment fonctionne Internet  
✔️ Qu'est-ce qu'une application web  
✔️ Les langages essentiels : **HTML, CSS et JavaScript**

Nous allons créer une **application web** pour afficher et rechercher des **amiibo** (figurines interactives de jeux vidéo).  
Nous utiliserons l'**API gratuite** : [AmiiboAPI](https://amiiboapi.com/)

---

## Comment fonctionne Internet ?

🌍 **Internet**, c'est un immense réseau qui connecte des ordinateurs partout dans le monde.

Quand vous ouvrez un site web :
1. Votre **navigateur** envoie une demande (requête) à un **serveur**.
2. Le **serveur** renvoie les fichiers du site.
3. Votre **navigateur** affiche ces fichiers sous forme de page web.

---

## Qu'est-ce qu'une application web ?

Une **application web** fonctionne dans un navigateur et se compose de :
- **Interface utilisateur** : boutons, images, champs de texte...
- **Fonctionnalités** : actions de l'utilisateur (cliquer, taper du texte...)
- **Données** : informations stockées et affichées

🔹 **Statique** : ne change pas (ex. une page d'informations)  
🔹 **Dynamique** : évolue selon l’utilisateur (ex. un moteur de recherche)

---

## Qu'est-ce qu'une API ?

Une **API (Application Programming Interface)** est un outil qui permet aux logiciels de communiquer.

🖥️ Exemple : notre application va récupérer des infos sur les **amiibo** via l’API **AmiiboAPI**.

- Une API contient des **endpoints** (adresses web où récupérer des données)
- On envoie une **requête** et on reçoit une **réponse** en retour

---

## Les langages du web

### 1️⃣ HTML (HyperText Markup Language)
**HTML** structure la page web avec des balises :
```html
<h1>Titre</h1>
<p>Paragraphe</p>
<img src="image.jpg" alt="Image">
```

### 2️⃣ CSS (Cascading Style Sheets)
**CSS** embellit la page :
```css
body {
  background-color: lightblue;
  color: white;
}
```

### 3️⃣ JavaScript
**JavaScript** rend la page interactive :
```js
alert("Bonjour !");
console.log("Message dans la console");
```

---

## Création de l’application

1. **Créer la structure** de base
2. **Récupérer les données** des amiibo via l’API
3. **Afficher les amiibo** sur la page
4. **Ajouter une recherche** pour filtrer les amiibo

🎯 **Objectif final :** Une application où vous pouvez chercher et voir des amiibo en temps réel !

🚀 Prêts ? C’est parti !
