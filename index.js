const express = require('express')
const path = require('path')
const url = require('url');
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(express.json())
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .get('/math', (req, res) => {
        console.log("in /math");
        let first = parseInt(req.query.operand1);
        let second = parseInt(req.query.operand2);
        let operator = decodeURIComponent(req.query.operator);
        let result = calculate(first, second, operator);
        let obj = {
            'first': first,
            'second': second,
            'operator': operator,
            'result': result
        };
        res.render('pages/math', obj);
    })
    .get('/math_service', (req, res) => {
        let first = parseInt(req.query.op1);
        let second = parseInt(req.query.op2);
        let operator = req.query.op;
        let result = calculate(first, second, operator);
        let obj = {
            'first': first,
            'second': second,
            'operator': operator,
            'result': result
        };
        res.setHeader('Content-Type', 'application/json');
        console.log(obj);
        res.send(JSON.stringify(obj));
    })
.listen(PORT, () => console.log(`listening on port ${ PORT }`));

function calculate(x, y, op){
    switch(op){
        case '+':
            return x + y;
        break;
        case '-':
            return x - y;
        break;
        case 'x':
            return x * y;
        break;
        case '/':
            return x / y;
        break;
        default:
            return x + y;
    }
}