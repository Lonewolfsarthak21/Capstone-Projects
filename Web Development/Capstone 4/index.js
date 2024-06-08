import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
// noinspection SpellCheckingInspection
const API_KEY = "1";
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', async (req, res) => {
    try{
        const response = await axios.get("https://www.themealdb.com/api/json/v1/" + API_KEY + "/random.php");
        res.render('index.ejs', {data: response.data.meals[0]});
    }catch(e){
        console.error(e.response.data);
        res.status(500);
    }
    res.render('index.ejs');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
