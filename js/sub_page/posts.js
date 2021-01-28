var post_con = 0;

function request_post(detail_dir){
    console.log("Testing..");
    fetch("https://jsonplaceholder.typicode.com/" + detail_dir)
    .then(function(response){
        return response.json()
    }).then((response) => {
        var result = document.getElementById('result_post')
        var item = ''
        console.log(response);
        response.forEach(element=>{
            item = 'User ID: ' + element.userId + ' ID: ' + element.id + " title: " + element.title + " Body: " + element.body
            console.log(item);
            result.innerHTML += `
                <div class="result_list">
                    <div class="list_body">
                        <a href="/sub_page/detail_info/detail_posts.html?id=${response[post_con].id}">
                            ${response[post_con].userId}
                            ${response[post_con].id}
                            ${response[post_con].title}
                            ${response[post_con].body}
                        </a>
                    </div>
                </div>
            `
            post_con += 1;
            console.log(result);
            return result;
        });
    })
}

function request_post_detail(detail_info){
    var result = null, result2 = null, tmp = [];
    // var items = location.search.substr(1).split("&");
    // for (var index = 0; index < items.length; index++){
    //     tmp = items[index].split("=");
    //     if(tmp[0] === detail_info){
    //         result = decodeURIComponent(tmp[1]);
    //         console.log(tmp[0]);
    //         console.log(tmp[1]);
    //     }
    // }
    
    /* Display sub-directory */
    location.search
        .substr(1)
        .split("&")
        .forEach(function(item){
            tmp = item.split("=");
            if(tmp[0] === detail_info) {
                result = decodeURIComponent(tmp[1]);
                console.log(tmp[0]);
                console.log(tmp[1]);
            }
        });

    fetch("https://jsonplaceholder.typicode.com/posts?id=" + result)
    .then(function(response){
        return response.json()
    }).then((response) => {
        result = document.getElementById('result_post_detail')
        console.log(response);
        response.forEach(element=>{
            item = 'User ID: ' + element.userId + ' ID: ' + element.id + " title: " + element.title + " Body: " + element.body
            console.log(item);

            result.innerHTML += `
                <div class="result_list_detail">
                    <p class="detail_list_body">
                        User ID: ${response[post_con].userId}
                        ID: ${element.id}
                        Title: ${element.title}
                        Body: ${element.body}
                    </p>
                </div>
            `;
            post_con += 1;
        })
        return result, result2;
    })

    fetch("https://jsonplaceholder.typicode.com/comments?postId=" + result)
    .then(function(response){
        return response.json()
    }).then((response) => {
        result = document.getElementById('result_post_comment')
        console.log(response[post_con] + "dddf");

        response.forEach(element=>{
            console.log(element.email + "yourmeail");
            item = 'Post ID: ' + element.postId + ' ID: ' + element.id + " name: " + element.title + " email: " + element.email + " body: " + element.body
            console.log(item); 
            console.log(element.email);

            result.innerHTML += `
                <div class="result_comments_list">
                    <p class="comments_list_body">
                        ${response[post_con].postId}
                        ${response[post_con].id}
                        ${response[post_con].name}
                        ${response[post_con].email}
                        ${response[post_con].body}
                    </p>
                </div>
            `
            post_con += 1;
            console.log(result.id);
            console.log(result);
            return result;
        });
    })
}
