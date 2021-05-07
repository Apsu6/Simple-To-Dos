let vue = new Vue ({

    el: '#app' ,
    data:{
        newTask: '',
        existingTask:[
            {text :'Cooking'}
        ]


    },
    methods:{
        add(){
            this.existingTask.push({
                text: this.newTask
            }),
                this.newTask=''
        },
        deletetask(i){
            this.existingTask.splice(i,1)
        }



    }












})