# Multi-Series Line Chart

A multi-series line chart visualising the temperature of several places in the
Netherlands based on a [`bl.ock`][block] by [**@mbostock**][block-author] (GPL-3.0).

> 💁 This example intentionally does not contain code to clean data.  It’s meant
> to be an exercise in cleaning data skills.

[![][cover]][url]

## Data

The dirty data, from [`knmi.nl`][data-source], is not included in this project.

An example of cleaned data from the same source can be found at
[`example.json`][data-example].

## Features

*   [`d3-array`](https://github.com/d3/d3-array#api-reference)
    — `d3.extent`
    — Array statistics
*   [`d3-axis`](https://github.com/d3/d3-axis#api-reference)
    — `d3.axisBottom` and `d3.axisLeft`
    — Reference marks for scales
*   [`d3-request`](https://github.com/d3/d3-request#api-reference)
    — `d3.text`
    — Loading files
*   [`d3-scale`](https://github.com/d3/d3-scale#api-reference)
    — `d3.scaleTime`, `d3.scaleLinear`, `d3.scaleOrdinal`, and
    `d3.schemeCategory10`
    — Position encodings
*   [`d3-selection`](https://github.com/d3/d3-selection#api-reference)
    — `d3.select`
    — Select elements
*   [`d3-shape`](https://github.com/d3/d3-shape#api-reference)
    — `d3.line` and `d3.curveBasis`
    — Graphical primitives

## License

GPL-3.0 © Titus Wormer

[block]: https://bl.ocks.org/mbostock/3884955

[block-author]: https://github.com/mbostock

[cover]: preview.png

[url]: https://cmda-fe3.github.io/course-17-18/class-3/clean

[data-source]: https://projects.knmi.nl/klimatologie/uurgegevens/selectie.cgi

[data-example]: example.json
