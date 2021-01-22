var movePage = function onClick(pg_dir){
    location.href = pg_dir;
    location.reload();
    history.back();
    history.forward();
}

function request(){
    console.log('Checking');
    fetch("https://jsonplaceholder.typicode.com/posts/")
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
