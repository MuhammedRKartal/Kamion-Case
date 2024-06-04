import { getContrastColor, getRandomColor } from "@/utils";

export const TransportStatus = props => {
  const { data } = props;

  const status = data?.latest_status?.type_value;

  const color = getRandomColor();
  const textColor = getContrastColor(color);

  return (
    <td className="px-4 py-6 text-primary-800 text-[11px] leading-[17px]">
      <div
        className="rounded-full bg-gray-100 py-2.5 px-4 flex justify-center items-center whitespace-nowrap"
        style={{ backgroundColor: color, color: textColor }}
      >
        {status}
      </div>
    </td>
  );
};
