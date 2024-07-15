const express = require('express')
const cors = require('cors')
const server = express();
const mongoose = require('mongoose')
const login = require('./models/Login')
const Helthcarereg = require('./models/Helthcare')
const Parentreg= require('./models/Parent')
const childreg= require('./models/Child')
const addvaccine= require('./models/Addvaccine')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const{ObjectId}=require('bson')



mongoose.connect('mongodb://localhost:27017/childvaccination');

server.use(cors({
    origin: "http://localhost:3000"
}));

server.use(express.json());

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

server.use('/uploads', express.static(path.join(__dirname, 'uploads')));




// login
server.post('/login',(req,res)=>{
    const {username,password}=req.body
    login.login.findOne({username}).then(user=>{
        if(user){
            bcrypt.compare(password,user.password,(error,response)=>{
                if(response){
                    const token=jwt.sign({username:user.username,role:user.role},"jsontoken",{
                        expiresIn:"1d"
                    })
                    return res.json({status:"Success",id:user._id, role:user.role,username:user.username,token:token})
                }else{
                    return res.json({status:"Password is incorrect"})
                    
                }
            })
        }else{
            return res.json({status:"user not exist"})
        }
    })

})

// helthcare registration //


  server.post('/helthcarereg', upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'certificate', maxCount: 1 }
  ]), async (req, res) => {
    const { id, empname, email,username,password,phoneno, address, place} = req.body;
    const photo = req.files['photo'];
    const role="healthcare"
  console.log(photo);
  console.log(username);
  console.log(password);
    try {
      const existingUser = await Helthcarereg.Helthcarereg.findOne({ username });
      if (existingUser) {
        return res.json({
          status: "user already exists"
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const commonData = await login.login.create({
        username, password: hashedPassword, role
      });
      await Helthcarereg.Helthcarereg.create({
        logindetail: commonData._id, id, role,photo, empname, email,phoneno, address, place
      });
      return res.json({
        status: "status ok"
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json("error occurred");
    }
  });


  // parent registration //
  
  server.post('/parentreg', upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'certificate', maxCount: 1 }
  ]), async (req, res) => {
    const { id, empname, email,dateofbirth,maritalstatus,username,password, age, gender, phoneno, housename, place, post, pincode } = req.body;
    const photo = req.files['photo'];
    const role="Parent"
  // console.log(photo);
  // console.log(username);
  // console.log(password);
    try {
      const existingUser = await Parentreg.Parentreg.findOne({ username });
      if (existingUser) {
        return res.json({
          status: "user already exists"
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const commonData = await login.login.create({
        username, password: hashedPassword, role
      });
      await Parentreg.Parentreg.create({
        logindetail: commonData._id, id, role,photo, empname, email,dateofbirth,maritalstatus,age, gender, phoneno, housename, place, post, pincode
      });
      return res.json({
        status: "status ok"
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json("error occurred");
    }
  });


  // child registration //
  server.post('/childregister/:id', upload.single('photo'), async (req, res) => {
    const parentid = req.params.id; // Assuming you want to capture the id from URL params
    const { empname, Role, dateofbirth, medicalhistory,healthid,vaccineid } = req.body;
    const photo = req.file; // Access the photo using req.file
    const healthsid=new ObjectId(healthid)
    console.log(healthsid);
    try {
        await childreg.Childreg.create({
            parentid,
            photo,
            empname,
            Role,
            dateofbirth,
            medicalhistory,
            healthid,
            vaccineid
        });

        return res.json({
            status: "ok"
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "An error occurred" });
    }
});


// addvaccine //


server.post(`/addvaccine/:id`,async(req,res)=>{
  const id=req.params
  console.log(id);
  const {vaccinetype,manufacturer,
    dosesrequired,
    description,agerange }=req.body
    const healthid=new ObjectId(id)
    console.log(agerange);
    try {
      await addvaccine.Addvaccinereg.create({
        vaccinetype,manufacturer,
        dosesrequired,
        description,
      agerange,
        healthid
      });

      return res.json({
          status: "ok"
      });
  } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "An error occurred" });
  }
})


// vaccine get//

server.get('/vaccinedel',async(req,res)=>{
 try {
  const vaccindel=await addvaccine.Addvaccinereg.find()
  res.json(vaccindel)
 } catch (error) {
  
 }
})