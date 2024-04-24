const express = require("express");
const bodyParser = require("body-parser");
const elasticClient = require("./elastic-client");

const app = express();

app.use(bodyParser.json());

app.listen(8090, async (err) => {
    if (err) {
        console.log(err);
    }

    const resp = await elasticClient.info();

    console.log(resp);
});
