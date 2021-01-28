function request_todo(detail_dir){
    console.log("Testing..");
    fetch("https://jsonplaceholder.typicode.com/" + detail_dir)
    .then(function(response){
        return response.json()
    }).then((response) => {
        var result = document.getElementById('result')
        var item = ''
        console.log(response);

        response.forEach(element=>{
            item = 'User ID: ' + element.userId + ' ID: ' + element.id + " title: " + element.title + " completed: " + element.completed
            console.log(item);

            result.innerHTML += `
                <div class="result_list">
                    <div class="list_body">
                        ${element.userId}
                        ${element.id}
                        ${element.title}
                        ${element.completed}
                    </div>
                </div>
            `
            return result;
        });
    })
}
