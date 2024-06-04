export const TransportDate = props => {
  const { data } = props;

  const pickup_date = new Date(data?.pick_up_date);
  const day = ("0" + pickup_date.getUTCDate()).slice(-2);
  const month = ("0" + (pickup_date.getUTCMonth() + 1)).slice(-2);
  const year = pickup_date.getUTCFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return (
    <td className="px-4 py-6 text-primary-800 text-[11px] leading-[17px] text-center">
      {formattedDate}
    </td>
  );
};
