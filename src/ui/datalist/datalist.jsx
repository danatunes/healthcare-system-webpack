export const Datalist = ({ id, data }) => {
  console.log(data);
  return (
    <datalist id={id}>
      {data &&
        data.map((option) => <option key={option.id} value={option.name} />)}
    </datalist>
  );
};
