function request_user(detail_dir){
    console.log("Testing..");
    fetch("https://jsonplaceholder.typicode.com/" + detail_dir)
    .then(function(response){
        return response.json()
    }).then((response) => {
        var result = document.getElementById('result')
        var item = ''
        console.log(response);
        // for(i = 0; i <= response.length; i++){
        //     item = "ID: " + response.id + " Name: " + response.name;
        //     console.log(item);
        //     result.append(item + "\n");
        //     console.log(result);
        //     return result;
        // }
        response.forEach(element=>{
            item = 'ID: ' + element.id + ' Name: ' + element.name + " User-Name: " + element.username + " email: " + element.email + " phone: " + element.phone + " website: " + element.website
            console.log(item);
            var n = "\n";
            result.append(item + "\n");

            console.log(result);
            return result;
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
        
        let users = response.id;
        return users.map(function(user){
            let div = createNode("div"),
            a_href = createNode("a").attr("id");
            // span = createNode("span");
            a_href.innerHTML = `${user.id} ${user.name} ${user.email} ${user.phone} ${user.website}`;
        
            // append(a_href, span);
            append(div, a_href);
            append(div, div);
        })
        // var result = document.getElementById('resultDetail');
        // // var result = document.querySelector("#result");
        // var item = ''
        // console.log(response);
        
        // response.foreach((element) => {
        //     // item = "ID: " + response.id + " Name: " + response.name + " User-Name: " + response.username + " email: " + response.email + " phone: " + response.phone + " website: " + response.website
        //     item = "ID: " + element.id + " Name: " + element.name + " User-Name: " + element.username + " email: " + element.email + " phone: " + element.phone + " website: " + element.website
        //     result.append(item + "\n");
        //     console.log(result);
        //     return result;
        // })
        // return result;
    }).catch(function(error){
        console.log(JSON.stringify(error));
    })
}