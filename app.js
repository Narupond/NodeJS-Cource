const express = require('express');
const app = express();
const debug = require('debug')('app');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const path = require('path');
const productsRouter = express.Router();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs")

productsRouter.route("/").get((req, res) => {
    res.render("products", {
        products: [
            {productTitle: 'น้ำดื่ม 1', productDescription: 'น้ำดื่มสะอาด 1', productPrice: 5},
            {productTitle: 'น้ำดื่ม 2', productDescription: 'น้ำดื่มสะอาด 2', productPrice: 10},
            {productTitle: 'น้ำดื่ม 3', productDescription: 'น้ำดื่มสะอาด 3', productPrice: 15},
            {productTitle: 'น้ำดื่ม 4', productDescription: 'น้ำดื่มสะอาด 4', productPrice: 20},
        ]
    });
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