import getListStudents from './0-get_list_students';

export default function getStudentsIdsSum() {
  const students = getListStudents();
  const sum = students.reduce((sum, student) => sum + student.id, 0);
  return sum;
}
