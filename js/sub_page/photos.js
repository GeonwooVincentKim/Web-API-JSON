function request_photo(detail_dir){
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
            item = 'Album ID: ' + element.albumId + ' ID: ' + element.id + " title: " + element.title + " url: " + element.url + " thumbnailUrl: " + element.thumbnailUrl;
            console.log(item);
            var n = "\n";
            result.append(item + "\n");
        });
    })
}
