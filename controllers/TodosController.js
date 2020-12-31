const Todo = require('../models/todo')

exports.add = function *(next)  {
    const { title } = this.request.body;


    if (!title ) {
        this.response.status = 400;
        this.body = {
                status: false,
                error: "All fields are required"
                }
        return
        }else {
            
            const newTodo = new Todo({
                title: title
            });
            Todo.newTodo (newTodo, (err, todo) => {
                if (err) return err; 
                this.response.status = 201,        
                this.body = {
                    status: true,
                    todo: todo,
                    message: "Todo created successfully"
                    }
                 return true
            });


        }


};


exports.all_todo= function * (next) {

    Todo.find().then(todo=> {
        if (!todo) {
            this.response.status = 404,        
            this.body = {
        status: false,
        error: "Todo not found"
        }
     return true
    
    }
    this.response.status = 200,  
    console.log(todo)      
    this.body = {
        status: true,
        todo: todo,
        }
     return true


    })}


    exports.update = function * (next) {
        const {id} = this.params;
        const { title } = this.request.body;


        if (!title || !id ) {
            this.response.status = 400;
            this.body = {
                    status: false,
                    error: "All fields are required"
                    }
            return
        }
//update
 Todo.findByIdAndUpdate(id).then(todo => {
    if (!todo) {
        this.response.status = 400;
            this.body = {
                    status: false,
                    error: "All fields are required"
                    }
            return
    }
    todo.title = title;
    todo.save();
    this.response.status = 201;
            this.body = {
                    status: true,
                    error: "added "
                    }
            return
}).catch(err => {
    this.response.status = 400;
            this.body = {
                    status: false,
                    error: "All fields are required"
                    }
            return
})
}



exports.delete_note = function * (next) {
    const {id} = this.params;

     Todo.findByIdAndDelete(id).then(todo => {
        if (!todo) {
           this.response.status = 400;
            this.body = {
                    status: false,
                    error: "All fields are required"
                    }
            return
        }
        this.response.status = 200;
        this.body = {
                status: false,
                error: "deleted succesfully"
                }
        return
    }).catch(err => {
        this.response.status = 400;
        this.body = {
                status: false,
                error: err
                }
        return
})}



exports.todo_get_one = function *(next)  {
    Todo.findById(this.params).then(todo=> {
        this.response.status = 200;
        this.body = {
                status: true,
                todo: todo
                }
        return
    }).catch(er=> {
        this.response.status = 400;
        this.body = {
                status: false,
                error: err
                }
        return
    })
        
}