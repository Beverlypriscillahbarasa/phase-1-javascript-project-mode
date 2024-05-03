document.addEventListener("DOMContentLoaded", function () {
    // Get references to navigation links
    var homeLink = document.getElementById("home");
    var aboutLink = document.getElementById("about");
    var servicesLink = document.getElementById("services");
    var profileLink = document.getElementById("profile");

    // Add event listeners to navigation links
    homeLink.addEventListener("click", function () {
        // Handle click on Home link
        console.log("Home link clicked");
        // Add code to navigate to home page or show home content
    });

    aboutLink.addEventListener("click", function () {
        // Handle click on About Us link
        console.log("About Us link clicked");
        // Add code to navigate to About Us page or show About Us content
    });

    servicesLink.addEventListener("click", function () {
        // Handle click on Services link
        console.log("Services link clicked");
        // Add code to navigate to Services page or show Services content
    });

    profileLink.addEventListener("click", function () {
        // Handle click on My Profile link
        console.log("My Profile link clicked");
        // Add code to navigate to My Profile page or show My Profile content
    });
});

const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://www.googleapis.com/geolocation/v1/geolocate", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

document.addEventListener("DOMContentLoaded", function () {
    // Get references to navigation links
    var CallanAmbulanceLink = document.getElementById("Call an Ambulance");
    var GetaTowTruckLink = document.getElementById("Get a Tow-Truck");
    var NearestHospitalLink = document.getElementById("Nearest Hospital");
    var NearestGaradgeLink = document.getElementById("Nearest Garadge");
    var NearestPoliceStationLink = document.getElementById("Nearest Police Station");
    var CallanadvocateLink = document.getElementById("Call an advocate");

    CallanAmbulanceLink.addEventListener("click", function () {
        // Handle click on Home link
        console.log("Call an Ambulance Link clicked");
        // Add code to navigate to home page or show home content
    });

    GetaTowTruckLink.addEventListener("click", function () {
        // Handle click on Home link
        console.log("Get a Tow-Truck Link clicked");
        // Add code to navigate to home page or show home content
    });

    // document.addEventListener("DOMContentLoaded", function() {
        const nearestHospitalButton = document.getElementById("nearestHospitalButton");
        nearestHospitalButton.addEventListener("click", function() {
            // Redirect the user to the website of the nearest hospital
            wind.location.href = "https://support.google.com/maps/answer/144339?hl=en&co=GENIE.Platform%3DAndroid"; // Replace "https://example.com/nearest-hospital" with the actual URL of the nearest hospital's website
        });
    });
    

    NearestGaradgeLink.addEventListener("click", function () {
        // Handle click on Home link
        console.log("Nearest Garadge Link clicked");
        // Add code to navigate to home page or show home content
    });

    NearestPoliceStationLink.addEventListener("click", function () {
        // Handle click on Home link
        console.log("Nearest Police Station Link clicked");
        // Add code to navigate to home page or show home content
    });
    
    CallanadvocateLink.addEventListener("click", function () {
        // NenkarestPoliceStationLi Handle click on Home link
        console.log("Call an advocate Link clicked");
        // Add code to navigate to home page or show home content
    });


