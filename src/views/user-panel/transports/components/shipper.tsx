import { Image } from "@/components/image";

export const TransportShipper = props => {
  const { data } = props;

  const shipper = data?.shipper;

  return (
    <td className="px-4 py-6 text-primary-800 text-[11px] leading-[17px]">
      <div className="flex items-center justify-center gap-2 w-full">
        <Image
          src={"/assets/shipment-box.png"}
          alt="shipment box"
          width={40}
          height={40}
          aspectRatio={1}
        ></Image>
        <div className="font-medium">{shipper?.name}</div>
      </div>
    </td>
  );
};
