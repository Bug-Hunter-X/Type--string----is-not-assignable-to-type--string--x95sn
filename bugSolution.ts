function greeter(person: string[]): string {
  let greetings: string = "";
  person.forEach((element) => {
    greetings += "Hello, " + element + "\n";
  });
  return greetings;
}

let user = ["Jane User", "John Smith"];

console.log(greeter(user)); //No Error