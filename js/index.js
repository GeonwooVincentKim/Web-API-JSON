var movePage = function onClick(pg_dir){
    location.href = pg_dir;
    location.reload();
    history.back();
    history.forward();
}

function request(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function(response){
        return response.json()
    }).then((response) => {
        console.log(response);
    })
}
