import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg"
import bcrypt from 'bcrypt';


const app = express();

const port = 5000;

const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'homify',
    password: '1234',
    port: 5432
})

db.connect();


app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




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

app.post('/api/properties', async (req, res) => {
    try {
        const { 
            name_of_property, 
            address, 
            price, 
            image, 
            type_of_property, 
            transaction, 
            bedroom, 
            bathroom, 
            house_area 
        } = req.body;

        const result = await db.query(
            `INSERT INTO properties (name_of_property, address, price, image, type_of_property, transaction, bedroom, bathroom, house_area) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`, 
            [name_of_property, address, price, image, type_of_property, transaction, bedroom, bathroom, house_area]
        );

        res.json({ message: 'Property saved successfully', data: result.rows[0] });
        
    } catch (error) {
        console.error('Error saving property', error);
        res.status(500).json({ message: 'Error saving property', error: error.message });
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})



