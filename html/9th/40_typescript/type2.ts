//interface
interface Student {
  name: string;
  grade: number;
  isPassed: boolean;
}

const persons: [Student] = [
  {
    name: "kang",
    grade: 2,
    isPassed: true,
  },
];

////////////////////////////////////////////////////////////////////
//type
type Gender = "Female" | "male" | "Boy" | "Girl";
const gender: Gender = "male";
console.log(gender);


