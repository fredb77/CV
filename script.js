
fetch("https://api.github.com/users/fredb77/repos")
.then(function(resp) {
    return resp.json();
})

.then(function(data) {
    var info = "";

    for(i = 0; i < data.length; i++){

        console.log(data[i].name);
        
        // sorterar efter yngst först
        //data.sort((a, b) => parseFloat(a.age) - parseFloat(b.age));

        // hämtar datan från json
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

