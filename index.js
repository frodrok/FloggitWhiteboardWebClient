var express = require('express');

var app = express();
var path = require('path');

var React = require('react');
var ReactDOM = require('react-dom/server');
var DOM = React.DOM, body = DOM.body, div = DOM.div, script = DOM.script;

var App = React.createFactory(require('./src/js/components/addPostIt'));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/nodetest', express.static(path.join(__dirname, 'public/n')));

app.get('/nudd', function (req, res) {
    // var html = ReactDOM.renderToStaticMarkup(App);

    // var html = ReactDOM.renderToStaticMarkup(
    //     body(null,
    //         div(div(), div(), div())
    //     )
    // );
    var html = ReactDOM.renderToStaticMarkup(body(null,

        div({id: 'content', dangerouslySetInnerHTML: {__html:
            ReactDOM.renderToString(App({}))
        }}),

    script({src: '//cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react.min.js'}),
        script({src: '//cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react-dom.min.js'})

    ));

    res.send(html);
});

app.listen(8081);

console.log("listening on port 8081");