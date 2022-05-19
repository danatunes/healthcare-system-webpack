export const Datalist = ({ id, data }) => {
  console.log(id);
  return (
    <datalist id={id}>
      {data &&
        data.map((option) => <option key={option.name} value={option.name} />)}
    </datalist>
  );
};
