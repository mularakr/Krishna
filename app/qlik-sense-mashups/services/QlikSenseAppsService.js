(function(angular, qlik) {
    "use strict";

    angular.module((qlik && qlik.bootstrapApp) || 'qlik-angular')
        .service('QlikSenseAppsService', QlikSenseAppsService);

    QlikSenseAppsService.$inject = ['QlikSenseService'];

    function QlikSenseAppsService(qs) {
        var apps = { lookup: {} };

        function openApp(appId) {
            if (apps.lookup[appId]) {
                return $.when(apps.lookup[appId]);
            }

            return qs.apiPromise
                .then(function() {
                    // qs.api.getAppList(function(list) {
                    //     console.log('getAppList', { list });
                    // }, qs.config);
                    console.log('openApp', { qs, appId });

                    return (apps.lookup[appId] = qs.api.openApp(appId, qs.config));
                });
        }

        return {
            openApp: openApp
        };
    }
})(window.angular, window.qlik);