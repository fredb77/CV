
// requestar github api
fetch("https://api.github.com/users/fredb77/repos")
.then(function(resp) {
    return resp.json();
})

// funktion som loopar alla repos och skriver ut dom
.then(function(data) {
    var info = "";

    for(i = 0; i < data.length; i++){
        
        // hämtar datan från github
        info +=  
                "<li><a target='_blank' href='https://github.com/fredb77/" + data[i].name + "'>" + data[i].name + "</a></li>";

        // skriver ut datan
        document.getElementById("repos").innerHTML = info;
    }
})
// skriver ut felmeddelande
.catch(err => {
    document.write(err);
});

