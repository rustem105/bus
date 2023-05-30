const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const app = express();
const DB = require('./database');

const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "4000mb"}));
app.use(bodyParser.urlencoded({limit: "4000mb", extended: true, parameterLimit:5000000}));


DB.sync();
// DB.sync({force: true});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    res.send("Hello JPTV20");
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

require("./Routes/authRoutes")(app);
require("./Routes/tbusRoute")(app);
require("./Routes/tbustimeRoute")(app);
require("./Routes/tdriverRoute")(app);
require("./Routes/treisRoute")(app);
require("./Routes/trouteRoute")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});