'use strict';

angular.module('devicesManagerApp')
  .controller('AddModalCtrl', function ($scope, $rootScope, $modalInstance, device) {
  	$scope.errors = [];
  	$scope.deviceName = device;
  	$scope.title = "";

  	// set dialog title to edit or add depending on device property
    if ($scope.deviceName) {
      $scope.title = "Edit device"
    } else {
      $scope.title = "Add a new device"
    }

    /*
     * Handle cancel button. Dismisses modal dialog.
     */
  	$scope.cancel = function() {
  		$modalInstance.dismiss();
  	}

    /*
     * Handle ok button. 
	 * Check if text input is null
	 * Detect if user is editing or adding new device
	 * Detect if duplicate device is being added.
	 * Display error if device is duplicate
     */
  	$scope.add = function() {
  		if ($scope.deviceName) {
  			// detect if editing device, but no changes made.
  			if (typeof device != 'undefined' && device === $scope.deviceName) { 
  				$modalInstance.close();
  			}

  			// detect if duplicate device is being added
  			else if (Object.prototype.hasOwnProperty.call($rootScope.devices, $scope.deviceName) ) {
  				$scope.errors.push("Device already exists. Enter different name for device.")
  			}
  			// add new device and close window
  			else {
  				// delete old device name if editing.
  				if (device) {
  					delete $rootScope.devices[device];
  				}
  				// add device and update count
  				$rootScope.devices[$scope.deviceName] = true
  				$rootScope.numDevices = Object.keys($rootScope.devices).length;

          $rootScope.devicesArr = $.map($rootScope.devices, function(value, key) {
              return [key];
          });

  				$modalInstance.close();
  			}
  		}
  	}

  });
