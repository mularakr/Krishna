(function(angular, qlik) {
    "use strict";

    angular.module((qlik && qlik.bootstrapApp) || 'qlik-angular')
        .controller('SalesTrackerController', SalesTrackerController);

    SalesTrackerController.$inject = ['$scope', 'QlikSenseAppsService'];

    function SalesTrackerController($scope, qsApps) {

        function init() {
            qsApps.openApp('5f5b7cf0-ea5f-47d1-9583-06a494dcbbb2').then(function(app) {
                app.getObject('QVSEL', 'CurrentSelections');

                app.getObject('QV01', 'a99ec168-d761-4d0b-83a5-b35a9a285b17');
                app.getObject('QV02', '16066ad1-b0b8-4f34-80af-8866e32aef73');
                app.getObject('QV03', '8af68a90-b3d7-4e36-88ab-1cdd46ff47c9');
                app.getObject('QV04', 'vEdPNw');
                app.getObject('QV05', '88377b3d-dd11-4a24-bbec-47f36e248b36');
                app.getObject('QV06', 'FAVYLN');
                app.getObject('QV07', '7e784f70-86b4-48c2-96bb-87c5a5befc89');
                app.getObject('QV08', 'ec7d4f91-6195-43c6-8de8-3efef46fb4da');
                app.getObject('QV09', '536ba63e-50c1-4ce4-8b6f-6cef13e61ad4');
                app.getObject('QV10', 'LpqmxFa');
                app.getObject('QV11', 'uMEZjz');
                app.getObject('QV12', '2cf20bac-4070-4dcc-aa16-262831e08b01');
                app.getObject('QV13', '3cd185d1-6b3b-4f47-b4c8-095a9de48bb1');
                app.getObject('QV14', '751b02da-377f-4b1a-b2c5-22fbd6889651');
                app.getObject('QV15', 'cad145e2-8473-40ba-96f9-8abd42082604');

            });

        }

        init();
    }
})(window.angular, window.qlik);