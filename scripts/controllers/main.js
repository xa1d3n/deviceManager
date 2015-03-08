'use strict';

angular.module('devicesManagerApp')
  .controller('MainCtrl', function ($scope, $rootScope, $modal) {
  	$rootScope.devices = {};
  	$rootScope.devicesArr = [];
  	$rootScope.numDevices = Object.keys($rootScope.devices).length;

  	 /*
     * Opens the add/edit device modal dialog
     * @param {deviceName} string - name of device
     */
  	$scope.addDevice = function(deviceName) {

	  	var modalInstance = $modal.open({
	      templateUrl: '../views/addDeviceModal.html',
	      controller: 'AddModalCtrl',
	      resolve: { // pass data to controller
	        device: function () {
	          return deviceName;
	        }
	      }
	    });
  	}

	/*
     * Opens the delete device modal dialog
     * @param {deviceName} string - name of device
     */
  	$scope.deleteDevice = function(device) {
  		if (device) {
	  		var modalInstance = $modal.open({
		      templateUrl: '../views/deleteDeviceModal.html',
		      controller: 'DeleteModalCtrl',
		      resolve: { // pass data to controller
		        device: function () {
		          return device;
		        }
		    }
	    });
  		}
  	}


  	$scope.filterDevices = function(items) {
        var result = {};
        angular.forEach(items, function(value, key) {
            if (!value.hasOwnProperty(value)) {
                result[key] = value;
            }
        });
        return result;
    }

  });
