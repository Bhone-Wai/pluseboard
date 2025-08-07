import dayjs from "dayjs";

type DateColors = "success" | "processing" | "error" | "default" | "warning";

export const getDateColor = (args: {
  date: string;
  defaultColor?: DateColors;
}): DateColors => {
  const date = dayjs(args.date);
  const today = dayjs();

  if (date.isSame(today, "day")) {
    return "processing";
  }

  if (date.isBefore(today, "day")) {
    return "error";
  }

  return args.defaultColor ?? "default";
};