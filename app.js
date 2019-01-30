new Vue({
    el:'#vue-app',    // must match div id on index.html
    data: {
        name: 'Leon',    // can reference this variable with {{ name }} in index.html
        job: 'Programmer',
        website: 'https://github.com/leon-lei?tab=repositories',
        websiteTag: '<a href="https://github.com/leon-lei?tab=repositories">Github Profile Link</>',
        age: 27,
        x: 0,
        y: 0,
        food: '',
        color: '',
    },
    methods: {
        greet: function(time, person){     // passing in multiple args to greet function
            return 'Good ' + time + ' ' + person + ' ' + this.name;   // referencing name from 'data' with this.name
        },
        add: function(){
            this.age++;
        },
        subtract: function(){
            this.age--;
        },
        argAdd: function(inc){
            this.age += inc;
        },
        argSubtract: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){    // automatically get event obj passed with v-on events
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        logName: function(){
            console.log('You log name');
        },
        logAge: function(){
            console.log('You log age');
        },
    }
});