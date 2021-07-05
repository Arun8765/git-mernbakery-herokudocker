const express = require ('express');
const router = express.Router();
const {Bakery,NewOrder} = require('../models/bakeryModel')

router.get('/' ,(req,res)=>{
    
Bakery.find({})
    .then((data)=>{
      console.log(`Data:`,data);
      res.json(data);
    })
    .catch((error)=>{
      console.log(`error:`,error);
    });
  });

router.get('/orders',(req,res)=>{
  NewOrder.find({status:"ordered"})
    .then((data)=>{
      // console.log(`Data:`,data);
      res.json(data);
    })
    .catch((error)=>{
      console.log(`error:`,error);
    });
  });

  router.get('/outForDel',(req,res)=>{
    NewOrder.find({status:"out_for_delivery"})
      .then((data)=>{
        // console.log(`Data:`,data);
        res.json(data);
      })
      .catch((error)=>{
        console.log(`error:`,error);
      });
    });

router.post('/deleteProduct',(req,res)=>{
  console.log(`The delete request was recieved for id: `,req.body.ind)
  Bakery.deleteOne({_id:req.body.ind},(err)=>{
    if(err) return handleError(err);
  })
  // Tank.deleteOne({ size: 'large' }, function (err) {
  //   if (err) return handleError(err);
  //   // deleted at most one tank document
  // });
})
router.post('/editProd',(req,res)=>{
  const data=req.body;
  console.log(data.name);
  Bakery.updateOne({_id:data.index},{name:data.name,price:data.price,imageurl: data.imageurl },(err,docs)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log("Updated Docs: ",docs);
    }
  })
});

// Update the status
router.post('/changeStat',(req,res)=>{
 
  const data=req.body;
  console.log("Req.body:",data);
  // console.log("Datalog from change Stat: ",data);

  NewOrder.updateOne({_id:data.id},{status: data.status },(err,docs)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log("Updated Docs: ",docs);
    }
  })
});


router.post('/save',(req,res)=>{
    console.log('Body: ',req.body);
    const data= req.body;
    const newBakery = new Bakery(data);


  //   const newOrder = new NewOrder({
  //     username: "Samuel",
  //     phoneNo: "9876543210",
  //     status: "ordered",
  //     totalAmt: 600,
  //     items: [{
  //       name: "Cake",
  //       qty: 2,
  //       price: 300
  //     }]
  //   })
  
    newBakery.save((error)=>{
        if (error){
            res.status(500).json({msg: 'Sorry internal server errors'});
        return;
        }
        return  res.json({msg:"The data was recieved"});
    })
    
});

  router.get('/another' ,(req,res)=>{
    const data= {
      name: "Ashik",
      age: 20
    };
    res.json (data)
  });

module.exports= router;

 // "proxy": "http://localhost:8080"