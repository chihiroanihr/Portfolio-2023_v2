export function getTimeZoneGMT(date) {
  var offset = date.getTimezoneOffset(),
    o = Math.abs(offset);

  return (
    "GMT" +
    (offset < 0 ? "+" : "-") +
    ("00" + Math.floor(o / 60)).slice(-2) +
    ":" +
    ("00" + (o % 60)).slice(-2)
  );
}

export function getHoursTwoDigits(date) {
  return ("0" + date.getHours()).slice(-2);
}

export function getMinutesTwoDigits(date) {
  return ("0" + date.getMinutes()).slice(-2);
}
