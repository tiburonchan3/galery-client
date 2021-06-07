import React from "react";
import { toast } from "react-toastify";
import { CategoryService } from "../../services/category.service";

const Form = ({ setReload, setShowModal, oldCategory }) => {
  const categoryServices = new CategoryService();
  const [category, setCategory] = React.useState({
    categoria: "" || oldCategory?.categoria,
    id: null || oldCategory?.id,
  });
  const onChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (category.categoria !== "") {
      if (!oldCategory) {
        categoryServices.addCategory(category).then((resp) => {
          setShowModal(false);
          setReload(true);
          toast.success(resp.message);
        });
      } else {
        categoryServices.putCategory(category).then((resp) => {
          setShowModal(false);
          setReload(true);
          toast.success(resp.messge);
        });
      }
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div className="grid grid-rows-2 gap-0">
          <input
            type="text"
            name="id"
            onChange={onChange}
            defaultValue={category.id}
            className="hidden"
          />
          <label>Nombre</label>
          <input
            className="rounded border border-solid p-2 w-80"
            placeholder="nombre"
            defaultValue={category.categoria}
            name="categoria"
            onChange={onChange}
          ></input>
        </div>
        <button
          type="submit"
          className="bg-global p-2 w-28 text-center text-semibold mt-8 text-white rounded-md font-semibold text-xs mr-8"
        >
          {oldCategory ? "Actualizar" : "Guardar"}
        </button>
      </div>
    </form>
  );
};

export default Form;
