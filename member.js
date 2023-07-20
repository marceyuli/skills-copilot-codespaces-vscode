function skillsMember() {
    return {
        restrict: 'E',
        controller : 'MemberController',
        controllerAs : 'memberCtrl',
        bindToController: true,
        scope: {
            member: '='
        },
        templateUrl: 'views/member.html'
    }
}
