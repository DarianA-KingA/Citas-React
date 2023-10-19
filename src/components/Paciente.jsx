
const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">Darian</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">correo@correo.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">fecha alta: {''}
          <span className="font-normal normal-case">10/12/2023</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti quas est officiis vitae at possimus? Voluptatibus porro perferendis numquam doloribus voluptates earum nobis fuga, amet sapiente asperiores incidunt omnis?</span>
        </p>
      </div>
  )
}

export default Paciente
