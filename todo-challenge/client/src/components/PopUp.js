import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TodoContext from "../context/todos";

const PopUp = () => {  
const {setNewTodo,newTodo,setPopupActive,popupActive,addTodo} = useContext(TodoContext)

  return (
    popupActive ?
        <Dialog open={true} fullWidth={true}>
          <DialogTitle>Write here your task!</DialogTitle>
          <DialogContent>
            <TextField autoFocus margin="dense" type="text" fullWidth={true}
            onChange={e => setNewTodo(e.target.value)} value={newTodo}/>
          </DialogContent>
          <DialogActions>
            <Button 
              variant="contained"
              onClick={() => setPopupActive(false)}
              color="secondary">
              Cancel, I wont do that!
            </Button>
            <Button
              variant="contained"
              onClick={addTodo}
              color="primary"
              disabled={newTodo === "" ? true : false}>
              Add Todo!
            </Button>
          </DialogActions>
      </Dialog>
      :
      <Dialog open={false}></Dialog>
  );
  
} 

export default PopUp;