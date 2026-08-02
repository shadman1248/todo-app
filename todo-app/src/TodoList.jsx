import { useState } from "react"

export default function TodoList(){

    let[todos,setTodos]=useState([{task:"sample-task",id:crypto.randomUUID()}]);
    let[newTodo,setNewTodo]=useState("");

    

    let addNewTask=()=>{
        setTodos((prevTodos)=>{
           return [...prevTodos,{task:newTodo, id:crypto.randomUUID()}]}
        );
        setNewTodo("");

    } 



    let updateTodoValue =(event)=>{
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id)=>{
     setTodos((prevTodos)=>todos.filter((prevTodo)=>prevTodo.id!=id));
    };

    let markAllDone=()=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>
                ({...todo, isDone:true})
            )
        );
    }

    let markAsDone=(id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
               if(todo.id==id) {
                return {...todo, isDone:true};
               }
               else return todo;
            })
        );
    }
    
    return (
        <div>
         
            <h1>Todo List</h1>

               <input placeholder="Add a task" 
               value={newTodo}
               onChange={updateTodoValue}
               ></input>
               <br/>
               <button onClick={addNewTask}>Add Task</button>
               <br/> <br/> <br/> <br/> <br/>

                <hr />
               <h2>TASK TODO LIST</h2>
               <ul>
                {
                   todos.map ((todo)=>(
                    <li key={todo.id}>
                        <span style={ todo.isDone ? {textDecoration:'line-through'} : {}}>
                            {todo.task}
                        </span>
                        &nbsp;&nbsp;&nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}>DELETE</button>
                    <button onClick={()=>markAsDone(todo.id)}>MARK AS DONE</button>
                    </li>) ) 
                }
               </ul>


        </div>

    )
}