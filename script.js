// Conectarse al sgte servicio: https://jsonplaceholder.typicode.com/users
let api = 'https://jsonplaceholder.typicode.com/users';
let apiImage = 'https://dummyimage.com/200x200/024983/ffffff&text=';
let divElement = document.querySelector(".content");

const data = fetch(api)
    .then( (response) => {
        return response.json();
    })
    .then( (data) => {
        let userList = [];
        let sendHtml = '';
        data.forEach(element => {

            let htmlElement = '<section>'+
                            '<img src="'+ (apiImage + element.website) +'" alt="">'+
                            '<h2>'+ element.username +'</h2>'+
                            '<div class="description">'+
                                '<div>'+
                                    '<span>Name:</span> <span>'+ element.name +'</span>'+
                                '</div>'+
                                '<div>'+
                                    '<span>Email:</span> <span>'+ element.email +'</span>'+
                                '</div>'+
                                '<div>'+
                                    '<span>Company:</span> <span>'+ element.company.name +'</span>'+
                                '</div>'+
                                '<div>'+
                                    '<span>City:</span> <span>'+ element.address.city +'</span>'+
                                '</div>'+
                            '</div>'+
                        '</section>';

            sendHtml += htmlElement;


            let obj = {
                "name": element.name,
                "username": element.username,
                "email": element.email,
                "website": element.website,
                "address":{
                    "city": element.address.city
                },
                "company": {
                    "name": element.company.name
                }
            }
            
            userList.push(obj);
        });
        divElement.innerHTML = sendHtml;
        console.log(userList);

        
    })
    .catch();


