import { Image } from "@/components/image";

export const TransportVehicle = props => {
  const { data } = props;

  const vehicle = data?.vehicle;

  return (
    <td className="px-4 py-6 text-primary-800 text-[11px] leading-[17px]">
      {vehicle && (
        <div className="flex items-center justify-center gap-2 w-full">
          <Image
            src={"/assets/transport-logo.png"}
            alt="transport logo"
            width={40}
            height={40}
            aspectRatio={1}
            className="w-full"
          ></Image>
          <div className="flex flex-col w-full">
            <span className="font-semibold whitespace-nowrap">{vehicle?.plate}</span>
            <span className="whitespace-nowrap">{vehicle?.group_type_value}</span>
          </div>
        </div>
      )}
    </td>
  );
};
