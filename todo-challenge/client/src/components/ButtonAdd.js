import React,{useContext} from 'react'
import Button from '@material-ui/core/Button'
import TodoContext from '../context/todos'

const ButtonAdd = () => {
    const {setPopupActive }= useContext(TodoContext)
    return (
        <Button variant="contained" color="primary" 
            onClick={() => setPopupActive(true)}>
            ADD TODO! 
        </Button>)
}

export default ButtonAdd
