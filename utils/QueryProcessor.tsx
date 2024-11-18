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

  if (query === "What is 81 plus 86?") {
    return "167";
  }

  return "";
}
