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
                        <a href="/sub_page/detail_info/detail_posts.html?id=${element.id}">
                            ${element.userId}
                            ${element.id}
                            ${element.title}
                            ${element.body}
                        </a>
                    </div>
                </div>
            `
            console.log(result);
            return result;
        });
    })
}

function request_post_detail(detail_info){
    var result = null, tmp = [];
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
                        User ID: ${element.userId}
                        ID: ${element.id}
                        Title: ${element.title}
                        Body: ${element.body}
                    </p>
                </div>
            `;
        })
        return result;
    })

    fetch("https://jsonplaceholder.typicode.com/comments?postId=" + result)
    .then(function(response){
        return response.json()
    }).then((response) => {
        result = document.getElementById('result_post_comment')

        response.forEach(element=>{
            console.log(element.email + "yourmeail");
            item = 'Post ID: ' + element.postId + ' ID: ' + element.id + " name: " + element.title + " email: " + element.email + " body: " + element.body
            console.log(item);
            console.log(element.email);

            result.innerHTML += `
                <div class="result_list_detail">
                    <p class="comments_list_body">
                        ${element.postId}
                        ${element.id}
                        ${element.name}
                        ${element.email}
                        ${element.body}
                    </p>
                </div>
            `
            console.log(result.id);
            console.log(result);
        });
        return result;
    })
}

function add_new_post(new_post){
    var results = document.getElementById('result_post')
    var form = document.getElementById("form");
    form.addEventListener("submit", function(e){
        e.preventDefault()
        var postID = document.getElementById("userId").value;
        // var ID = document.getElementById("id").value;
        var title = document.getElementById("title").value;
        var body = document.getElementById("body").value;

        fetch("https://jsonplaceholder.typicode.com/" + new_post, {
            method: "POST",
            body: JSON.stringify({
                userId: postID,
                // id: ID,
                title: title,
                body: body
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(function(response){
            return response.json()
        }).then(function(data) {
            console.log(data);
            results.innerHTML += `
                <div class="result_list_detail">
                    <p class="detail_list_body">
                        <a href="/sub_page/detail_info/detail_posts.html?id=${data.id}">
                            ${data.userId}
                            ${data.id}
                            ${data.title}
                            ${data.body}
                        </a>
                    </p>
                </div>
            `
        });
    })
}