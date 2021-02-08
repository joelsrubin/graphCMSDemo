
// query pacific time zone students //

{
  students(where: { timeZone: "pacific" }) {
    name
    id
  }
}

