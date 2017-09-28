(function(angular, qlik) {
    "use strict";

    angular.module((qlik && qlik.bootstrapApp) || 'qlik-angular')
        .controller('BrandOverviewController', BrandOverviewController);

    BrandOverviewController.$inject = ['$scope', 'QlikSenseAppsService'];

    function BrandOverviewController($scope, qsApps) {

        function init() {
            qsApps.openApp('5f5b7cf0-ea5f-47d1-9583-06a494dcbbb2').then(function(app) {
                app.getObject('QVSEL', 'CurrentSelections');

                app.getObject('QV01', 'f72e2769-f046-4bd7-b36b-35d8e0fe21d9');
                app.getObject('QV02', 'mJXPZDS');
                app.getObject('QV03', '71ddf15e-a29d-47ae-b15f-f57998c0ba62');
                app.getObject('QV04', '3d278163-de02-4180-8853-3b4ee25c9900');
                app.getObject('QV05', '8ddcfdf6-a277-486c-9146-80a7b1279482');
                app.getObject('QV06', 'JqNPkKF');
                app.getObject('QV07', 'e15b08b4-4e8d-410f-b61f-a54399727abe');
                app.getObject('QV08', 'BJJRv');
                app.getObject('QV09', '4095b616-6907-463f-8f36-921621669bc0');
                app.getObject('QV10', 'gzUHTRg');
                app.getObject('QV11', '14fd0c75-70fd-43c1-a7ad-f168429b9295');
                app.getObject('QV12', 'KBEfN');
                app.getObject('QV13', '638608ff-7d9b-4959-b678-67907e9fa299');
                app.getObject('QV14', 'njjJTb');
            });

        }

        init();
    }
})(window.angular, window.qlik);