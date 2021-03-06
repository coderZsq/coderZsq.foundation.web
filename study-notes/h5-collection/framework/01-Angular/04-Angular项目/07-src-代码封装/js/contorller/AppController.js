/**
 * Created by xmg on 4/9.
 */
;(function (angular) {
    angular.module('app').controller("AppController",['$scope','$location','$window',function ($scope,$location,$window) {
        $scope.appTitle = 'webApp';
        $scope.title = '首页';
        // 全局索引
        $scope.index = 0;

        // 规定 true代表显示 false 代表隐藏
        $scope.isShow = true;

        // 接收数据
        $scope.$on('tabbar_notifice',function (e, params) {
            // console.log(params);
            var index = params.index;
            $scope.index = index;

            var title = '首页';
            /*switch (index){
             case 0:
             title = '首页';
             break;
             case 1:
             title = '作者';
             break;
             }*/
            var titleArr = ['首页','作者','栏目','我'];
            //$scope.$broadcast('app_notifice',titleArr[index]);
            $scope.title = titleArr[index];
        })
        // 实时监听 路由发生改变
        // console.log($location.url());
        //$scope.$watch('')
        $scope.location = $location;
        $scope.$watch('location.url()',function (newV, oldV) {
            // /home/list
            var index = newV.toString().indexOf('list');

            if (index == -1){
                // 找不到
                // 详情
                $scope.isShow = false;
            }else {
                // 列表
                $scope.isShow = true;
            }
        })

        // 返回
        $scope.back = function () {
            $window.history.back();
        }
    }])
})(angular);