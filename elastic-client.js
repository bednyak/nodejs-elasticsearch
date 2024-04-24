const { Client } = require("@elastic/elasticsearch");
const fs = require("fs")

require("dotenv").config({ path: ".elastic.env" });

console.log(process.env.ELASTIC_CLOUD_ID)

const elasticClient = new Client({

  // node: 'https://d6d13923eab6486d8e1ee8def7090db6.westeurope.azure.elastic-cloud.com:443',
  // auth: {
  //   username: "elastic",
  //   password: "##########"
  // }

  node: 'http://localhost:9200',
  auth: {
    username: "elastic",
    password: "#########"
  },
  // tls: {
  //   // ca: fs.readFileSync( "./ca.crt" ),
  //   rejectUnauthorized: false
  // }
});

module.exports = elasticClient;
