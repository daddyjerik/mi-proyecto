import { useState } from 'react';
import Boton from './Boton';

function App() {
  const [oscuro, setOscuro] = useState(false);

  return (
    <div className={oscuro ? 'dark' : ''}>
      <div className="min-h-screen p-6 flex flex-wrap items-start gap-4 bg-white dark:bg-slate-900">
        <Boton variante="primario" onClick={() => alert('Guardado correctamente')}>
          Guardar Cambios
        </Boton>
        <Boton variante="secundario" onClick={() => alert('Operación cancelada')}>
          Cancelar
        </Boton>
        <Boton variante="peligro" onClick={() => alert('Registro eliminado')}>
          Eliminar Usuario
        </Boton>
        <Boton variante="exito" onClick={() => alert('Operación exitosa')}>
          Confirmar
        </Boton>
        <Boton variante="primario" disabled>
          Deshabilitado
        </Boton>
        <Boton variante="secundario" onClick={() => setOscuro(!oscuro)}>
          {oscuro ? 'Modo claro' : 'Modo oscuro'}
        </Boton>
      </div>
    </div>
  );
}

export default App;