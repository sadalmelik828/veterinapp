import React from 'react'

function FormComponent (props) {
  return (
    <form>
      <input
        type="text"
        name="firstName"
        value={props.data}
        onChange={props}
        placeholder="Nombre"
      />
      <input
        type="text"
        name="lastName"
        value={props.data}
        onChange={props}
        placeholder="Apellido"
      />
      <input
        type="email"
        name="email"
        value={props.data}
        onChange={props}
        placeholder="Correo Electr&oacute;nico"
      />
      <input
        type="text"
        name="phone"
        value={props.data}
        onChange={props}
        placeholder="Tel&eacute;fono"
      />
      <select
        name="especies"
        value={props.data}
        onChange={props}
      >
        <option value="">Seleccione una especie...</option>
        <option value="canino">Canino</option>
        <option value="felino">Felino</option>
      </select>
      <input
        type="text"
        name="petname"
        value={props.data}
        onChange={props}
        placeholder="Nombre de mascota"
      />
      <label>
        <input
          type="radio"
          name="typesearchturn"
          value="turndate"
          checked={props.data}
          onChange={props}
        /> Fecha
      </label>
      <label>
        <input
          type="radio"
          name="typesearchturn"
          value="turnprof"
          checked={props.data}
          onChange={props}
        /> Profesional
      </label>
      <input
        type="text"
        name="searchdateturn"
        value={props.data}
        onChange={props}
        placeholder="Fecha"
      />
      <select
        name="searchprofturn"
        value={props.data}
        onChange={props}
      >
        <option value="">Seleccione una profesional...</option>
        <option value="rodrigo_lugo">Rodrigo Lugo</option>
        <option value="diego_lugo">Diego Lugo</option>
      </select>
      <input
        type="submit"
        value="Confirmar Turno"
      />
    </form>
  )
}

export default FormComponent
