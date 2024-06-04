import { useEffect, useState } from "react";
import TransportDetails from "./transport-details";
import { TransportDetailsType } from "./types";
import { details } from "@/data/urls";
import { Section } from "@/components/section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import TransportsHeader from "./transports-header";

export default function Transports() {
  const [data, setData] = useState<TransportDetailsType[]>();
  const [loading, setLoading] = useState(false);
  const ths = ["SEÇ", "ID", "FİRMA", "GÜZERGAH", "ARAÇ", "ŞÖFÖR", "TARİH", "FİYAT", "DURUM"];

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.DOMAIN_REQUEST_URL}${details.shipment}`)
      .then(res => res.json())
      .then(data => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <Section tag="section">
      <TransportsHeader />
      {data && !loading ? (
        <table className="border-separate border-spacing-y-1 w-[inherit]">
          <thead>
            <tr className="text-[11px] leading-[18px] text-gray-700 text-center">
              {ths.map(th => (
                <th key={th}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody className="w-full">
            {data?.map((item, index) => (
              <TransportDetails key={index} data={item}></TransportDetails>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex items-center justify-center">
          <FontAwesomeIcon
            icon={faSpinner}
            className="animate-spin text-4xl text-primary-400"
          ></FontAwesomeIcon>
        </div>
      )}
    </Section>
  );
}
