function request_user(detail_dir){
    console.log("Testing..");
    fetch("https://jsonplaceholder.typicode.com/" + detail_dir)
    .then(function(response){
        return response.json()
    }).then((response) => {
        var result = document.getElementById('result')
        var item = ''
        console.log(response);

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

function request_user_detail(detail_num){
    console.log("Testing this..");
    fetch("https://jsonplaceholder.typicode.com/users/?<pk>(0-9)" + detail_num, {method: "GET"})
    .then(function(response){
        return response.json()
    }).then((response) => {
        console.log(response);
        var result = document.getElementById('resultDetail');
        // var result = document.querySelector("#result");
        var item = ''
        console.log(response);
 
        item = "ID: " + response.id + " Name: " + response.name + " User-Name: " + response.username + " email: " + response.email + " phone: " + response.phone + " website: " + response.website
        result.append(item);
        return result;
    })
}