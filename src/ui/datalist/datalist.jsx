export const Datalist = ({ id, data }) => {
  return (
    <datalist id={id} key={id}>
      {data &&
        data.map((option) => <option key={option.id} value={option.name} />)}
    </datalist>
  );
};
