const studentInput=document.getElementById("studentName");

function addStudent(){
    let student=document.getElementById("studentName").value;
    console.log("Adding... " + student);
    displayStudent(student);
    clearInput();
}

function displayStudent(newStudent){
    document.getElementById("student-list").innerHTML += ` <li class="item">${newStudent}</li>`;
}

function clearInput(){
    studentInput.value="";
    studentInput.focus();
}
