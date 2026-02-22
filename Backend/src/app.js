const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const PostModel = require('./models/post.model'); 
const cors = require('cors');   



const app = express();
app.use(cors());

app.use(express.json());

const upload = multer({storage:multer.memoryStorage()})


app.post('/creat-post', upload.single("image"), async (req,res)=>{
    console.log(req.body);
    console.log(req.file);


    const result = await uploadFile(req.file.buffer)

    const post = await  PostModel.create({
        image : result.url,
        caption: req.body.caption
    })
    

    return res.status(201).json({
        message:"post created successfully",
        post
        
    })
    
})


app.get("/posts",async (req,res)=>{
    const post = await PostModel.find()

    return res.status(200).json({
        meaasge:"post fetched succesfully",
        post 
    })
})

module.exports = app