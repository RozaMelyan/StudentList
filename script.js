let userList = [];

function displayStudentsList() {
    userList.map(item => {
        let listItem = document.createElement("LI");
        let content = document.createTextNode(`${item.firstname} ${item.lastname} ${item.age}`);
        listItem.appendChild(content);
        let mainList = document.getElementById("studentsList");
        mainList.appendChild(listItem);
    });
};
displayStudentsList();

$(document).ready(function(){
    $.ajax({
        url:`http://127.0.0.1:3000/students`,
        success: function(returnData){
            console.log('Students data------', returnData);
            drowResponseDataToPage(returnData);
        },
        error: function(xhr, status, error){
            alert('Something went wrong ' + xhr.status + ' ' + xhr.statusText);
        }
    })
})

function drowResponseDataToPage(data) {
    for (const key in data) {
        console.log("Key data----->>>", data[key]);
        let unpackageData = data[key];
        let listItem = document.createElement('LI');
        let content = document.createTextNode(`${unpackageData.firstname}  ${unpackageData.lastname}`);
        listItem.innerHTML = `<div class="iconsConteiner"><i class="fa fa-trash-o" name="delete" id=${unpackageData._id}"></i> <i class="fa fa-edit" name="edit" id=${unpackageData._id}></i></div>`
        listItem.appendChild(content);
        let mainList = document.getElementById('studentsList');
        mainList.appendChild(listItem);
        $('li').css({
            'border-bottom': '1px solid black',
            'padding': '2px',
            'display':'block'
        });
        $('i').css({'cursor':'pointer', 'color':'red', 'font-size': '20px'});
        $('.iconsConteiner').css({'float':'right'});
    }
    handleRemoveClick();
    handleEditClick();
}
function handleRemoveClick () {
    let removeIcons = document.getElementsByName('delete');
    for(let index = 0; index < removeIcons.length; index++) {
        removeIcons[index].addEventListener('click', deleteResponsData)
    }
}
function handleEditClick () {
    let editIcons = document.getElementsByName('edit');
    for(let index = 0; index < editIcons.length; index++) {
        editIcons[index].addEventListener('click', function(e){
            $.ajax({
                url: `http://127.0.0.1:3000/students/${e.target.id}`,
                success: function(data){
                    editResponseData(data);
                },
                error: function(xhr, status, statusText){
                    alert('Something went wrong' + ' ' + xhr.status + ' ' + xhr.statusText);
                }
            })
        })
    }
}
function deleteResponsData(ev){
    $.ajax({
        url: `http://127.0.0.1:3000/students/id${ev.target._id}`,
        method: 'DELETE',
        success: function (){
            alert('Student is deleted successfully!');
            window.location.replace('/index_studentsList.html')
        },
        error: function(xhr, status, error){
            alert('Something went wrong ' + xhr.status + ' ' + xhr.statusText);
        }
    })
}
 
function editResponseData(responseObject){
    let modalCont = document.getElementById('modal-container');
    modalCont.classList.add('show');
    let dataId = responseObject._id;
    let inputFieldName = document.getElementById('first-name');
    inputFieldName.value = responseObject.firstname;
    let inputFieldLastName = document.getElementById('last-name');
    inputFieldLastName.value = responseObject.lastname; 
    let inputFieldEmail = document.getElementById('e-mail');
    inputFieldEmail.value = responseObject.email;
    let inputFieldMobile = document.getElementById('t-phone');
    inputFieldMobile.value = responseObject.mobile;
    let inputFieldAge = document.getElementById('a-ge');
    inputFieldAge.value = responseObject.age;
    let confirmButton = document.getElementById('close');
    confirmButton.addEventListener('click', function drowResponseDatatoPage(){
        let objForEditedData = {};
        objForEditedData.id = dataId;
        objForEditedData.firstname = inputFieldName.value;
        objForEditedData.lastname = inputFieldLastName.value;
        objForEditedData.email = inputFieldEmail.value;
        objForEditedData.mobile = inputFieldMobile.value;
        objForEditedData.age = inputFieldAge.value;
        modalCont.classList.add('hide');
        console.log(objForEditedData);
        $.ajax({
            type: `PUT`,
            url: `http://127.0.0.1:3000/students/${dataId}`,
            data: objForEditedData,
            success: function(msg){
                  alert( "Data Saved: " + msg );
                  window.location.replace('/index_studentsList.html');
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
               alert("some error");
            }
          });
        
    });
    
}

$(document).ready(function () {
    $('#getBtn').click(function () {
        $.ajax({
            url: "http://127.0.0.1:3000/students",
            success: function (returnData) {
                drowResponseDataToPage(returnData);
            },
            error: function (xhr, status, error) {
                alert('Something went wrong ' + xhr.status + ' ' + xhr.statusText);
            }
        })
    })
})


$(document).ready(function () {
    $('#getBtn').click(function () {
        $.ajax({
            url: "http://127.0.0.1:3000/students",
            success: function (returnData) {
                drowResponseDataToPage(returnData);
            },
            error: function (xhr, status, error) {
                alert('Something went wrong ' + xhr.status + ' ' + xhr.statusText);
            }
        })
    })
})