const express = require('express');
const app = express();
const router = app.router;

app.listen(3000, () => {
 console.log("Adondevamos.back is running at 3000");
});

//get example
/*
    app.get("/msg", (req, res, next) => {
    res.json({"message": "Hello, World!"});
    });
*/

//post example
/*
    app.use(express.json()); // for parsing application/json
    app.post("/msg", (req, res, next) => {
    const message = req.body.message;
    res.json({"receivedMessage": message});
    });
*/


/*
    Method: Welcome
    Type: GET
    In : Json Out : Json
    Date: 01:01:2025
*/
router.get('/',(req,res)=>{
    res.send("Welcome");
});

app.use(express.json()); // for parsing application/json

app.post("/CreateTrip", (req, res, next) => {
    
    const message = req.body.message;
    
    res.json({"receivedMessage": message});
});

/*
    Method: Update trip
    Type: Put
    In : Json
    Out : Json
*/

app.put("/UpdateTrip", (req, res, next) => {
    
    const message = req.body.message;
    
    res.json({"receivedMessage": message});
});

/*
    Method: Delete trip
    Type: delete
    In : Json
    Out : Json
*/

app.delete("/DeleteTrip", (req, res, next) => {
    
    const message = req.body.message;
    
    res.json({"receivedMessage": message});
});

/*{
    Name: "/GetTrip", 
    Type: "Get",
    Out : {},
    Date: "01.01.2025"
}*/

app.delete("/GetTrip/", (req, res, next) => {
    
    const message = req.body.message;
    
    res.json({"receivedMessage": message});
});


class Message {
    constructor(content) {
      this.content = content;
    }
   
    getContent() {
      return this.content;
    }
}