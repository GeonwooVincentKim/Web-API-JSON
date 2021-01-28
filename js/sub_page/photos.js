function request_photo(detail_dir){
    console.log("Testing..");
    fetch("https://jsonplaceholder.typicode.com/" + detail_dir)
    .then(function(response){
        return response.json()
    }).then((response) => {
        var result = document.getElementById('result')
        var item = ''
        console.log(response);

        response.forEach(element=>{
            item = 'Album ID: ' + element.albumId + ' ID: ' + element.id + " title: " + element.title + " url: " + element.url + " thumbnailUrl: " + element.thumbnailUrl;
            console.log(item);

            result.innerHTML += `
                <div class="result_list">
                    <div class="list_body">
                        ${element.albumId}
                        ${element.id}
                        ${element.title}
                        ${element.url}
                        ${element.thumbnailUrl}
                    </div>
                </div>
            `

            return result;
        });
    })
}
