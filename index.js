const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

const users = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        age: 28,
        isActive: true,
        role: "admin",
        createdAt: "2024-01-15"
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        age: 34,
        isActive: true,
        role: "editor",
        createdAt: "2024-02-20"
    },
    {
        id: 3,
        name: "Charlie Brown",
        email: "charlie@example.com",
        age: 22,
        isActive: false,
        role: "viewer",
        createdAt: "2024-03-10"
    }
];

app.get('/', (req, res) => {
    res.send('hello from server')
})
app.get('/user', (req, res) => {
    res.send(users)
})



app.post('/user', (req, res) => {
    const newUser=req.body;
    newUser.id=users.length+1;
    users.push(newUser);
    console.log('data from server',req.body);
    
    res.send({ success: true,data:newUser, message: 'user created successfully' })
})


app.listen(port, () => {
    console.log('server is running');

})