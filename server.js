const express = require('express');
const app = express()
app.use(express.json());
let notes = [];
app.get('/', (req,res)=>{
    res.send("hello jitendra")
})
    app.post('/notes',(req,res)=>{
        console.log(req.body);
        notes.push(req.body)
        res.json({
            message: "note created successfully",
            
        })
    })
app.get('/notes',(req,res)=>{
    res.json(notes)

})
app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index;
    delete notes[index]
    res.json({
        message: "note deleted successfully"
    })
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})