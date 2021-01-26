var con = 0;
var result = document.getElementById('result')
// var btn = document.getElementById("btn").addEventListener("click", getPost);

function request_user(detail_dir){
    console.log("Testing..");
    fetch("https://jsonplaceholder.typicode.com/" + detail_dir)
    .then(function(response){
        return response.json()
    }).then((response) => {
        // var button = document.getElementById("btn").addEventListener('')
        var item = ''
        var result = document.getElementById('result')
        console.log(response);
        response.forEach(element=>{
            item = 'ID: ' + element.id + ' Name: ' + element.name + " User-Name: " + element.username + " email: " + element.email + " phone: " + element.phone + " website: " + element.website
            console.log(item);
            var n = "\n";
           // if(result.innerHTML == `<a href="/sub_page/detail_info/detail_users.html?id=${response[con].id}"`)
            result.innerHTML += `
              <div class="result_list">
                <div class="list_body">
                    <a href="/sub_page/detail_info/detail_users.html?id=${response[con].id}">
                    ${response[con].id}
                    ${response[con].name}
                    ${response[con].username}
                    ${response[con].email}
                    ${response[con].phone}
                    ${response[con].website}
                    </a>
                </div>
              </div>
            `
            // result.append(item + "\n");
            con += 1;

            console.log(result);
            return result;
            // return response;
        });
    })
}

// function 

function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}

function request_user_detail(detail_num){
    console.log("Testing this..");
    fetch("https://jsonplaceholder.typicode.com/users/" + detail_num, {method: "GET"})
    .then(function(response){
        return response.json()
    }).then((response) => {
        console.log(response);
        
        // let users = response.id;
        // return users.map(function(user){
        //     let div = createNode("div"),
        //     a_href = createNode("a").attr("id");
        //     // span = createNode("span");
        //     a_href.innerHTML = `${user.id} ${user.name} ${user.email} ${user.phone} ${user.website}`;
        
        //     // append(a_href, span);
        //     append(div, a_href);
        //     append(div, div);
        // })
        var result = document.getElementById('resultDetail');
        // var result = document.querySelector("#result");
        var item = ''
        console.log(response);
        
        response.foreach((element) => {
            // item = "ID: " + response.id + " Name: " + response.name + " User-Name: " + response.username + " email: " + response.email + " phone: " + response.phone + " website: " + response.website
            item = "ID: " + element.id + " Name: " + element.name + " User-Name: " + element.username + " email: " + element.email + " phone: " + element.phone + " website: " + element.website
            result.append(item + "\n");
            console.log(result);
            return result;
        })
        // return result;
    }).catch(function(error){
        console.log(JSON.stringify(error));
    })
}