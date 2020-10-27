import Plugin from 'hurry-plugin-definition'

export default class HelloWorldPlugin extends Plugin{
    constructor(api, context){
        super(api, context);
        alert('Hello World!');
    }
} 