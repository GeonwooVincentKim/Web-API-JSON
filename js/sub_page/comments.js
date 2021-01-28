var comments_con = 0;
var result = document.getElementById('result_post')

function request_comments(detail_dir){
    console.log("Testing..");
    fetch("https://jsonplaceholder.typicode.com/" + detail_dir)
    .then(function(response){
        return response.json()
    }).then((response) => {
        var result = document.getElementById('result')
        var item = ''
        console.log(response);

        response.forEach(element=>{
            item = 'Post ID: ' + element.postId + ' ID: ' + element.id + " name: " + element.title + " email: " + element.email + " body: " + element.body
            console.log(item); 
            var n = "\n";
            // result.append(item + "\n");
            result.innerHTML += `
                <div class="result_list">
                    <div class="list_body">
                        <a href="/sub_page/comments.html?userId=${response[comments_con].id}&Id=${response[comments_con].postId}">
                            ${response[comments_con].postId}
                            ${response[comments_con].id}
                            ${response[comments_con].title}
                            ${response[comments_con].email}
                            ${response[comments_con].body}
                        </a>
                    </div>
                </div>
            `
            comments_con += 1;
            console.log(result);
            return result;
        });
    })
}
