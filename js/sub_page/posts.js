var post_con = 0;

// var result = document.getElementById('result_post')
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
            // if(tmp[1] === detail_info){
            //     result = decodeURIComponent(tmp[2]);
            //     console.log(tmp[1]);
            //     console.log(tmp[2]);
            // }
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
            var n = "\n";
            // result.append(item + "\n");
            result.innerHTML += `
                <div class="result_list_detail">
                    <p class="detail_list_body">
                        ID: ${response[post_con].userId}
                        Name: ${element.id}
                        Title: ${element.title}
                        Body: ${element.body}
                    </p>
                </div>
            `;
            // result2.innerHTML += `
            //     <div class="result_list_post">
            //         <div class="list_body">
            //             <a href="/sub_page/comments.html?userId=${response[comments_con].id}&Id=${response[comments_con].postId}">
            //                 "Post-id: ${element.postId}
            //                 ${response[comments_con].id}
            //                 ${response[comments_con].title}
            //                 ${response[comments_con].email}
            //                 ${response[comments_con].body}
            //             </a>
            //         </div>
            //     </div>
            // `;
            // result = document.getElementById("result_post_comment")
            // console.log(result);
            // response.forEach(element=>{
            //     item = 'Post ID: ' + element.postId + ' ID: ' + element.id + " name: " + element.title + " email: " + element.email + " body: " + element.body
            //     console.log(item);
            //     result.innerHTML += `
            //         <div class="result_list">
            //             <div class="list_body">
            //                 <a href="/sub_page/comments.html?userId=${response[comments_con].id}&Id=${response[comments_con].postId}">
            //                     "Post-id: ${response[comments_con].postId}
            //                     ${response[comments_con].id}
            //                     ${response[comments_con].title}
            //                     ${response[comments_con].email}
            //                     ${response[comments_con].body}
            //                 </a>
            //             </div>
            //         </div>
            //     `
                // comments_con += 1;
            // })
        })
        return result, result2;
    })

    fetch("https://jsonplaceholder.typicode.com/posts?id=" + result + "/comments")
    .then(function(response){
        return response.json()
    }).then((response) => {
        result = document.getElementById('result_post_comment')
        console.log(response[post_con] + "dddf");
        // response.forEach(element=>{
        //     item = 'User ID: ' + element.userId + ' ID: ' + element.id + " title: " + element.title + " Body: " + element.body
        //     console.log(item);
        //     var n = "\n";
        //     // result.append(item + "\n");
        //     result.innerHTML += `
        //         <div class="result_list_detail">
        //             <p class="detail_list_body">
        //                 ID: ${element.userId}
        //                 Name: ${element.id}
        //                 Title: ${element.title}
        //                 Body: ${element.body}
        //             </div>
        //         </div>
        //     `;
        // })
        response.forEach(element=>{
            console.log(element.email + "yourmeail");
            item = 'Post ID: ' + element.postId + ' ID: ' + element.id + " name: " + element.title + " email: " + element.email + " body: " + element.body
            console.log(item); 
            console.log(element.email);
            var n = "\n";
            // result.append(item + "\n");
            result.innerHTML += `
                <div class="result_list_detail">
                        <p class="detail_list_body">
                            ID: ${element.userId}
                            Name: ${element.id}
                            Title: ${element.title}
                            Body: ${element.body}
                        </p>
                </div>
                <p>tset</p>
                <div class="result_comments_list">
                    <p class="comments_list_body">
                        ${response[post_con].postId}
                        ${response[post_con].id}
                        ${response[post_con].title}
                        ${response[post_con].email}
                        ${response[post_con].body}
                    </p>
                </div>
            `
            post_con += 1;
            console.log(response[post_con].body);
            console.log(result.id);
            console.log(result);
            return result;
        });
        // return result;
    })
}

var comments_con = 0;
function request_comment_detail(detail_comments){
    // var result = null, tmp = [];
    // location.search
    //     .substr(1)
    //     .split("&")
    //     .forEach(function(item){
    //         tmp = item.split("=");
    //         if(tmp[0] === detail_comments){
    //             result = decodeURIComponent(tmp[1]);
    //             console.log(tmp[0]);
    //             console.log(tmp[1]);
    //         }
    //     });
    var result = null, tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function(item){
            tmp = item.split("=");
            if(tmp[0] === detail_comments) {
                result = decodeURIComponent(tmp[1]);
                console.log(tmp[0]);
                console.log(tmp[1]);
            }
            // if(tmp[1] === detail_info){
            //     result = decodeURIComponent(tmp[2]);
            //     console.log(tmp[1]);
            //     console.log(tmp[2]);
            // }
        });
    // fetch("https://jsonplaceholder.typicode.com/posts?id={result}/" + detail_comments)
    fetch("https://jsonplaceholder.typicode.com/posts/1/" + detail_comments)
    .then(function(response){
        return response.json()
    }).then((response) => {
        result = document.getElementById('result_post_comment')
        console.log(response + "Should be here");
        console.log(detail_comments);
        response.forEach(element=>{
            item = 'Post ID: ' + element.postId + ' ID: ' + element.id + " name: " + element.title + " email: " + element.email + " body: " + element.body
            console.log(item); 
            var n = "\n";
            // result.append(item + "\n");
            result.innerHTML += `
                <div class="result_list">
                    <div class="list_body">
                        ${response[comments_con].postId}
                        ${response[comments_con].id}
                        ${response[comments_con].title}
                        ${response[comments_con].email}
                        ${response[comments_con].body}
                    </div>
                </div>
            `
            comments_con += 1;
            console.log(result);
            return result;
        });
    })
}