**Compilation Rollup en mode build (production)**

Paramètres de compilation dans le fichier tsconfig.json :

- "target": "ESNext" : Spécifie la version ECMAScript cible pour la compilation.
- "useDefineForClassFields": true : Active la génération de définitions pour les champs de classe.
- "lib": ["DOM", "DOM.Iterable", "ESNext"] : Spécifie les bibliothèques TypeScript disponibles pour l'environnement de compilation.
- "allowJs": false : Interdit l'utilisation de fichiers JavaScript dans le projet TypeScript.
- "skipLibCheck": true : Ignore la vérification des fichiers de définition de bibliothèque.
- "esModuleInterop": false : Désactive l'interopérabilité des modules ES.
- "allowSyntheticDefaultImports": true : Autorise les imports de modules avec un export par défaut synthétique.
- "strict": true : Active le strict mode TypeScript.
- "forceConsistentCasingInFileNames": true : Applique une casse constante dans les noms de fichiers.
- "module": "ESNext" : Définit le format de module cible pour Rollup.
- "moduleResolution": "Node" : Utilise la résolution de module Node pour la résolution des dépendances.
- "resolveJsonModule": true : Permet d'importer des fichiers JSON en tant que modules.
- "isolatedModules": true : Active le support des modules isolés.
- "noEmit": true : Empêche la génération de fichiers de sortie JavaScript.
- "jsx": "react-jsx" : Indique l'utilisation de JSX avec la syntaxe react-jsx.

**Compilation esbuild en mode développement**

Paramètres de compilation dans le fichier tsconfig.node.json :

- "composite": true : Indique que le projet TypeScript est un projet composite.
- "module": "ESNext" : Définit le format de module cible pour esbuild.
- "moduleResolution": "Node" : Utilise la résolution de module Node pour la résolution des dépendances.
- "allowSyntheticDefaultImports": true : Autorise les imports de modules avec un export par défaut synthétique.

Ces paramètres spécifiques aux deux modes de compilation vous permettent de configurer Rollup pour la production (build) et esbuild pour le développement dans votre projet Vite.