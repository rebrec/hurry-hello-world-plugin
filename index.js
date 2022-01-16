console.log('COUCOU');
// import Plugin from 'hurry-plugin-definition'
import {Plugin} from 'hurry-plugin-definition'

// const Plugin = require('../hurry-plugin-definition/dist/main.bundle.js').default
// import {Plugin} from 'hurry-plugin-definition/Plugin'
console.log('COUCOU');
console.log(Plugin);
export default class HelloWorldPlugin extends Plugin {
    static pluginName = "hello-world-plugin"; 
    static maxInstances = 1; 
    
    beginLoad(api){
        alert('Hello World!');
    }
} 

