import { formatPhoneNumber } from "@/utils";

export const TransportDriver = props => {
  const { data } = props;

  const driver = data?.driver;

  return (
    <td className="px-4 py-6 font-light text-primary-800 text-[11px] leading-[17px]">
      <div className="inline-flex flex-col ">
        <span className="font-medium">
          {driver?.name} {driver?.surname}
        </span>
        {formatPhoneNumber(driver?.phone)}
      </div>
    </td>
  );
};
