import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const id = useId();
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={id}>Find by name</label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
}
