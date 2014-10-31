# Debug API for varsom-parse

Note that the data files must be .js, and the json exported with "module.exports =", in order for it to function with parse.

## Avalanche warnings

    GET /avalanche/RegionSummary/Detail/1

returns data from

    cloud/avalanche-warning.js


## Flood warnings

    GET /flood/CountySummary/1

returns data from

    cloud/flood-warning.js

## Landslide warnings

    GET /landslide/CountySummary/1

returns data from

    cloud/landslide-warning.js
