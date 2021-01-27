var con = 0;

function request_user(detail_dir){
    console.log("Testing..");
    fetch("https://jsonplaceholder.typicode.com/" + detail_dir)
    .then(function(response){
        return response.json()
    }).then((response) => {
        var result = document.getElementById('result')
        var item = ''
        console.log(response);

        // item.innerHTML += `
        // <div class="result_list">
        //     <div class="list_body">
        //         <a href="/sub_page/detail_info/detail_users.html/${response[con].id}">
        //         "ID: " + ${response.id}
        //         " Name: " + ${response.name}
        //         " User-Name: " + ${response.username}
        //         " email: " + ${response.email}
        //         " phone: " + ${response.phone} 
        //         " website: " + ${response.website}
        //         </a>
        //     </div>
        // </div>
        // `
        // result.append(item);
        // return result;
        response.forEach(element=>{
            // item = 'ID: ' + element.id + ' Name: ' + element.name + " User-Name: " + element.username + " email: " + element.email + " phone: " + element.phone + " website: " + element.website
            item = 'ID: ' + element.id + ' Name: ' + element.name + " User-Name: " + element.username + " email: " + element.email + " phone: " + element.phone + " website: " + element.website;
            console.log(item);
            var n = "\n";
            result.innerHTML += `
            <div class="result_list">
                <div class="list_body">
                    <a href="https://jsonplaceholder.typicode.com/users/${element.id}">
                    "ID: " + ${element.id}
                    " Name: " + ${element.name}
                    " User-Name: " + ${element.username}
                    " email: " + ${element.email}
                    " phone: " + ${element.phone} 
                    " website: " + ${element.website}
                    </a>
                </div>
            </div>
            `
            con += 1;
            // result.append(item + "\n");

            console.log(result);
            return result;
        });
    })
}

function request_user_detail(detail_num){
    console.log("Testing this..");
    fetch("https://jsonplaceholder.typicode.com/users/" + detail_num, {method: "GET"})
    .then(function(response){
        return response.json()
    }).then((response) => {
        console.log(response);
        var result = document.getElementById('resultDetail');
        // var result = document.querySelector("#result");
        var item = ''
        console.log(response);
 
        result.innerHTML = `
            <div class="result_list">
                <div class="list_body">
                    <a href="/sub_page/detail_info/detail_users.html/${response.id}">
                    "ID: " + ${response.id}
                    " Name: " + ${response.name}
                    " User-Name: " + ${response.username}
                    " email: " + ${response.email}
                    " phone: " + ${response.phone} 
                    " website: " + ${response.website}
                    </a>
                </div>
            </div>
        `
        // result.append(item);
        return result;
        // result.append(item);
        // result.append(item);
        // result.innerHTML += `
        //     <a href="/sub_page/detail_info/detail_users.html?id=${response.id}">
        //         ${response.id}
        //         ${response.name}
        //         ${response.username}
        //         ${response.email}
        //         ${response.phone}
        //         ${response.website}
        //     </a>
        // `
    })
}