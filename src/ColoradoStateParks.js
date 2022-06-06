import React from "react";
import howManyParks from "./parks/howManyParks";
import * as RMFunctions from "./parks/RockyMountain";
function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return   <div>
  <MesaVerdePark />
</div>
}
console.log(RMFunctions.trees);

RMFunctions.wildlife();

RMFunctions.elevation();
export default ColoradoStateParks;