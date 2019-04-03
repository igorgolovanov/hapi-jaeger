'use strict';

const Jaeger = require('jaeger-client');

const Pkg = require('../package.json');

exports.plugin = {
    name: 'jaeger',
    version: Pkg.version,
    dependencies: ['opentracing'],
    register: async (server, options) => {

    }
};
