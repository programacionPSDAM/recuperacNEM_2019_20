const Producto = require('../modelos/producto')

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!')
}
exports.productoPorId = function (req, res) {
    Producto.findById(req.params.id, function (err, product) {
        if (err) return next(err)
        res.send(product)
    })
}
exports.productoTodos = function (req, res) {
    Producto.find(function (err, product) {
        if (err) return next(err)
        res.send(product)
    })
}
exports.borradoPorId = function (req, res) {
    Producto.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!')
    })
}
exports.updatePorId = function (req, res) {
    Producto.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};
exports.crear = function (req, res) {
    let product = new Producto(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};
