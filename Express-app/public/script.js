//get data from server

fetch("/bye").then((resp) => resp.json()).then((resp) => {
    alert(resp.name)
});


//Send data to server

fetch("hi", {
    method: "post",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({
        name: "Mike"
    })
})