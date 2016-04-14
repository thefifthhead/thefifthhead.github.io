"use strict";angular.module("cakeOrderApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","mgo-angular-wizard","angularjs-datetime-picker","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/start",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/menu",{templateUrl:"views/start.html",controller:"MainCtrl"}).when("/done",{templateUrl:"views/order.html",controller:"DoneCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("cakeOrderApp").controller("MainCtrl",["$scope","$http","corder","$location",function(a,b,c,d){function e(a){return a=a.replace(/ /g,""),a=a.toLowerCase()}a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.order={},a.order.size="",a.order.icingType="",a.order.icingColors="",a.order.flowerOrBalloonColor=[],a.setSize=function(b){a.order.size=b},a.done=function(){c.model=a.order,d.path("/done")},a.setFBColor=function(b){if(a.highlightFBColor(b)){var c=a.order.flowerOrBalloonColor.indexOf(b);return void a.order.flowerOrBalloonColor.splice(c,1)}return a.highlightFBColor(b)||3!==a.order.flowerOrBalloonColor.length?void a.order.flowerOrBalloonColor.push(b):(a.order.flowerOrBalloonColor.pop(),void a.order.flowerOrBalloonColor.push(b))},a.highlightFBColor=function(b){for(var c=0;c<a.order.flowerOrBalloonColor.length;c++)if(b==a.order.flowerOrBalloonColor[c])return!0;return!1},a.order.icingColors=[{color:"Green Mist",icingType:"whipped"},{color:"Green",icingType:"whipped"},{color:"Petal Pink",icingType:"whipped"},{color:"Pink",icingType:"whipped"},{color:"Blue",icingType:"whipped"},{color:"Dark Blue",icingType:"whipped"},{color:"Lavender",icingType:"whipped"},{color:"Red",icingType:"whipped"},{color:"Orange",icingType:"whipped"},{color:"Yellow",icingType:"whipped"},{color:"Spring Yellow",icingType:"whipped"},{color:"White",icingType:"whipped"},{color:"Chocolate",icingType:"whipped"},{color:"Asparagus Green",icingType:"but-r-creme"},{color:"Green",icingType:"but-r-creme"},{color:"Thread Pink",icingType:"but-r-creme"},{color:"Hot Pink",icingType:"but-r-creme"},{color:"Teal",icingType:"but-r-creme"},{color:"Royal Blue",icingType:"but-r-creme"},{color:"Purple Iris",icingType:"but-r-creme"},{color:"Red",icingType:"but-r-creme"},{color:"Neon Orange",icingType:"but-r-creme"},{color:"Amaryllis Yellow",icingType:"but-r-creme"},{color:"Yellow",icingType:"but-r-creme"},{color:"Bright Green",icingType:"but-r-creme"},{color:"Coral",icingType:"but-r-creme"},{color:"Maroon",icingType:"but-r-creme"},{color:"Black",icingType:"but-r-creme"},{color:"White",icingType:"but-r-creme"},{color:"Blue",icingType:"but-r-creme"},{color:"Chocolate",icingType:"but-r-creme"}];for(var f=a.order.icingColors.length,g=0;f>g;g++){var h="images/sc_icing_",i=e(a.order.icingColors[g].icingType).replace(/-/g,""),j=e(a.order.icingColors[g].color);h+=i+"_"+j+".png",a.order.icingColors[g].image=h}}]),angular.module("cakeOrderApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("cakeOrderApp").service("corder",function(){}),angular.module("cakeOrderApp").controller("DoneCtrl",["$scope","$http","corder","$location",function(a,b,c,d){a.order=c.model}]);