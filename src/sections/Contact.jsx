import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
        })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    }

    // service_3yuynou


    const handleSubmit = async (e) => 
        {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.sendForm(
                'service_3yuynou', // Service ID
                'template_s52c8rs', // Template ID
                formRef.current,  // Pass the form reference
                'AVOOLt5jFf6Pbyl3e', // Your EmailJS Public Key,
                {
                    from_name: form.name,
                    to_name: 'Harun',
                    from_email: form.email,
                    to_email: 'harun.bansode@gmail.com', // Replace with your own email
                    message: form.message,
                  },
            );
    
            setLoading(false);
            alert("Email sent successfully!");
            setForm({ name: "", email: "", message: "" }); // Reset form after successful submission
        } catch (error) {
            setLoading(false);
            console.error(`Error sending email: ${error}`);
        }
    }

    return(
        <section className="sm:px-10 px-5 my-30">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="Terminal Background" className="absolute min-h-screen inset-0"/>
                <div className="max-w-xl relative z-10 sm:px-10 px-5 mt-20">
                    <h3 className=" sm:text-4xl text-3xl font-semibold text-white ">Let's Talk</h3>
                    <p className="text-lg text-white mt-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt sit repellendus dicta! Delectus, modi! Aut ratione facere id fugiat ut mollitia, veniam, quia quaerat enim at soluta beatae necessitatibus?
                    </p>
                <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-7">
                    <label className="space-y-3">
                        <span className="text-lg text-neutral-500 ">Full Name</span>
                        <input
                        type = "text"
                        name = "name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-neutral-900 px-5 py-2 min-h-14 rounded-lg placeholder:text-neutral-900 text-lg text-neutral-400 shadow-black shadow-2xl focus:outline-none"
                        placeholder="John Doe" />
                    </label>
                    <label className="space-y-3">
                        <span className="text-lg text-neutral-500">Email</span>
                        <input
                        type = "email"
                        name = "email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-neutral-900 px-5 py-2 min-h-14 rounded-lg placeholder:text-neutral-900 text-lg text-neutral-400 shadow-black shadow-2xl focus:outline-none"
                        placeholder="John.doe@gmail.com" />
                    </label>
                    <label className="space-y-3">
                        <span className="text-lg text-neutral-500 ">Message</span>
                        <textarea
                        type = "textarea"
                        name = "message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-neutral-900 px-5 py-2 min-h-14 rounded-lg placeholder:text-neutral-900 text-lg text-neutral-400 shadow-black shadow-2xl focus:outline-none"
                        placeholder="Write something interesting..." />
                    </label>
                    <button type="submit" className="bg-neutral-800 px-5 py-2 min-h-12 rounded-lg shadow-neutral-900 shadow-2xl flex justify-center items-center text-lg text-white gap-3" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                        <img src="/assets/arrow-up.png" alt="arrow-up" className="w-2.5 h-2.5 object-contain invert brightness-0"/>
                    </button>
                </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;