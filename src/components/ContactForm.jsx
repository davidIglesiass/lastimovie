import { useState } from "react";
import Swal from "sweetalert2";

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errores = 0;
    Object.values(formData).map((val) => {
      val === "" ? errores++ : "";
    });
    if (errores != 0)
      return Swal.fire({
        icon: "error",
        title: "Todos los campos son obligatorios",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        customClass: {
          popup: "swal-red",
        }
      });
    console.log("Datos enviados:", formData);
    Swal.fire({
      icon: "success",
      title: "Informacion enviada correctamente :D",
      text: "Gracias por llenar el formulario.",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      customClass: {
        popup: "swal-green",
      },
    });
    setFormData({
      nombre: "",
      correo: "",
      mensaje: "",
    });
  };

  return (
    <form className="p-4 bg-light rounded shadow" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="correo" className="form-label">
          Correo
        </label>
        <input
          type="text"
          name="correo"
          id="correo"
          value={formData.correo}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="mensaje" className="form-label">
          Mensaje
        </label>
        <textarea
          type="text"
          name="mensaje"
          id="mensaje"
          className="form-control"
          rows="4"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-dark">
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
