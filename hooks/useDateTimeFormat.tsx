const isDateTimeFormatSupported =
  typeof Intl !== "undefined" && Intl.DateTimeFormat;
export const formatDate = (timestamp: any) => {
  const date = new Date(timestamp);
  const language = "en-GB";

  if (!isDateTimeFormatSupported) {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    } as const;
    return date.toLocaleDateString(language, options);
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    second: "numeric",
  };
  return new Intl.DateTimeFormat(language, options).format(date);
};
function useDateTimeFormat(timestamp?: any) {
  return formatDate(timestamp);
}

export default useDateTimeFormat;
