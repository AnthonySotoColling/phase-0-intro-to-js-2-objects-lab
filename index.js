// Write your solution in this file!
const employee = {
    name: "tony",
    streetAddress: "San Diego"
};
function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = { ...object }
    newEmployee[key] = value;
    return newEmployee;
};
updateEmployeeWithKeyAndValue(employee, "name", "Sam");
updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
};
destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam");
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");

function deleteFromEmployeeByKey(object, key, value) {
    const letGo = { ...object }
    letGo[key] = value;
    return letGo;
}
deleteFromEmployeeByKey(employee, "name", "Sam");

function destructivelyDeleteFromEmployeeByKey(object, key, value) {
    object[key] = value;
    return object;
}
destructivelyDeleteFromEmployeeByKey(employee,)