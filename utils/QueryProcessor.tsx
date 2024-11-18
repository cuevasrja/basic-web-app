export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "Tu USB ID es 19-10056" );
  }

  if (query.toLowerCase().includes("name")){
    return "Juan Cuevas";
  }

  if (query.toLowerCase().includes("plus")){
    // What is 2 plus 22?
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2){
      return (parseInt(numbers[0]) + parseInt(numbers[1])).toString();
    }
  }

  if (query.toLowerCase().includes("largest")){
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length > 0){
      return Math.max(...numbers.map(Number)).toString();
    }
  }

  if (query.toLowerCase().includes("square") && query.toLowerCase().includes("cube")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length > 0) {
      for (let i = 0; i < numbers.length; i++) {
        const num = parseInt(numbers[i]);
        const sqrt = Math.sqrt(num);
        const cbrt = Math.cbrt(num);
        if (Number.isInteger(sqrt) && Number.isInteger(cbrt)) {
          return num.toString();
        }
      }
    }
  }

  if (query.toLowerCase().includes("multiplied by")){
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2){
      return (parseInt(numbers[0]) * parseInt(numbers[1])).toString();
    }
  }

  if (query.toLowerCase().includes("primes")){
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length > 0){
      for (let i = 0; i < numbers.length; i++){
        const num = parseInt(numbers[i]);
        if (num < 2) continue;
        let isPrime = true;
        let j = 2;
        while (j <= Math.sqrt(num)){
          if (num % j === 0){
            isPrime = false;
            break;
          }
          j++;
        }
        if (isPrime){
          return num.toString();
        }
      }
      return ""
    }
  }

  if (query.toLowerCase().includes("minus")){
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2){
      return (parseInt(numbers[0]) - parseInt(numbers[1])).toString();
    }
  }

  return "";
}
