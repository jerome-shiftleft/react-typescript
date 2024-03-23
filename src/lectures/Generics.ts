export default function Generics() {
  console.log("loading Generics...");

  function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
  }

  const demoArrayNumbers = [1, 2, 3];
  const updatedArrayNumbers = insertAtBeginning(demoArrayNumbers, -1);
  console.log("updatedArray: ", updatedArrayNumbers);

  const demoArrayStrings = ['a', 'b', 'c'];
  const updatedArrayStrings = insertAtBeginning(demoArrayStrings, 'z');
  console.log("updatedArray: ", updatedArrayStrings);

} // end of export default function Generics()
