import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const currentDate = now.getDate();

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const currentMonthName = monthNames[currentMonth];

app.get("/", (req, res) => {
    res.render("index.ejs", {Date : currentDate, month : currentMonthName, year : currentYear});
})


app.get("/create", (req, res) => {
    res.render("create.ejs");
})

app.listen(port, () => {
    console.log(`Started Port: ${port}`);
})
