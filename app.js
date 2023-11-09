const express = require('express');
const app = express();
const debug = require('debug')('app');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const path = require('path');
const products = require("./data/products.json");
const productsRouter = express.Router();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs")

productsRouter.route("/").get((req, res) => {
    res.render("products", 
        products,
    );
});
productsRouter.route("/1").get((req, res) => {
    res.send("Hello Products 1");
});

app.use("/products", productsRouter)


// ทำการจัดการกับ request ที่เข้ามา
app.get('/', (req, res) => {
    res.render('index', { username: 'Nrp', customer: ["A", "B", "C"] });
})

app.listen(PORT, () => {
    debug(`Server is running on http://localhost:${PORT}`);
});