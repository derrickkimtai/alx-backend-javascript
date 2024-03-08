export default function createEmployeesObject(departmentName, employees) {
  const members = {};
  members[departmentName] = employees;
  return members;
}
