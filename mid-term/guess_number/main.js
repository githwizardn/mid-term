// შეიყვანეთ მცდელობების რაოდენობა რიცხვის გამოსაცნობად
let attempts = prompt("შეიყვანეთ მცდელობების რაოდენობა რიცხვის გამოსაცნობად:");
attempts = parseInt(attempts);

// თუ მცდელობების რაოდენობა რიცხვი არაა ან ერთზე ნაკლებია , მივუთითოთ 10 მცდელობა
if (isNaN(attempts) || attempts < 1) {
  attempts = 10;
}

// დავაგენერიროთ შმეთხვევითი რიცხვი 1 და 1000 მდე
let randomNumber = Math.floor(Math.random() * 1000) + 1;

console.log(
  `თქვენ გაქვთ  ${attempts} მცდელობა რომ გამოიცნოთ რიცხვი. წარმატებები!`
);

// გამოვიცნოთ რიცხვი და თან ვუთხრათ გამოსაცნობი რიცხვი მაღალია დაბალია თუ სწორია
for (let i = 0; i < attempts; i++) {
  let guess = prompt("შეიყვანეთ რიცხვი რომელიც სწორი გგონიათ:");
  guess = parseInt(guess);

  if (guess === randomNumber) {
    console.log("სწორია! გილოცავთ!");
    alert("სწორია! გილოცავთ!");
    break;
  } else if (guess < randomNumber) {
    console.log("გამოსაცნობი რიცხვი უფრო მაღალია.");
    if (i < attempts - 1)
      alert("გამოსაცნობი რიცხვი უფრო მაღალია. კიდევ სცადეთ.");
  } else {
    console.log("გამოსაცნობი რიცხვი უფრო დაბალია.");
    if (i < attempts - 1)
      alert("გამოსაცნობი რიცხვი უფრო დაბალია. კიდევ სცადეთ.");
  }

  if (i === attempts - 1) {
    console.log(
      `სამწუხაროდ მცდელობები გაგითავდათ. სწორი რიცხვი იყო ${randomNumber}.`
    );
    alert(
      `სამწუხაროდ მცდელობები გაგითავდათ. სწორი რიცხვი იყო ${randomNumber}.`
    );
  }
}
