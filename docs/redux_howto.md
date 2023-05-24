# Redux howto

## Installation

`yarn add redux react-redux @redux-devtools/extension`

## Mise en place du store

- créer un reducer : `src/reducers/nameForTheReducer.js`

```js
const initialState = {
  // ici le state initial
};

const nameForTheReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default nameForTheReducer;
```

- créer un store :  `src/store/index.js`

```js
import { legacy_createStore as createStore } from 'redux';

import { devToolsEnhancer } from '@redux-devtools/extension';

import reducer from 'src/reducers/nameForTheReducer';

const store = createStore(
  // reducer
  reducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;
```

- utilisation du composant Provider pour que nos composants puissent avoir accès au store. Par exemple dans _src/index.js_ :

```js
import { Provider } from 'react-redux';

import store from 'src/store';

[...]

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

```

=> On peut utiliser le Redux dev tool pour vérifier que le store est fonctionnel : quand on regarde le détail de l'action d'initialisation, on devrait voir le state initial.

# Avoir plusieurs reducers (combineReducers)

Avoir plusieurs reducers permet de ranger les données dans des "tiroirs", de découper le state en plusieurs morceaux, par exemple un reducer pour les données des recettes de cuisine, un reducer pour les données de l'utilisateur (un reducer par fonctionnalité).

Exemple de state avec des tiroirs (on n'écrit pas directement la définition de ce state initial, ce sera découpé entre les reducers) : 

```js
{
  recettes: {
    'crepes': xxxxx
  },
  utilisateur: {
    'nom': xxxxx
  }
}
```

- Créer un reducer principal qui va combiner les autres reducers => src/reducers/index.js

``` javascript
import { combineReducers } from 'redux';

// on importe tous les reducers
import recettesReducer from './recettesReducer';
import utilisateurReducer from './utilisateurReducer';

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  // nom du tiroir : reducer qui s'en occupe
  recettes: recettesReducer,
  utilisateur: utilisateurReducer,
});
```

Exemple pour le reducer qui gère le tiroir des recettes (le reducer ne sait pas qu'il gère juste un tiroir) :

```js
const stateInitial = {
  'crepes': xxxxxxxx,
};

const recettesReducer = (state = initialState, action = {}) => {
  [...]
};

```

- Utiliser le reducer principal dans le store : on importe le reducer qui combine les autres `import reducer from 'src/reducers';` et c'est celui-ci qu'on utilise dans _createStore_

=> attention quand on veut lire une information qui est dans le state (_useSelector_ ou _store.getState()_), il ne faut pas oublier de préciser dans quel tiroir est cette information : `state.nomDuTiroir.info`

Pour voir le state complet, on utilise le redux dev tool.

# Connexion d'un composant au store

Grâce au Provider nos composants sont implicitement connectés au store. Pour interagir avec le store on a deux hooks à notre disposition.

## Lecture d'informations du state : _useSelector_

On utilise le hook _useSelector_ fourni par _react-redux_. Ce hook est utilisable directement dans n'importe quel composant.

Si on veut récupérer plusieurs informations on fait appel à _useSelector_ plusieurs fois => récupérer une information avec useSelector permet aussi d'abonner le composant aux changements de cette information dans le state, le composant refera automatiquement son rendu si cette information change.

```js
import { useSelector } from 'react-redux';

const MyComponent = () => {
  const info = useSelector((state) => state.information);
  // exemple d'une info sous forme de tableau
  const otherInfo = useSelector((state) => state.otherInformation);

  return (
    <>
      <span>{info}</span>
      {otherInfo.map((item) => xxxxxxxxxxxxx)}
    </>
  );
}
```

## Modification du state, envoi d'une action au store (vers un reducer ou un middleware) : _useDispatch_

- si l'action dont on a besoin (intention) n'existe pas encore : définir le _action type_ et le _action creator_ pour cette action (créer un fichier d'annuaire _src/actions/nameActions.js_ si c'est la toute première action) :

```javascript
// === action types
export const DO_SOMETHING = 'DO_SOMETHING';

// === action creators
export const doSomething = (/* newValue */) => ({
  type: DO_SOMETHING,
  /* value: newValue, */
});
```

puis ajouter le traitement de cette action dans un reducer (= quel est l'impact de cette action sur le state) ou dans un middleware (par exemple envoi d'une requête vers une API).


Reducer :

```javascript
import { DO_SOMETHING } from 'src/actions/nameForTheActions';

[...]

switch (action.type) {
  case DO_SOMETHING:
    // on retourne un nouveau state
    return {
      // en déversant les informations du state actuel
      ...state,
      // et en appliquant des modifications
      propriété_à_modifier_1: 'valeur',
      propriété_à_modifier_2: action.newValue,
    };
  [...]
}
```

Middleware :

```js
switch (action.type) {
   case SUBMIT_LOGIN:
      // traitement, par exemple requête API avec axios

      break;
 ```

- on dispatch une action dans le composant en utilisant le hook _useDispatch_ fourni par _react-redux_. Ce hook est utilisable directement dans n'importe quel composant.

```js
import { useDispatch } from 'react-redux';
import { doSomething } from 'src/actions/nameForTheActions';

function MyComponent () {
  const dispatch = useDispatch();
  
  return (
    <button
      onClick={() => {
        dispatch(doSomething(/* infos en payload si nécessaire */));
      }}
    >
```

/!\ Attention, si une action n'a pas de payload : ne pas oublier les parenthèses
quand on dispatch `dispatch(creerAction())`. Si on écrit `dispatch(creerAction)` on envoie au store une fonction et pas une action, il ne saura pas quoi en faire.

# Middleware

## Mise en place d'un middleware

- créer un fichier `src/middlewares/nomDuMiddleware.js`

``` js
const leMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default leMiddleware;
```



- utiliser le middleware dans le store (créer ou modifier le fichier _src/store/index.js_) :

``` js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import leMiddleware from 'src/middlewares/leMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    leMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  leReducer,
  // enhancers
  enhancers,
);

export default store;
```

## Réagir à une action dans le middleware

Je veux par exemple envoyer une requête vers une API quand l'action est LOG_IN.

```js
import { LOG_IN } from 'src/actions/chat';

[...]

switch (action.type) {
  case LOG_IN:
    console.log('on va faire l\'appel Axios');
    break;

  [...]

}
```

## Prendre en compte le résultat d'une requête asynchrone dans le middleware

Par exemple, j'ai envoyé une requête vers une API avec Axios, dans 'then' je voudrais fournir une information au store.

- créer une action
- traiter cette action dans le reducer (ajouter l'élément au state initial si ce n'était pas encore fait)
- envoyer cette action au store (dispatch)

```js
  .then((response) => {
    console.log('on a reçu la réponse : ', response);
    store.dispatch(nomActionCreator(response.xxxxxxx.yyyyyy));
  })
```
