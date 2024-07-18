import { Seq } from 'immutable';

export default function printBestStudents(data) {
  const dataSeq = Seq(data);

  const filteredStudents = dataSeq.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const studentsJS = filteredStudents.toJS();

  Object.keys(studentsJS).map((id) => {
    studentsJS[id].firstName = capitalizeFirstLetter(studentsJS[id].firstName);
    studentsJS[id].lastName = capitalizeFirstLetter(studentsJS[id].lastName);
    return studentsJS[id];
  });

  console.log(studentsJS);
}
