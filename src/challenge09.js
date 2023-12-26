function adjustLights(lights) {
  const [firstColor] = lights
  let countWrong = 0
  let countWrongInverted = 0
  lights
    .filter((_, index) => index % 2 === 0)
    .forEach((light) => {
      if (light !== firstColor) countWrong++
      if (light === firstColor) countWrongInverted++
    })
  lights
    .filter((_, index) => index % 2 !== 0)
    .forEach((light) => {
      if (light === firstColor) countWrong++
      if (light !== firstColor) countWrongInverted++
    })

  return countWrong > countWrongInverted ? countWrongInverted : countWrong
}

adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])
// -> 1 (cambia la primera luz a verde)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])
// -> 1

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)
