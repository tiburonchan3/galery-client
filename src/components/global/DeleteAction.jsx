import React from 'react';
import Warn from '../../assets/warn.svg';
import { MarkService } from '../../services/mark.service';
import { CategoryService } from '../../services/category.service';
import { ProviderService } from '../../services/provider.service';
import { toast } from 'react-toastify';

const DeleteAction = ({ onClose, id, setReload, type }) => {
  const markService = new MarkService();
  const categoryService = new CategoryService();
  const providerService = new ProviderService();
  const deleteMethod = () => {
    switch (type) {
      case 'provider':
        providerService
          .deleteProvider(id)
          .then(() => {
            toast.success('Se elimino correctamente!!');
            setReload(true);
          })
          .catch(() => {
            console.log('error!!');
          });
        break;
      case 'mark':
        markService
          .deleteMark(id)
          .then(() => {
            toast.success('Se elimino correctamente!!');
            setReload(true);
          })
          .catch(() => {
            console.log('error!!');
          });
        break;
      case 'category':
        categoryService
          .deleteCategory(id)
          .then(() => {
            toast.success('Se elimino correctamente!!');
            setReload(true);
          })
          .catch(() => {
            console.log('error!!');
          });
        break;
      default:
        break;
    }
    onClose();
  };
  return (
    <div className='border rounded p-4 bg-white shadow'>
      <div className='flex justify-center content-center'>
        <img src={Warn} alt='none' className='w-16' />
      </div>
      <p>Esta seguro de eliminar este registro?</p>
      <button
        onClick={deleteMethod}
        className='rounded text-center text-white px-4 bg-indigo-500'
      >
        Si, eliminar
      </button>
      <button
        className='bg-red-400 ml-6 px-4 text-white rounded mt-2 text-center'
        onClick={onClose}
      >
        No, cancelar
      </button>
    </div>
  );
};

export default DeleteAction;
