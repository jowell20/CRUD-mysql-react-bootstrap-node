
import './App.css';
import {useState} from "react";
import Axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';


function App() {
  const [nombre,setNombre] = useState("");
  const [edad,setEdad] = useState();
  const [pais,setPais] = useState("");
  const [ciudad,setCiudad] = useState("");
  const [cargo,setCargo] = useState("");
  const [experiencia,setExperiencia] = useState();
  const [telefono,setTelefono] = useState("");
  const [email,setEmail] = useState("");
  const [listaEmpleados,setListaEmpleados]= useState([]);
  const [editar,setEditar] = useState(false);
  const[id,setId] = useState();


  const add= ()=>{
    Axios.post("http://localhost:3001/create",{
      nombre:nombre,
      edad:edad,
      pais:pais,
      ciudad:ciudad,
      cargo:cargo,
      experiencia:experiencia,
      email:email,
      telefono:telefono,

    }).then(()=>{
      getEmpleados();
      limpiar();
      Swal.fire({
        title: '<strong>Registro Exitoso !!!  </strong>',
        html: "<i>elempleado <strong> "+nombre+" </strong> fue registrado con exito</i>",
        icon: 'success',
        timer:2500
      })
    }).catch(function(error){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'no se logro registrar el empleado',
        footer: JSON.parse(JSON.stringify(error)).message=="Network Error"?"Intente mas tarde":JSON.parse(JSON.stringify(error)).message
      })
    });
  }
  const update= ()=>{
    Axios.put("http://localhost:3001/update",{
      id:id,
      nombre:nombre,
      edad:edad,
      pais:pais,
      ciudad:ciudad,
      cargo:cargo,
      experiencia:experiencia,
      email:email,
      telefono:telefono,

    }).then(()=>{
      getEmpleados();
      limpiar();
      Swal.fire({
        title: '<strong>actualizacion Exitosa !!!  </strong>',
        html: "<i>elempleado <strong> "+nombre+" </strong> fue actualizado con exito</i>",
        icon: 'success',
        timer:2500
      })
    }).catch(function(error){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'no se logro actualizar el empleado',
        footer: JSON.parse(JSON.stringify(error)).message=="Network Error"?"Intente mas tarde":JSON.parse(JSON.stringify(error)).message
      })
    });
  }
  const eliminar= (val)=>{
    Swal.fire({
      title: 'confirme eliminar?',
      html: "<i>desea eliminar a  <strong> "+val.nombre+" </strong> </i>",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3001/delete/${val.id}`).then(()=>{
      getEmpleados();
      limpiar();
      Swal.fire({
        title:val.nombre+" fue eliminado.",
        icon:'success',
        showConfirmButton:false,
        timer:2000
      } );
    }).catch(function(error){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'no se logro eliminar el empleado',
        footer: JSON.parse(JSON.stringify(error)).message=="Network Error"?"Intente mas tarde":JSON.parse(JSON.stringify(error)).message
      })
    });
        
      }
    });
    
  }
  const editarEmpleado = (val) =>{
    setEditar(true);
     setNombre(val.nombre);
     setEdad(val.edad);
     setPais(val.pais);
     setCiudad(val.ciudad);
     setCargo(val.cargo);
     setExperiencia(val.experiencia);
     setTelefono(val.telefono);
     setEmail(val.email);
     setId(val.id);
     
  }
  const limpiar =()=>{
    setNombre("");
    setEdad("");
    setPais("");
    setCiudad("");
    setCargo("");
    setExperiencia("");
    setTelefono("");
    setEmail("");
    setEditar(false); 
   }
   const getEmpleados= ()=>{
    Axios.get("http://localhost:3001/empleados").then((response)=>{
        setListaEmpleados(response.data);
     
    });

  }
 getEmpleados();

  return (
 <div className="container">
   
    <div className="card text-center">
      <div className="card-header">
       GESTION DE EMPLEADOS
      </div>
      <div className="card-body">
      <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombre: </span>
            <input type="text" 
             onChange={(event)=>{
              setNombre(event.target.value)
            }}
            className="form-control" value={nombre} placeholder="Ingrese Nombre" aria-label="User" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3">
            <span className="input-group-text"   id="basic-addon1">Edad: </span>
            <input type="number" 
             onChange={(event)=>{
              setEdad(event.target.value)
            }}
            className="form-control" value={edad}  placeholder="Ingrese Edad" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Pais: </span>
            <input type="text" 
             onChange={(event)=>{
              setPais(event.target.value)
            }}
            className="form-control" value={pais} placeholder="Ingrese Pais" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
    
      <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Ciudade: </span>
            <input type="text" 
             onChange={(event)=>{
              setCiudad(event.target.value)
            }}
            className="form-control" value={ciudad}  placeholder="Ingrese Ciudad" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Cargo: </span>
            <input type="text" 
             onChange={(event)=>{
              setCargo(event.target.value)
            }}
            className="form-control" value={cargo}  placeholder="Ingrese Cargo" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Experiencia: </span>
            <input type="number" 
             onChange={(event)=>{
              setExperiencia(event.target.value)
            }}
            className="form-control" value={experiencia}  placeholder="Ingrese Años de experiencia" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Telefono: </span>
            <input type="text" 
             onChange={(event)=>{
              setTelefono(event.target.value)
            }}
            className="form-control" value={telefono}  placeholder="Ingrese Telefono" aria-label="Username" aria-describedby="basic-addon1"/>
      </div> 
      <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Correo: </span>
            <input type="text" 
             onChange={(event)=>{
              setEmail(event.target.value)
            }}
            className="form-control" value={email}  placeholder="Ingrese Correo" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
       
      </div>
      <div className="card-footer text-body-secondary">
      {
        editar?
        <div className="d-grid gap-2 d-md-block">
      <button className='btn btn-warning m-2' onClick={update}> actualizar</button> 
      <button className='btn btn-info m-2' onClick={limpiar}> cancelar</button>
      </div>
      : <button className='btn btn-success' onClick={add}> Registrar</button>
    }
      </div>
  </div>
    <table className="table table-striped">
        <thead>
        <tr>
        <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Edad</th>
          <th scope="col">Pais</th>
          <th scope="col">Ciudad</th>
          <th scope="col">Cargo</th>
          <th scope="col">Experiencia</th>
          <th scope="col">Telefono</th>
          <th scope="col">Email</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
      {
            listaEmpleados.map((val,key)=>{
                return  <tr key={val.id}>
                          <th >{val.id}</th>
                          <td>{val.nombre}</td>
                          <td>{val.edad}</td>
                          <td>{val.pais}</td>
                          <td>{val.ciudad}</td>
                          <td>{val.cargo}</td>
                          <td>{val.experiencia}</td>
                          <td>{val.telefono}</td>
                          <td>{val.email}</td>
                          <td>
                          <div className="d-grid gap-2 d-md-block">
                                <button className="btn btn-info"
                                 onClick={()=>{
                                      editarEmpleado(val)
                                }} type="button">Update</button>
                                &nbsp;
                                <button className="btn btn-danger" onClick={()=>{
                                  eliminar(val);
                                }} type="button">delete</button>
                              </div>

                          </td>
                
              </tr>
                
                
                
                
                
            })
          }
       
        
      </tbody>
    </table>
</div>
  );

}

export default App;
