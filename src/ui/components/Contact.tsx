import { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";

        const handleSubmit = (e: Event) => {
            e.preventDefault();

            const form = document.getElementById("contact-form") as HTMLFormElement;
            const successMessage = document.querySelector(".form-success-message") as HTMLElement;
            const submitBtn = form.querySelector(".submit-btn") as HTMLButtonElement;

            if (!form || !submitBtn || !successMessage) return;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // @ts-ignore
            emailjs.sendForm("service_fdu23wp", "template_f6rojz9", form)
                .then(() => {
                    successMessage.style.display = "flex";
                    form.querySelectorAll(".form-group").forEach(el => {
                        (el as HTMLElement).style.display = "none";
                    });
                    submitBtn.style.display = "none";
                    form.reset();

                    setTimeout(() => {
                        successMessage.style.display = "none";
                    }, 6000);
                })
                .catch((error: unknown) => {
                    alert("An error occurred while sending the message.");
                    console.error("EmailJS Error:", error);
                    submitBtn.innerHTML = "Send Message";
                    submitBtn.disabled = false;
                });
        };

        script.onload = () => {
            // @ts-ignore
            emailjs.init("K8_6ximFEgp1monY_");
            const form = document.getElementById("contact-form");
            form?.addEventListener("submit", handleSubmit);
        };

        document.body.appendChild(script);

        // Cleanup
        return () => {
            const form = document.getElementById("contact-form");
            form?.removeEventListener("submit", handleSubmit);
        };
    }, []);

    return (
        <section id="contact" className="bg-[#f9fafe] py-20 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                {/* Title, text and social icons */}
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact us</h2>
                    <div className="w-20 h-[3px] bg-indigo-600 mb-6"></div>
                    <p className="text-gray-700 mb-6 max-w-md text-justify">
                        Have questions about how HealthSpeak AI works? Want to suggest a feature or collaborate with us?
                        Send us a message through this form or connect with us on social media.
                    </p>
                    <div className="flex gap-4 text-xl mt-4">
                        <a href="https://www.linkedin.com/in/bryansaenzt/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-indigo-600 transition">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Balsata" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-indigo-600 transition">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white rounded-xl p-8 shadow-md">
                    <form id="contact-form" className="space-y-5">
                        <div className="form-group">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" name="from_name" required className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none" />
                        </div>
                        <div className="form-group">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" name="reply_to" required className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none" />
                        </div>
                        <div className="form-group">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subject (optional)</label>
                            <input type="text" name="subject" className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:ring focus:ring-indigo-200 focus:outline-none" />
                        </div>
                        <div className="form-group">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                            <textarea name="message" rows={4} required className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"></textarea>
                        </div>
                        <button
                            type="submit"
                            className="submit-btn w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 cursor-pointer rounded-full shadow-lg transition duration-300"
                        >
                            Send Message
                        </button>
                        <p className="form-success-message hidden items-center justify-center gap-2 text-green-600 font-semibold text-center mt-4">
                            <i className="fas fa-check-circle text-green-500 text-xl mr-3"></i>
                            Message sent successfully!
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
