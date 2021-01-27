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
                <a href="/sub_page/detail_info/detail_users.html?id=${element.id}">
                <!--<a href="https://jsonplaceholder.typicode.com/users/${element.id}">-->
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
            // result.append(item + "\n");

            console.log(result);
            return result;
        });
    })
}

function request_user_detail(detail_num){
    console.log("Testing this..");
    fetch("https://jsonplaceholder.typicode.com/users?id=" + detail_num, {method: "GET"})
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

function findGetUser(detail_info){
    var result = null,
        tmp = [];
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
            
            // result.innerHTML = `
            //     <div class="result_list">
            //         <p class="list_body">
            //             "ID: " + ${item.id}
            //             " Name: " + ${item.name}
            //             " User-Name: " + ${item.username}
            //             " email: " + ${item.email}
            //             " phone: " + ${item.phone} 
            //             " website: " + ${item.website}
            //         </p>
            //     </div>
            // `
            // console.log(result);
            // return result;
        });
    // const searchFindValue = response.find((element, item, array)=>{
    //     return item.id == response.id;
    // });
    // console.log(result + "중간");
    // result.innerHTML = `
    //     <div class="result_list_detail">
    //     <p class="detail_list_body">
    //         "ID: " + ${result.id}
    //         " Name: " + ${result.name}
    //         " User-Name: " + ${result.username}
    //         " email: " + ${result.email}
    //         " phone: " + ${result.phone} 
    //         " website: " + ${result.website}
    //     </p>
    //     </div>
    // `
    // return result;
    fetch("https://jsonplaceholder.typicode.com/users?id=" + result)
    .then(function(response){
        return response.json()
    }).then((response) => {
        result = document.getElementById('result');
        console.log(response);
        console.log(result);
        result.innerHTML = `
            <div class="result_list_detail">
                <p class="detail_list_body">
                    "ID: " + ${tmp[1]}
                    " Name: " + ${tmp}
                    " User-Name: " + ${response.username}
                    " email: " + ${response.email}
                    " phone: " + ${response.phone} 
                    " website: " + ${response.website}
                </p>
            </div>
        `;
        
        // var findValue = response.findIndex(
        //     location.search
        //     .substr(1)
        //     .split("&")
        //     .forEach(function(item){
        //         tmp = item.split("=");
        //         if(tmp[0] === detail_info) return result = decodeURIComponent(tmp[1])
        // })
        // .findValue.forEach(element=>{
        //     result.innerHTML = `
        //         <div class="result_list">
        //             <p class="list_body">
        //                 "ID: " + ${element.id}
        //                 " Name: " + ${element.name}
        //                 " User-Name: " + ${element.username}
        //                 " email: " + ${element.email}
        //                 " phone: " + ${element.phone} 
        //                 " website: " + ${element.website}
        //             </p>
        //         </div>
        //     `
        // }),
        // var a = response.findIndex(function(item){
            
        //     return item.id == result.id;
        // });
        
        // console.log(searchFindValue);
        // console.log(response);
        // var result = null,
        //     tmp = [];
        // location.search
        //     .substr(1)
        //     .split("&")
            

       
            // .then(function(response){
            //     return response.json()
            // }).then((response) => {

            //     res[p].forEach(function(item){
            //         tmp = item.split("=");
            //         if(tmp[0] === detail_info) result = decodeURIComponent(tmp[1]);
            //         result.innerHTML = `
            //             <div class="result_list">
            //                 <div class="list_body">
            //                     "ID: " + ${item.id}
            //                     " Name: " + ${item.name}
            //                     " User-Name: " + ${item.username}
            //                     " email: " + ${item.email}
            //                     " phone: " + ${item.phone} 
            //                     " website: " + ${item.website}
            //                 </div>
            //             </div>
            //         `
            //     });
            // })
            // var result = document.querySelector("#result");
        return tmp[1];
    })
    // return result;
}