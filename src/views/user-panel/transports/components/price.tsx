export const TransportPrice = props => {
  const { data } = props;

  const price = data?.price?.carrier?.carrier_price;
  const currency = data?.price?.carrier?.price_details?.base_currency?.code;

  return (
    <td className="px-4 py-6 text-primary-800 text-[11px] leading-[17px]">
      <div className="rounded-full bg-gray-100 p-2.5 font-medium whitespace-nowrap">
        {price} {currency}
      </div>
    </td>
  );
};
