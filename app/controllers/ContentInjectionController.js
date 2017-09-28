(function(angular) {
    "use strict";

    angular.module('MetronicApp')
        .controller('ContentInjectionController', ContentInjectionController);

    ContentInjectionController.$inject = [
        '$rootScope',
        '$scope',
        'settings'
    ];

    function ContentInjectionController($rootScope, $scope, settings) {

        $scope.$on('$viewContentLoaded', function() {
            console.log("ContentInjectionController - $viewContentLoaded", { $rootScope, $scope, settings });
            // initialize core components
            // App.initAjax();

            // set default layout mode
            $rootScope.settings.layout.pageContentWhite = true;
            $rootScope.settings.layout.pageBodySolid = false;
            $rootScope.settings.layout.pageSidebarClosed = false;
        });
    }
})(window.angular);