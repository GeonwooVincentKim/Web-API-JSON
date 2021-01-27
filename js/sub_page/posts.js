var post_con = 0;
var result = document.getElementById('result_post')

function request_post(detail_dir){
    console.log("Testing..");
    fetch("https://jsonplaceholder.typicode.com/" + detail_dir)
    .then(function(response){
        return response.json()
    }).then((response) => {
        var result = document.getElementById('result_post')
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
            item = 'User ID: ' + element.userId + ' ID: ' + element.id + " title: " + element.title + " Body: " + element.body
            console.log(item);
            var n = "\n";
            // result.append(item + "\n");
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
            var n = "\n";
            // result.append(item + "\n");
            result.innerHTML += `
                <div class="result_list_detail">
                    <p class="detail_list_body">
                        ID: ${element.userId}
                        Name: ${element.id}
                        Title: ${element.title}
                        Body: ${element.body}
                    </div>
                </div>
            `;
        })
        return result;
    })
}
