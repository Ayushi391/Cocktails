import express from "express";
import axios from "axios";
const app=express();
const port=3000;

app.use(express.static("public"));
// app.get("/",(req, res)=>{
//     res.render("index.ejs");
// })

app.get("/",async(req, res)=>{
    try{
        const response=await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const cocktail=response.data.drinks[0];

        const happyQuotes = [
            "Life is better with a cocktail!",
            "Sip, sip, hooray!",
            "Cocktails: Because no great story starts with a salad.",
            "Cheers to the moments we'll never remember with the friends we'll never forget!",
            "The best cocktails are ones we drink with friends.",
            "I have mixed Drinks about feelings.",
            "Trust me you can dance (🍾-Vodka)"
          ];
          const randomQuote = happyQuotes[Math.floor(Math.random() * happyQuotes.length)];
      
        res.render("index.ejs",{ cocktail ,quote:randomQuote ,error:null })
    } catch (error) {
        res.render("index.ejs", { drinks: null, error: 'Drink not found' });
      }

});

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})