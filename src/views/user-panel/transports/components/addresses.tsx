export const TransportAddresses = props => {
  const { data } = props;

  const delivery_address = data?.delivery_address;
  const departure_address = data?.departure_address;

  return (
    <td className="h-full font-light px-4 py-6 inline-flex flex-col text-primary-800 text-[11px] leading-[17px]">
      <div className="inline-flex items-center">
        <div className="h-2.5 w-2.5 bg-primary-400 border border-primary-400 rounded-full me-2"></div>
        <div>
          <span className="font-medium">{departure_address.name}</span>,{" "}
          {departure_address.city.name}, {departure_address.district.name}
        </div>
      </div>
      <div className="inline-flex items-center">
        <div className="h-2.5 w-2.5 border border-primary-400 rounded-full me-2"></div>
        <div>
          <span className="font-medium">{delivery_address.name}</span>, {delivery_address.city.name}
          , {delivery_address.district.name}
        </div>
      </div>
    </td>
  );
};
