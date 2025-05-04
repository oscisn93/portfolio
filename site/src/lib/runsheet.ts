export type Timestamp = {
  date: string;
  time: string;
};

export type RunsheetData = {
  timestamp: Timestamp;
  incidentType: string[];
  area: string;
  size: string;
  onScene: string;
  incNameNum: string;
  inQuarters: string;
  pCode: string;
  initials: Record<string, boolean>;
  summary: string;
};

export function getTimestamp(): Timestamp {
  const [d, t] = new Date().toISOString().split("T");
  const time = t.split(":");
  time.pop();
  let hours = parseInt(time[0]);
  hours -= 7;

  if (hours < 0) {
    hours += 24;
  }

  if (hours === 0) {
    time[0] = "00";
  } else {
    time[0] = hours.toString();
  }

  return {
    date: d,
    time: time.join(":"),
  };
}
