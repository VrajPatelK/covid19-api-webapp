const URL = "https://disease.sh/v3/covid-19/countries";

let app = angular.module("myApp", []);

app.controller('myCntrl', ($scope, $http) => {

    // title
    $scope.title = "Stay Home Stay Safe";
    
    // page-title
    $scope.page_title = "COVID-19 API";

    // guidlines
    $scope.guidelines = [
        'Wear a mask',
        'Practice social distancing',
        'Wash your hands frequently',
        'Stay home if you are sick',
        'Get vaccinated',
        'Follow local guidelines'
    ]

    // search country
    $scope.getCountryData = () => {
        let country_name = $scope.country_name;
        if (country_name == '') {
            $scope.country_name = undefined;
            return;
        }

        $http.get(`${URL}/${country_name}`).then(
            (response) => {
                $scope.cname = country_name;
                $scope.country_data = response.data;
            },
            (error) => { console.log(error); }
        );
    }
});
