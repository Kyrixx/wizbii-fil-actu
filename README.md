# Exercice "Fil d'acualité"
## A lire
Ce dépôt contient les fichiers pour l'éxectution du "Fil d'actualité" codé sous ReactJS.
Le fichier `config.js` permet de définir l'ip/nom de domaine du serveur et le port sur lequel sera lancer le script.
Il suffira de lancer les commandes suivantes pour démarrer la compilation webpack, ainsi que le serveur.
```
npm install
npm run start
```

Du à des problèmes de accessibilités à l'API via requêtes HTML par le module http de NodeJS, l'appel à l'api se fait via curl sous ligne de commande (je n'ai pas trouvé d'autres solutions sur le moment). De ce fait, curl doit être installé sur le système.