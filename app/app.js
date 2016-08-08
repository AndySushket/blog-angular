var app = angular.module("MyApp", [])
app.controller("myController", function ($scope) {
    $scope.LogIn = {
        name: "aaa"
        , password: "aaa"
    };

    $scope.topicArr = [{
        Topic: "Xaxa"
        , message: "XaXa"
        , user: "Ellyson"
        , time: '"2016-08-08T13:56:38.263Z"'
    }];

    $scope.send = function () { //adding new topic
        $scope.topicArr.push({
            Topic: $scope.Topic
            , message: $scope.Message
            , user: $scope.user
            , time: new Date()
        });
        $scope.Topic = '';
        $scope.Message = '';
    }
    $scope.delete = function (index) { //deleting 
        $scope.topicArr.splice(index, 1);
    };
    $scope.edit = function (index) { //edit 
        $(".background").css({display: "block"}).animate({opacity: "0.5"}, 1000);
        $(".edit").css({display: "block"});
        $(".edit").animate({top: "0px"}, 1000);
        $scope.editTopic = $scope.topicArr[index].Topic;
        $scope.editMessage = $scope.topicArr[index].message;
        $scope.index = index;

    };

    $scope.asGuest = function () {
        $(".background").animate({opacity: "0"});
        $(".start").animate({top: "-200px"}, 1000);
        setTimeout(function () {
            $(".start").css({display: "none"});
            $(".background").css({display: "none"});
        }, 1000);
        $scope.user = "Guest";
        $scope.start = false;

    };
    $scope.login = function () {
        if ($scope.LogIn.name == $scope.userName && $scope.password == $scope.LogIn.password) {
            $(".background").animate({opacity: "0"});
            $(".start").animate({top: "-200px"}, 1000);
            setTimeout(function () {
                $(".background").css({display: "none"});
            }, 1000);
            $scope.user = $scope.userName;
        } else alert("wrong");
    };
    //
    $scope.save = function () { //saving edit
        $(".background").animate({opacity: "0"});
        $(".edit").animate({top: "-200px"}, 1000);
        setTimeout(function () {
            $(".edit").css({display: "none"});
            $(".background").css({display: "none"});
        }, 1000);
        $scope.topicArr[$scope.index].Topic = $scope.editTopic;
        $scope.topicArr[$scope.index].message = $scope.editMessage;
    };
})
