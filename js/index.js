var movePage = function onClick(pg_dir){
    location.href = pg_dir;
    location.reload();
    history.back();
    history.forward();
}

function request(dummy_dir){
    console.log('Checking');
    fetch("https://jsonplaceholder.typicode.com/" + dummy_dir)
    .then(function(response){
        return response.json()
    }).then((response) => {
        console.log(response);
    })
}

function request_detail(dummy_dir){
    console.log('Checking');
    fetch(dummy_dir)
    // fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(function(response){
        return response.json()
    }).then((response) => {
        console.log(response);
    })
}

function request_all(detail_dir){
    console.log("Testing..");
    fetch("https://jsonplaceholder.typicode.com/" + detail_dir)
    .then(function(response){
        return response.json()
    }).then((response) => {
        var result = document.getElementById('result')
        var item = ''
        console.log(response);
        // response.for (index = 0; index < array.length, index++) {
        //     element = array[index];
        //     item = 'User ID: ' + element.userId + ' ID: ' + element.id + " title: " + element.title + " - completed: " + element.completed + "<br><br>";
        //     console.log(item);
        //     result.append(item);
        // }(element=>{
            
        //     console.log(item);
        //     result.append(item);
        // });
        // response.forEach(element =>{
        //     item = 'User ID: ' + element.userId + ' ID: ' + element.id + "\n"
        //     console.log(item);
        //     result.append(item);
        // });
        response.forEach(element=>{
            item = 'User ID: ' + element.userId + ' ID: ' + element.id + " title: " + element.title + " - completed: " + element.completed
            console.log(item);
            var n = "\n";
            result.append(item + "\n");
        });
    })
}