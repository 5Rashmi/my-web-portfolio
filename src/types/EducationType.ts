export type EducationType = {
  instutionName: string;
  program?: string;
  type: "School" | "Junior College" | "College" | "University";
  duration: string;
  status: "Completed" | "Ongoing";
  Result: string;
  location: string;
};
