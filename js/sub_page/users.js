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

function request_user_detail(detail_info){
    var result = null, tmp = [];
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

    fetch("https://jsonplaceholder.typicode.com/users?id=" + result)
    .then(function(response){
        return response.json()
    }).then((response) => {
        result = document.getElementById('result_user');
        console.log(response);
        console.log(result);
        response.forEach(element => {
            item = 'ID: ' + element.id + ' Name: ' + element.name + " User-Name: " + element.username + " email: " + element.email + " phone: " + element.phone + " website: " + element.website;
            result.innerHTML = `
                <div class="result_list_detail">
                    <p class="detail_list_body">
                        ID: ${element.id}<br> 
                        Name: ${element.name}<br>
                        User-Name: ${element.username}<br>
                        email: ${element.email}<br>
                        phone: ${element.phone}<br>
                        website: ${element.website}
                    </p>
                </div>
            `;
        })
        return result;
    })
}