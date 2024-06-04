export const TransportDate = props => {
  const { data } = props;

  const pickup_date = new Date(data?.pick_up_date);

  return (
    <td className="px-4 py-6 text-primary-800 text-[11px] leading-[17px]">
      {pickup_date.getUTCDate()}/{pickup_date.getUTCMonth()}/{pickup_date.getUTCFullYear()}
    </td>
  );
};
