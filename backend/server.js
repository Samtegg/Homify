import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";
import db from './database.js';
import bcrypt from 'bcrypt';
import path from 'path';
import formidable from 'formidable';
import fs from 'fs';
import { fileURLToPath } from 'url';
import multer from 'multer';


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 5000;



app.use(cors())
app.use(bodyParser.json({ limit: '10mb' })); 
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));




app.post('/api/register', async(req, res) => {
    const saltRounds = 10
    try {
        const {name, email, phone, password, role} = req.body
        const emailCheck = await db.query("SELECT * FROM users WHERE email = $1", [email]);
        if(emailCheck.rows.length > 0){
            return res.json({message: 'Email exist', email: email})
        } else{
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const result = await db.query("INSERT INTO users(name, email, phone, password, role ) VALUES($1, $2, $3, $4, $5) RETURNING *", [name, email, phone, hashedPassword, role]);

            return res.json({message: 'Success', data: result.rows[0]})
           
        }
       
        
    } catch (error) {
        console.error('Error inserting data', error);
        res.status(500).json({message: 'Error saving data', error: error.message})
    }
   
    
})

app.post('/api/signin', async(req, res)=> {
    try {
        const {email, password} = req.body;
        const userResult = await db.query("SELECT * FROM users WHERE email = $1", [email])
        if (userResult.rows.length === 0){
            return res.json({message: 'Error, user not found'})
        }

        const user = userResult.rows[0];

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.json({message: 'Wrong Password, The password you entered is wrong'})
        }
        res.json({ message: 'Login successful', user: { id: user.id, name: user.name, email: user.email, role: user.role } });
    } catch (error) {
        
    }
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
       return cb(null, './uploads'); 
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`); 
    }
});

const upload = multer({ storage: storage });

app.use(express.json());

app.post('/api/properties', upload.single('image'), async (req, res) => {
    console.log(req.body);
    
    
    try {
        const { 
            name_of_property, 
            address, 
            price, 
            type_of_property, 
            transaction, 
            no_bedroom, 
            no_bathroom, 
            house_area 
        } = req.body;


        const parsedPrice = isNaN(parseFloat(price)) ? 0 : parseFloat(price); 
        const parsedNoBedroom = isNaN(parseInt(no_bedroom)) ? 0 : parseInt(no_bedroom);
        const parsedNoBathroom = isNaN(parseInt(no_bathroom)) ? 0 : parseInt(no_bathroom);
        const parsedHouseArea = isNaN(parseInt(house_area)) ? 0 : parseInt(house_area);

        const imagePath = req.file ? req.file.path : null;
        console.log('imagePath', imagePath);
        

        const result = await db.query(
            `INSERT INTO properties (name_of_property, address, price, image, type_of_property, transaction, no_bedroom, no_bathroom, house_area) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`, 
            [name_of_property, address, parsedPrice, imagePath, type_of_property, transaction, parsedNoBedroom, parsedNoBathroom, parsedHouseArea]
        );

        res.json({ message: 'Property saved successfully', data: result.rows[0] });
        
    } catch (error) {
        console.error('Error saving property:', error);
        res.status(500).json({ message: 'Error saving property', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})



