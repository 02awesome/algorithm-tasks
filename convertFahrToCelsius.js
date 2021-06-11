const convertFahrToCelsius = (tempFahr) => {
  let tempCel;
  if (typeof tempFahr !== "number" && typeof tempFahr !== "string") {
    if (typeof tempFahr === "object") {
      console.log(
        `${Object.keys(tempFahr)}:${Object.values(
          tempFahr
        )} is not a valid number but a/an ${typeof tempFahr}.`
      );
    } else {
      console.log(
        `${tempFahr} is not a valid number but a/an ${typeof tempFahr}.`
      );
    }
  } else {
    if (isNaN(tempFahr)) {
      console.log(`${tempFahr} cannot be converted to a number.`);
    } else {
      tempCel = (tempFahr - 32) * (5 / 9);
      tempCel = tempCel.toFixed(4);
      console.log(tempCel);
    }
  }
};

convertFahrToCelsius({ temp: 0 });
