
const dotenv = require("dotenv");
dotenv.config();


var path = require("path");


const express = require("express");
const app = express();
const mockAPIResponse = require("./mockAPI.js");


app.use(express.static("dist"));


const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

console.log(__dirname);


const cors = require("cors");
app.use(cors());


const axios = require("axios");


app.get("/", function (req, res) {
  //res.sendFile("dist/index.html");
  res.sendFile(path.resolve("src/client/views/index.html"));
});

const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'


app.get("/scan/*", async (req, res) => {
  try {
    
    const url = req.params[0];
    const fullURL = `${BASE_API_URL}?key=${process.env.API_KEY}&url=${url}&lang=en`
    const apiResponse = await axios.get(
      `${BASE_API_URL}?key=${process.env.API_KEY}&url=${url}&lang=en`
    );
    
    const { sentence_list, agreement, subjectivity, confidence, irony } = apiResponse.data;
    res.send({
      sentence_list,
      agreement,
      subjectivity,
      confidence,
      irony,
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(8081, function () {
  console.log("Server is running on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
