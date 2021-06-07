import React from 'react';

const EmpInfo = ({empInfo}) => {
    return (
        <ul>
        <li>
          <span>Nombre: </span>
          {empInfo?.nombre}
        </li>
        <li>
          <span>Apellido: </span>
          {empInfo?.apellido}
        </li>
        <li>
          <span>Codigo de acceso: </span>
          {empInfo?.codeAccess}
        </li>
        {empInfo?.telefono && (
          <li>
            <span>Telefono: </span>
            {empInfo.telefono}
          </li>
        )}
        {empInfo?.direccion && (
          <li>
            <span>Direccion: </span>
            {empInfo?.direccion}
          </li>
        )}
         {empInfo?.email && (
          <li>
            <span>Email: </span>
            {empInfo?.email}
          </li>
          
        )}
      </ul>
    );
}

export default EmpInfo;
