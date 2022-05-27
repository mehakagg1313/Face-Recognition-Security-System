
var res=fetch('/api/events/hackathons');
let pr= res.then((res)=>{
    if(res.status!=200){
        return;
    }
    return res.text();
})
pr.then((eventlist)=>{
    var events=JSON.parse(eventlist);
    console.log("events are",events);
    var eventsection=document.getElementById("eventSection")
    if(events.length==0){
        var div=document.createElement("div")
        var hr=document.createElement("hr")
        div.innerHTML=`<h2 class="display-4">Coming Soon</h2>`
        div.style.backgroundColor="#FFFFFF"
        eventsection.append(div);
        eventsection.append(hr)
    }
    for(var i=0;i<events.length;i++){
        var div=document.createElement("div")
        div.classList.add("jumbotron")
        if(i%2==0){
            div.style.backgroundColor="#FFFFFF"
        }
        div.innerHTML=`
                <h2 class="display-4">${events[i].name}</h2>
                <p class="lead">
                    <img class="sizedImg" src="${events[i].imageURL}">
                </p>
                <hr class="my-4">
                <p>${events[i].description}</p>
                <p>Date: ${events[i].date}</p>
                <p>Time: ${events[i].time}</p>
                <p>Venue: ${events[i].venue}</p>
                <div class="myownrow">
                <div class="sizedbox"></div>
                <p class="lead">
                <a class="btn btn-primary btn-lg buttonstyle" href="${events[i].link}" role="button">Register</a>
                </p>
                </div>
        `
        eventsection.append(div);
    }
});