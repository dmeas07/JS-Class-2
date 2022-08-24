let studentName = prompt("Enter student name: ");
let studentEmail = prompt("Enter student email: ");
let subject1 = prompt("Enter subject 1 name: ");
let grade1 = Number(prompt("Enter grade 1: "));

let subject2 = prompt("Enter subject 2 name: ");
let grade2 = Number(prompt("Enter grade 2: "));
let gpa=(grade1+grade2)/2;

console.log(studentName, studentEmail, subject1, grade1);

document.getElementById("studentInfo").innerHTML=`
    <h2> Student Information</h2>
    <p>Name: ${studentName}</p>
    <p>E-Mail: ${studentEmail}</p>
    <hr>
    <h2>Grades</h2>
    <p>Subject 1: ${subject1}</p>
    <p>Grade 1: ${grade1}</p>
    <p>Subject 2: ${subject2}</p>
    <p>Grade 2: ${grade2}</p>
    <hr>

    <p id="gpa" class="red"><b>GPA: ${gpa}</b></p>
  
`;

if(gpa<2){
    document.getElementById("gpa").classList.add("red");
    //document.getElementById("gpa").className = "red";

}else{
    document.getElementById("gpa").classList.remove("red");
    document.getElementById("gpa").classList.add("green");
}
