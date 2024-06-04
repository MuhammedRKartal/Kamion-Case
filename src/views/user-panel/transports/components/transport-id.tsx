export const TransportID = props => {
  const { data } = props;

  const id = data?.id;

  return (
    <td className="font-semibold px-4 py-6 text-primary-800 text-[11px] leading-[17px] text-center">
      {id}
    </td>
  );
};
