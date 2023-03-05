export default function dateToStr(date, format) {
  // 2020-10-10
  let dateFmt = Intl.DateTimeFormat("fr-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);

  // 2020.10.10
  if (format === "kr") {
    dateFmt = new Intl.DateTimeFormat("kr").format(date);
  }
  return dateFmt;
  // const pad = (n) => {
  //   return n < 10 ? "0" + n : n;
  // };

  // return (
  //   d.getFullYear() +
  //   "-" +
  //   pad(d.getMonth() + 1) +
  //   "-" +
  //   pad(d.getDate()) +
  //   " " +
  //   pad(d.getHours()) +
  //   ":" +
  //   pad(d.getMinutes()) +
  //   ":" +
  //   pad(d.getSeconds())
  // );
}
