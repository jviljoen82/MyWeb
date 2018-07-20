
class getLoginName {
    constructor(){
        return {
            template : "<p>Login Name: <input type=\"text\" ng-model=\"loginname\"></p>"
        };
    }
}

class getPassword {
    constructor() {
        return {
            template : "<p>Password: <input type=\"text\" ng-model=\"password\"></p?"
        };
    }
}

class instaCntrl {
    constructor($scope) {
        console.log("Hello... instaCntrl contructor, loading");
        this.$scope = $scope;
        this.$scope.count = 0;
        this.$scope.loginAp = () => this.sendLogin($scope);
    }

    sendLogin($scope) {
        console.log("Login Name: ", $scope.loginname);
        console.log("Password: ", $scope.password);
        console.log("==================================");
        console.log("Attempting login");
    }
}