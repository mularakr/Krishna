(function(angular, config) {
    "use strict";

    /***
    Metronic AngularJS App Main Script
    ***/

    /* Metronic App */
    var MetronicApp = angular.module(config.bootstrapApp, [
        "ui.router",
        "ui.bootstrap",
        "oc.lazyLoad",
        "ngSanitize"
    ]);

    /* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
    MetronicApp.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            // global configs go here
        });
    }]);

    /* Setup global settings */
    MetronicApp.factory('settings', ['$rootScope', function($rootScope) {
        // supported languages
        var settings = {
            layout: {
                pageSidebarClosed: false, // sidebar menu state
                pageContentWhite: true, // set page content layout
                pageBodySolid: false, // solid body color state
                pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
            },
            assetsPath: '../assets',
            globalPath: '../assets/global',
            layoutPath: '../assets/layouts/layout4',
        };

        $rootScope.settings = settings;

        return settings;
    }]);

    /* Setup App Main Controller */
    MetronicApp.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.$on('$viewContentLoaded', function() {
            //App.initComponents(); // init core components
            //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive 
        });
    }]);

    /***
    Layout Partials.
    By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial 
    initialization can be disabled and Layout.init() should be called on page load complete as explained above.
    ***/

    /* Setup Layout Part - Header */
    MetronicApp.controller('HeaderController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {
            Layout.initHeader(); // init header
        });
    }]);

    /* Setup Layout Part - Sidebar */
    MetronicApp.controller('SidebarController', ['$state', '$scope', function($state, $scope) {
        $scope.$on('$includeContentLoaded', function() {
            Layout.initSidebar($state); // init sidebar
        });
    }]);

    /* Setup Layout Part - Sidebar */
    MetronicApp.controller('PageHeadController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {});
    }]);

    /* Setup Layout Part - Footer */
    MetronicApp.controller('FooterController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {
            Layout.initFooter(); // init footer
        });
    }]);

    /* Setup Routing For All Pages */
    MetronicApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        // Redirect any unmatched url
        $urlRouterProvider.otherwise("/home");

        $stateProvider
        // Content Injection
            .state('content-injection', {
            templateUrl: "views/content-injection.html",
            controller: "ContentInjectionController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: config.bootstrapApp,
                        files: [
                            'js/controllers/ContentInjectionController.js',
                        ]
                    }]);
                }]
            }
        })

        // Home
        .state('home', {
            parent: 'content-injection',
            url: "/home",
            views: {
                "portlet-body": {
                    templateUrl: "views/blank.html",
                    controller: "BlankController"
                }
            },
            data: { pageTitle: 'Home' },
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: config.bootstrapApp,
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'js/controllers/BlankController.js'
                        ]
                    });
                }]
            }
        })

        // Qlik Sense Mashups Injection
        .state('qlik-sense-mashups', {
            parent: 'content-injection',
            views: {
                "portlet-body": {
                    template: '<div ui-view="qs-portlet"></div>'
                }
            },
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'QlikSenseService',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            'https://' + config.qlikSenseDomain + '/resources/autogenerated/qlik-styles.css',
                            'qlik-sense-mashups/css/mashup-base.css'
                        ]
                    }, {
                        name: 'QlikSenseService',
                        files: [
                            'qlik-sense-mashups/services/QlikSenseAppsService.js'
                        ]
                    }]);
                }]
            }
        })

        // Sales Tracker
        .state('sales-tracker', {
            parent: 'qlik-sense-mashups',
            url: "/sales-tracker",
            views: {
                "qs-portlet": {
                    templateUrl: "qlik-sense-mashups/pages/sales-tracker.html",
                    controller: "SalesTrackerController"
                }
            },
            data: {
                pageTitle: 'Sales Tracker',
                lineage: [{
                    sref: "home",
                    title: "Home"
                }]
            },
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'QlikSenseService',
                        files: [
                            'qlik-sense-mashups/pages/SalesTrackerController.js'
                        ]
                    }]);
                }]
            }
        })

        .state('sales-tracker.brand-overview', {
            parent: 'qlik-sense-mashups',
            url: "/brand-overview",
            views: {
                "qs-portlet": {
                    templateUrl: "qlik-sense-mashups/pages/sales-tracker/brand-overview.html",
                    controller: "BrandOverviewController"
                }
            },
            data: {
                pageTitle: 'Brand Overview',
                lineage: [{
                    sref: "home",
                    title: "Home"
                }, {
                    sref: "sales-tracker",
                    title: "Sales Tracker"
                }]
            },
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'QlikSenseService',
                        files: [
                            'qlik-sense-mashups/pages/sales-tracker/BrandOverviewController.js'
                        ]
                    }]);
                }]
            }
        })

        .state('sales-tracker.actual-vs-target', {
            parent: 'qlik-sense-mashups',
            url: "/actual-vs-target",
            views: {
                "qs-portlet": {
                    templateUrl: "qlik-sense-mashups/pages/sales-tracker/actual-vs-target.html",
                    controller: "ActualVsTargetController"
                }
            },
            data: {
                pageTitle: 'Actual vs. Target',
                lineage: [{
                    sref: "home",
                    title: "Home"
                }, {
                    sref: "sales-tracker",
                    title: "Sales Tracker"
                }]
            },
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'QlikSenseService',
                        files: [
                            'qlik-sense-mashups/pages/sales-tracker/ActualVsTargetController.js'
                        ]
                    }]);
                }]
            }
        })


        // User Profile
        .state("profile", {
            url: "/profile",
            templateUrl: "views/profile/account.html",
            data: { pageTitle: 'User Account' },
            controller: "UserProfileController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: config.bootstrapApp,
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/pages/css/profile.min.css',
                            '../assets/pages/scripts/profile.min.js',

                            'js/controllers/UserProfileController.js'
                        ]
                    });
                }]
            }
        });

    }]);

    /* Init global settings and run the app */
    MetronicApp.run(["$rootScope", "settings", "$state", function($rootScope, settings, $state) {
        $rootScope.$state = $state; // state to be accessed from view
        $rootScope.$settings = settings; // state to be accessed from view
    }]);
})(window.angular, window.config);