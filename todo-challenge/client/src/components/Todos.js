import React, {useContext} from 'react'
import TodoContext from '../context/todos'
import { Grid,
        Button,
        Checkbox,
        Box } from '@material-ui/core'



const Todos = () => {
    const {completeTodo, deleteTodo, todos} = useContext(TodoContext)

    return (
        <Grid>
            {todos?.length > 0 ? todos.map(todo => (
                    <Box 
                        component="div"
                        className={"todo" + (todo.complete ? " is-complete" : "")}
                        key={todo._id}>
                            <Checkbox 
                                color="default"
                                onClick={() => completeTodo(todo._id)}>
                            </Checkbox>
                            <Box component="p" className="todo-text">{todo.text}</Box>
                            <Button 
                                variant="contained" 
                                onClick={() => deleteTodo(todo._id)}
                            >Delete Task
                            </Button>
                    </Box>
                )) : (
                    <Box component="p">You currently have no tasks</Box>
                )}
        </Grid>       
    )
}

export default Todos
