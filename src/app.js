var app = {
    title: "Indecision App",
    subtitlie: "refresher!"
};


var template = (
<div>
    <h1>{app.title}</h1>
    <p>{app.subtitlie}</p>
</div>
);



var user = {
    name: "Mike",
    age: 21,
    location: "Krakow"
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    } 
}

var templateTwo = (
    <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);

console.log("test is running");