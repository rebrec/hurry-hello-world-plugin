// import Plugin from 'hurry-plugin-definition'
import {Plugin} from 'hurry-plugin-definition'

export default class HelloWorldPlugin extends Plugin {
    static pluginName = "hello-world-plugin"; 
    static maxInstances = 1; 
    
    beginLoad(api){
        alert('Hello World!');
    }
} 

