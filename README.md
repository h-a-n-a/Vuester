## Vuester

🏹 Vuester = Vue + faster,

A quick starter template aimed at accelerating Vue app development.

![](https://i.loli.net/2019/11/23/e1vtk2qnODUTYab.png)

### Stack

- Vue-cli3
- Axios
- Mock
- Vuex
- VueRouter
- ElementUI
- ESLint + Prettier
- and more coming soon...

### Outline

```
│  .env.dev       // Config file for development mode
│  .env.prod      // Config file for production mode
│  .gitignore
|  .eslintrc.js		
|  .postcss.config.js
│  babel.config.js
│  package-lock.json
│  package.json
│  README.md
│  vue.config.js   // config
│  
├─public
│      favicon.ico
│      index.html
│      
└─src
    │  App.vue
    │  main.js      // Entry
    │  
    ├─api           // APIS
    │     index.js
    │  		common.js
    │          
    ├─assets         
    │     logo.png
    │  
    │          
    ├─components    // Global components
    | 		 Vuester.vue
    │
    ├─constants 		// Constants 
    |  		 index.js
    │
    ├─filters       // Global filters
    │      index.js
    |
    ├─mixins  			// Global Mixins
    |			 index.js
    |
    ├─mock  				// HttpRequest Mock
    |			 index.js    
		|
    ├─router        
    │      index.js
    │      
    ├─store         // Vuex
    │  |  actions.js
    │  │  getters.js
    │  │  index.js
    │  │  mutation-types.js
    |  |  mutations.js
    │  │  
    │  └─modules
    │          
    ├─styles       	
    │      base.scss
    │      index.scss // Main style
    │      
    ├─utils       	
    │      axios.js
    │      common.js
    │      plugin.js
    │      
    ├─tests
    │      
    └─views     		 // Pages
           Home.vue
          
```



### Alias

| Alias      | Real Path      |
| ---------- | -------------- |
| @          | src            |
| assets     | src/assets     |
| components | src/components |
| views      | src/views      |
| constants  | src/constants  |
| utils      | src/utils      |



### Mock

`src/mock/index.js`

```javascript
Mock.mock(url, method, {
	code: '00000',
  data: {
    ...
  }
})
```

More Details: https://github.com/nuysoft/Mock/wiki



### Usage

Install dependencies
```
npm install
```

Run in development mode
```
npm run serve
```

Run in production mode
```
npm run build
```

Unit test
```
npm run test:unit
```

lint
```
npm run lint
```
