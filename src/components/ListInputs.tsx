import "../styles/listInputs.scss";

interface ListInputs {
  changeOrder: () => void;
  orderStyle: boolean;
  filter: string;
  setFilter: (val: string) => void;
  filterUsers: (val: string) => void;
}

const ListInputs: React.FC<ListInputs> = ({
  changeOrder,
  orderStyle,
  filter,
  setFilter,
  filterUsers,
}) => {
  return (
    <div className="list_inputs">
      <div onClick={changeOrder} className="asc_desc_btn">
        <p>{orderStyle ? "Ascending order" : "Descending order"} by name</p>
      </div>
      <div className="filter_input">
        <label>Filter users </label>
        <input
          name="filter"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            filterUsers(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default ListInputs;
