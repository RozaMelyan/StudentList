
$(document).ready(function () {
    $('#btn').click(function () {
        const studentData = {
            'firstname': '',
            'lastname': '',
            'email': '',
            'mobile': '',
            'age': ''
        };
        let firstName = document.getElementById('fname').value;
        let lastName = document.getElementById('lname').value;
        let eMail = document.getElementById('email').value;
        let mobileNumber = document.getElementById('tphone').value;
        let age = document.getElementById('age').value;
        studentData.firstname = firstName;
        studentData.lastname = lastName;
        studentData.email = eMail;
        studentData.mobile = mobileNumber;
        studentData.age = age;
        console.log('OOOO-----', studentData);

   

        $.ajax({
            url: "http://127.0.0.1:3000/students",
            method: 'POST',
            data: studentData,
            success: function (returnData) {
                alert("Student is added successfully");
            },
            error: function (xhr, status, error) {
                alert('Something went wrong ' + xhr.status + ' ' + xhr.statusText);
            }
        })
    })
})

function validateForm(){
    if(firstName == "" && lastName == ""){
        alert("Fields mast me filled...")
    };
    let validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(eMail);
    if(validEmail == false){
        alert("Wrong format of email address...");
        $('email').css({'borser': '2px solid red'})
    }
    let validTel = /^[0]\d{8}$/.test(mobileNumber);
    if(validTel == false){
        alert("Please, enter valid mobile number...")
    }
    
}
validateForm();
