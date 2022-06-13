const endpoint = `https://api.unsplash.com/photos/random/?client_id=49J6Wp8HyiSvGTvwD-YCQRRoBhLd6H_oj1IGFYvCKWE&count=4`;

let img = document.querySelectorAll(".change");
let description = document.querySelectorAll(".description");
let author = document.querySelectorAll(".author");
let date = document.querySelectorAll(".date");

fetch(endpoint)
    .then(function (response){
        return response.json();
    })
    .then((jsonData) =>{
        // console.log(jsonData);
        for(i=0; i<4;i++){
            img[i].src = jsonData[i].urls.small;
            author[i].innerText = jsonData[i].user.name;
            description[i].innerText = jsonData[i].description;
            let cutdata = jsonData[i].created_at.substring(0, 10);
            date[i].innerText = cutdata.replace("-", "/");
        }
        })

    .catch((error) => {
     console.log("error");
})

