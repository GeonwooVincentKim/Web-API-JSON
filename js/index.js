var movePage = function onClick(pg_dir){
    location.href = pg_dir;
    location.reload();
    history.back();
    history.forward();
}

var handleRequest = function request(){
    alert("Test");
}
