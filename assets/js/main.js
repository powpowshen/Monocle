// Set up module management
requirejs.config({
    //By default load any component from assets
    baseUrl: 'assets',
    //except, if the component starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        'jquery': 'js/lib/jquery-1.7.2.min',
        'underscore': 'js/lib/underscore-min',
        'backbone': 'js/lib/backbone-min',
        'backbone-mvc': 'js/lib/backbone-mvc',
        'handlebars': 'js/lib/handlebars.runtime',
        // Plugins
        'css': 'js/lib/css'
    },
    shim: {
        'backbone': ['jquery', 'underscore'],
        'backbone-mvc': ['jquery', 'underscore', 'backbone']
    }
});

require(['backbone', 'backbone-mvc', 'js/controllers/AppCtrl'], function(_Backbone, _BackboneMVC, AppCtrl) {
    $(document).ready(function() {
        // Start the new automatic router and Backbone.history.
        var router = new BackboneMVC.Router();
        Backbone.history.start();
        // Just invoke controllers to create whole app.
        var appCtrl = new AppCtrl();
    });
});