
mapboxgl.accessToken =
    "pk.eyJ1IjoiYXJpb24tZHV0dGEiLCJhIjoiY2x3eW45Znp2MWJwODJycXo0anBzMGZmciJ9.yvFW8Ad6y4yxy28SMA_Ytg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })
function successLocation(position) {
    console.log(position)
    setUpMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation(position) {
    console.log(errorLocation)
    setUpMap([-2.24, 53.48])

}

function setUpMap(center) {

    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 12

    });
    //navcontrol
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    //directions plugin
    const directions = new MapboxDirections({
        accessToken: "pk.eyJ1IjoiYXJpb24tZHV0dGEiLCJhIjoiY2x3eW45Znp2MWJwODJycXo0anBzMGZmciJ9.yvFW8Ad6y4yxy28SMA_Ytg",

    })


    newMap.addControl(directions, "top-left")
}
