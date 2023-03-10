function useDateTimeFormat(timestamp: string | Date) {
  const date = new Date(Number(timestamp));
  const language = navigator.language || "en-GB";

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return new Intl.DateTimeFormat(language, options).format(date);
}

export default useDateTimeFormat;
