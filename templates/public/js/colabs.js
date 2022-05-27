
var res=fetch('/api/events/colabs');
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
                <p> AI CLUB IGDTUW <br> collaborated with</>
                <h2 class="display-4">${events[i].organization}</h2>
                <p class="lead">
                    <img class="sizedImg" src="${events[i].imageURL}">
                </p>
                <p>for</p>
                <p>${events[i].event}</p>
                <p class="lead">
                <a class="btn btn-primary btn-lg buttonstyle" href="${events[i].link}" role="button">Visit Website</a>
                </p>
        `
        eventsection.append(div);
    }
});