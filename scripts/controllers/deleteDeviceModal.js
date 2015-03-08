'use strict';

angular.module('devicesManagerApp')
  .controller('DeleteModalCtrl', function ($scope, $rootScope, $modalInstance, device) {
  	$scope.errors = [];
  	$scope.deviceName = device;

    /*
     * Handle cancel button. Dismisses modal dialog.
     */
  	$scope.cancel = function() {
  		$modalInstance.dismiss();
  	}

    /*
     * Handle delete(yes) button. 
     * Removes device from object. Updates number of devices. Closes dialog.
     */
  	$scope.delete = function() {
      // delete device and update count
      delete $rootScope.devices[$scope.deviceName];
      $rootScope.numDevices = Object.keys($rootScope.devices).length;
      $rootScope.devicesArr = $.map($rootScope.devices, function(value, key) {
          return [key];
      });
  		$modalInstance.close();

  		
  	}

  });
