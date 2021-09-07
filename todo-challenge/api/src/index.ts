import express, { Request , Response} from 'express' // Express framework
const mongoose = require('mongoose');// Mongoose bd
const cors = require('cors'); //Cross origins errors preventor
const app = express();

app.use(express.json());
app.use(cors());
// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to DB"))
    .catch(console.error);

// Server connection
app.listen(3001, () => console.log("Server started on port 3001"));

//------------------


// Call todo model
const Todo = require('./models/Todo');


// Route to get todos
app.get('/todos', async (req: Request, res: Response) => {
    const todos = await Todo.find();

    res.json(todos);
})

// Route to create a new todo
app.post('/todo/new', (req: Request, res: Response) => {
    const todo = new Todo({
        text: req.body.text
    });
    
    todo.save();

    res.json(todo);
})

// Route to delete todo
app.delete('/todo/delete/:id', async (req: Request, res: Response) => {
    const result = await Todo.findByIdAndDelete(req.params.id)
    //Check value by id and deletes it
    res.json(result);
})

// Route to modify complete state
app.get('/todo/complete/:id', async (req: Request, res: Response) => {
    const todo = await Todo.findById(req.params.id);

    todo.complete = !todo.complete;

    todo.save();
    
    res.json(todo)
})
