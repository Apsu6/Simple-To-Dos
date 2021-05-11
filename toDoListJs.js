let vue = new Vue ({

    el: '#app' ,
    data:{
        newTask: '',
        existingTask:[

        ],
        latertask:[


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
            console.log(i)
        },
        later(i){
            this.latertask.push(this.existingTask[i])
            console.log(this.existingTask)
            this.existingTask.splice(i,1)

        },
        deletelatertask(i){
            this.latertask.splice(i,1)
            console.log(i)},
        Redo(i){
            this.existingTask.push(this.latertask[i])
            console.log(this.latertask)
            this.latertask.splice(i,1)

        }


    }












})