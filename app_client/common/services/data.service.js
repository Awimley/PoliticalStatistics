(function () {
  angular.module('pstat')
         .service('dataService', dataService);

  dataService.$inject = ['$log', '$http'];
  function dataService ($log, $http) {
    var jsonData = function (data, limit) {
      var dataz = JSON.stringify(data);
      return $http.get('/api/jsonData', {params: {
        data: dataz,
        limit: limit
      }});
    };

    var getMeta = function (req) {
      return $http.get('/api/getMeta');
    };

    var verifyUser = function (request) {
      return $http.post('/api/verifyUser', request);
    };

    var tryLogin = function (request) {
      return $http.post('/api/tryLogin', request);
    };

    var exportData = function (data) {
      return $http.get('/api/exportData', {params: {
        data: data
      }});
    }

    var tsvData = function (q) {
      var dataz = JSON.stringify(q);
      return $http.get('/api/tsvData', {params: {
        data: dataz
      }});
    }

    return {
      jsonData    : jsonData,
      getMeta     : getMeta,
      verifyUser  : verifyUser,
      tryLogin    : tryLogin,
      exportData  : exportData,
      tsvData     : tsvData
    };
  };
})()