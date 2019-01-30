new Vue({
    el:'#vue-app',    // must match div id on index.html
    data: {
        account:'',
        accountId:'',
        reportStart:'',
        reportEnd:'',
    },
    methods: {
        sendRequestHello: function(){
            fetch('http://127.0.0.1:8000/hello/')
                .then(response => response.json())
                .then(data => console.log(data))
        },
        sendRequest: function(account, accountId, reportStart, reportEnd){
            console.log(account, accountId, reportStart, reportEnd)
   
            // fetch('http://127.0.0.1:8000/')
            //     .then(response => response.json())
            //     .then(data => console.log(data))
        },
    }
});