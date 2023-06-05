
/**
 * Returns the current date in the format "DD.MM.YYYY".
 *
 * @return {string} The current date in the format "DD.MM.YYYY".
 */
function getDate() {
  const now = new Date(); // Erstellt ein neues Date-Objekt, das das aktuelle Datum und die aktuelle Uhrzeit repräsentiert
  const date = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  // Verwendet die toLocaleDateString-Methode, um das Datum im britischen Format mit Tag, Monat und Jahr zurückzugeben
  return date;
}

/**
 * Returns the current date in the format "YYYYMMDD".
 *
 * @return {string} The current date in the format "YYYYMMDD".
 */
function getDate1() {
  const now = new Date();
  const date = now
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/-/g, "");
  // Verwendet die toLocaleDateString-Methode, um das Datum im britischen Format mit Jahr, Monat und Tag zurückzugeben
  // Anschließend wird der Bindestrich entfernt, um das gewünschte Format "YYYYMMDD" zu erhalten
  return date;
}

/**
 * Returns a greeting based on the current time of day.
 *
 * @return {string} A greeting string ("Good morning", "Good afternoon", "Good evening", or "Good night").
 */
function getTime() {
  const now = new Date();
  const hour = now.getHours(); // Holt die aktuelle Stunde aus dem Date-Objekt
  let greeting = "Good ";

  if (hour >= 4 && hour < 12) {
    greeting += "morning"; // Fügt "morning" zur Begrüßung hinzu, wenn es zwischen 4 und 12 Uhr ist
  } else if (hour >= 12 && hour < 18) {
    greeting += "afternoon"; // Fügt "afternoon" zur Begrüßung hinzu, wenn es zwischen 12 und 18 Uhr ist
  } else if (hour >= 18 && hour < 22) {
    greeting += "evening"; // Fügt "evening" zur Begrüßung hinzu, wenn es zwischen 18 und 22 Uhr ist
  } else {
    greeting += "night"; // Fügt "night" zur Begrüßung hinzu, für alle anderen Zeiten
  }

  return greeting;
}
