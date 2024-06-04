import { TransportDetailsType } from "./types";
import { TransportCheckbox } from "./components/checkbox";
import { TransportID } from "./components/transport-id";
import { TransportShipper } from "./components/shipper";
import { TransportAddresses } from "./components/addresses";
import { TransportVehicle } from "./components/vehicle";
import { TransportDriver } from "./components/driver";
import { TransportDate } from "./components/date";
import { TransportPrice } from "./components/price";
import { TransportStatus } from "./components/status";

export default function TransportDetails({ data }: { data: TransportDetailsType }) {
  return (
    <tr className="capitalize bg-white w-full border rounded-xl">
      <TransportCheckbox />
      <TransportID data={data} />
      <TransportShipper data={data} />
      <TransportAddresses data={data} />
      <TransportVehicle data={data} />
      <TransportDriver data={data} />
      <TransportDate data={data} />
      <TransportPrice data={data} />
      <TransportStatus data={data} />
    </tr>
  );
}
