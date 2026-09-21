import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <div className="page">
            <h1 className="page-title">Contacto</h1>
            <p className="status-text" style={{ padding: 0, marginBottom: '1.5rem' }}>Por favor llená el siguiente formulario...</p>
            <ContactForm />
        </div>
    );
}

export default Contact
