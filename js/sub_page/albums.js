function request_album(detail_dir){
    console.log("Testing..");
    fetch("https://jsonplaceholder.typicode.com/" + detail_dir)
    .then(function(response){
        return response.json()
    }).then((response) => {
        var result = document.getElementById('result')
        var item = ''
        console.log(response);

        response.forEach(element=>{
            item = 'User ID: ' + element.userId + ' ID: ' + element.id + " title: " + element.title
            console.log(item);
            var n = "\n";
            result.innerHTML += `
                <div class="result_list">
                    <div calss="list_body">
                        ${element.userId}
                        ${element.id}
                        ${element.title}
                    </div>
                </div>
            `
        });
    })
}
