(function(angular, config) {
    "use strict";

    var deferred = $.Deferred();

    var qlikConfig = {
        host: config.qlikSenseDomain,
        prefix: '/',
        port: 443,
        isSecure: true
    };

    var qs = {
        apiPromise: deferred.promise(),
        config: qlikConfig
    };

    require.config({
        baseUrl: (qlikConfig.isSecure ? "https://" : "http://") + qlikConfig.host + (qlikConfig.port ? ":" + qlikConfig.port : "") + qlikConfig.prefix + "resources"
    });

    require(["js/qlik"], function(api) {
        var modules = ['qlik-angular'];
        if (config && config.bootstrapApp) {
            modules.push(config.bootstrapApp);
        }
        angular.bootstrap(document, modules);

        api.setOnError(function(error) {
            console.log(error.message, { error });
        });

        qs.api = api;
        deferred.resolve(api);
    });

    console.log('QlikSenseService.js', { config, qs });

    angular.module((config && config.bootstrapApp) || 'qlik-angular')
        .service('QlikSenseService', function() { return qs; });

})(window.angular, window.config);