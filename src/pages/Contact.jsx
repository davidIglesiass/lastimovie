import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center text-dark">Pagina de contacto</h1>
                <p>Por favor llena el siguiente formulario...</p>
                <ContactForm />
            </div>
        </>
    );
}

export default Contact