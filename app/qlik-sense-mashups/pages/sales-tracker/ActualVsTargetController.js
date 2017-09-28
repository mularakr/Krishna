(function(angular, qlik) {
    "use strict";

    angular.module((qlik && qlik.bootstrapApp) || 'qlik-angular')
        .controller('ActualVsTargetController', ActualVsTargetController);

    ActualVsTargetController.$inject = ['$scope', 'QlikSenseAppsService'];

    function ActualVsTargetController($scope, qsApps) {

        function init() {
            qsApps.openApp('5f5b7cf0-ea5f-47d1-9583-06a494dcbbb2').then(function(app) {
                app.getObject('QVSEL', 'CurrentSelections');
                app.getObject('QV01', 'ec268d9e-8247-4134-9a6b-84b2aa8ca1ba');
                app.getObject('QV02', '297be511-f798-4149-8a8b-12d6d50d9023');
                app.getObject('QV03', '24db1beb-dc6e-43f2-9d21-9d48eb9e648a');
                app.getObject('QV04', '3ea1d902-0443-44d3-a3c4-403f110607be');
                app.getObject('QV05', 'cZh');
                app.getObject('QV06', 'a8595e09-93dc-407e-b28e-cd0300c0f314');
                app.getObject('QV07', 'd8b2f351-f787-42ff-89d9-4666b0a89b12');
                app.getObject('QV08', 'pvCXXYd');
                app.getObject('QV09', 'ZUzSj');
                app.getObject('QV10', '6752ca52-a750-4e79-8be4-245d48520d7b');
                app.getObject('QV11', '0cc607f6-dc04-4515-8362-48c4508e8d81');
            });

        }

        init();
    }
})(window.angular, window.qlik);