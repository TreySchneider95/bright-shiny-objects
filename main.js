// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
let user = {}
function createUser(first, last){
    user.firstName = first
    user.lastName = last
    return user
}
function setAge(user, age){
    user.age = age
    return user
}
function incrementAge(user){
    user.age += 1
    return user
}
function fixCar(car){
    car.needsMaintenance = false
    return car
}
function addGrades(student, newGrades){
    student.grades = [...student.grades, ...newGrades]
    return student
}
function getDataType(obj, attribute){
    return typeof obj[attribute]
}
function addTodo(arr, toDo){
    arr.push(toDo)
    return arr
}
function addSong(playlist, song){
    playlist.duration += song.duration
    playlist.songs.push(song)
    return playlist
}
function updateReportCard(reportCard, grade){
    grade < reportCard.lowestGrade ? reportCard.lowestGrade = grade : {}
    grade > reportCard.highestGrade ? reportCard.highestGrade = grade : {}
    reportCard.grades.push(grade)
    reportCard.averageGrade = reportCard.grades.reduce((a,b)=>(a+b), 0)/reportCard.grades.length
    return reportCard
}
// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
