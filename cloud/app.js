/*
 * Provide a debug API to varsom-parse
 */
 
var express = require('express');
var app = express();

app.get('/avalanche/RegionSummary/Detail/1', function(req, res) {
    var data = JSON.stringify(require('cloud/avalanche-warning.js'));
    res.set({
        'Content-Type': 'application/json; charset=utf-8'
    });
    res.send(data);
});

app.get('/flood/CountySummary/1', function (req, res) {
    var data = JSON.stringify(require('cloud/flood-warning.js'));
    res.set({
        'Content-Type': 'application/json; charset=utf-8'
    });
    res.send(data);
});

app.get('/landslide/CountySummary/1', function (req, res) {
    var data = JSON.stringify(require('cloud/landslide-warning.js'));
    res.set({
        'Content-Type': 'application/json; charset=utf-8'
    });
    res.send(data);
});

app.listen();
