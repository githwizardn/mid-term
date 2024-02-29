// არჩევა
const userChoice = prompt("აირჩიე ქვა,ქაღალდი ან მაკრატელი:");

// არჩევნის შემოწმება
if (
  userChoice !== "ქვა" &&
  userChoice !== "ქაღალდი" &&
  userChoice !== "მაკრატელი"
) {
  alert("გთხოვთ შეიყვანოთ ზუსტად ისე როგორც ნაჩვენებია ");
  console.log("გთხოვთ შეიყვანოთ ზუსტად ისე როგორც ნაჩვენებია ");
} else {
  // კომპიუტერის არჩევნის გენერირება
  const choices = ["ქვა", "ქაღალდი", "მაკრატელი"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // არჩეევნის გამოცხადება
  alert(
    "შენ აირჩიე " + userChoice + ".\nკომპიუტერმა აირჩია " + computerChoice + "."
  );
  console.log(
    "შენ აირჩიე " + userChoice + ".\nკომპიუტერმა აირჩია " + computerChoice + "."
  );

  // გამარჯვებულის განსაზღვრა
  if (userChoice === computerChoice) {
    alert("ფრეა!");
    console.log("ფრეა!");
  } else if (
    (userChoice === "ქვა" && computerChoice === "მაკრატელი") ||
    (userChoice === "ქაღალდი" && computerChoice === "ქვა") ||
    (userChoice === "მაკრატელი" && computerChoice === "ქაღალდი")
  ) {
    alert("შენ მოიგე!");
    console.log("შენ მოიგე!");
  } else {
    alert("კომპპიუტერმა მოიგო!");
    console.log("კომპპიუტერმა მოიგო!");
  }
}
