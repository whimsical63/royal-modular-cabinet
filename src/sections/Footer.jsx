import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

const Footer = () => {
    const headerRef = useRef(null);
    const formRef = useRef(null);
    const businessRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            headerRef.current,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 90%",
                    toggleActions: "play none restart reverse",
                },
            },
        );

        gsap.fromTo(
            formRef.current,
            {
                opacity: 0,
                x: -100,
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: formRef.current,
                    start: "top 85%",
                    toggleActions: "play none restart reverse",
                },
            }
        );

        gsap.fromTo(
            businessRef.current,
            {
                x: 100,
                duration: 1,
                opacity: 0,
                ease: "back.out"
            },
            {
                x: 0,
                duration: 1,
                opacity: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: businessRef.current,
                    start: "top 85%",
                    toggleActions: "play none restart reverse",
                },
            },
        );
    }, []);

    const formRefSubmit = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Royal Modular Cabinet',
                    from_email: form.email,
                    to_email: 'laurenceunabia@gmail.com',
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )
            setLoading(false);

            alert('Your message has been sent successfully!');

            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong!');
        }
    }


    return (
        <>
            <div ref={headerRef} className="p-8 text-white flex items-center xs:flex-col sm:flex-row">
                <img
                    className="sm:w-[200px] sm:h-[200px] xs:w-[150px] xs:h-[150px] object-cover justify-center items-center"
                    src="/assets/RMC.png"
                    alt="Royal Modular Cabinet Logo"
                />
                <div className="sm:ms-6 xs:ms-0 flex flex-col justify-center items-center">
                    <h2 className="font-forum xs:text-4xl sm:text-6xl xs:text-center sm:text-start">
                        ROYAL MODULAR CABINET
                    </h2>
                    <h2 className="font-forum xs:text-2xl sm:text-4xl xs:self-center sm:self-start">
                        We design and build
                    </h2>
                </div>
            </div>
            <div
                className="flex justify-around xs:flex-col sm:flex-row xs:text-center sm:text-left gap-4 items-stretch px-5">
                <div className="my-16 w-1/2 xs:w-full">
                    <div ref={formRef} className="xs:h-[630px] sm:h-[700px] relative"> {/* Fixed height container */}
                        <h3 className="xs:mx-5 lg:mx-auto font-forum text-6xl text-white">Let's Talk</h3>
                        <div className="relative h-full xs:mx-5 lg:mx-auto">
                            {/* Background */}
                            <div className="absolute inset-0 bg-[#af8c53] rounded-xl opacity-50"></div>

                            {/* Form Content */}
                            <form ref={formRefSubmit} onSubmit={handleSubmit} className="relative p-6 flex flex-col justify-between h-full font-forum">
                                <h2 className="text-5xl md:text-3xl lg:text-5xl font-bold mb-4 text-white">Contact Form</h2>
                                <div>
                                    <div className="mb-4">
                                        <label htmlFor="name"
                                               className="text-3xl md:text-3xl lg:text-4xl text-white font-medium mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 text-3xl md:text-3xl lg:text-4xl text-white placeholder-gray-400 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-customGold focus:border-customGold"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email"
                                               className="text-3xl md:text-3xl lg:text-4xl text-white font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 text-3xl md:text-3xl lg:text-4xl text-white placeholder-gray-400 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-customGold focus:border-customGold"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className="py-2">
                                        <label htmlFor="message"
                                               className="text-3xl md:text-3xl lg:text-4xl text-white font-medium" >Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full px-4 py-2 text-3xl md:text-3xl lg:text-4xl text-white placeholder-gray-400 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-customGold focus:border-customGold"
                                            placeholder="Enter your message"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-yellow-600 text-forum text-2xl text-white py-2 px-4 rounded-md hover:bg-yellow-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 hover:transition-all duration-300 ease-in-out"
                                    >{loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <div ref={businessRef} className="my-16 w-1/2 xs:w-full">
                    <h3 className="xs:mx-5 lg:mx-auto font-forum text-6xl sm:text-6xl text-white">Business Hours</h3>
                    <div className="sm:h-[700px] xs:h-[500px] relative">  {/* Fixed height container */}
                        <div className="relative h-full xs:mx-5 lg:mx-auto">
                            {/* Background */}
                            <div className="absolute inset-0 bg-[#af8c53] rounded-xl opacity-50"></div>

                            {/* Text Content */}
                            <div className="relative p-4 flex flex-col justify-around items-stretch h-full">
                                {/* First Section */}
                                <div className="md:p-4 sm:p-0 rounded-lg">
                                    <p className="font-forum md:mb-6 sm:mb-0 text-white z-20 text-3xl md:text-3xl lg:text-4xl">
                                        <b>Monday to Friday:</b> 9:00 AM - 5:00 PM <br/>
                                        <b>Saturday:</b> 9:00 AM - 12 Noon
                                    </p>
                                    <p className="font-forum text-white z-20 text-3xl md:text-3xl lg:text-4xl">
                                        <b>Sunday:</b> By appointment only
                                    </p>
                                </div>

                                {/* Second Section */}
                                <div className="p-4 mt-6 md:p-0 rounded-lg flex flex-col gap-6">
                                    {/* Contact Us Header */}
                                    <h3 className="font-forum xs:text-center sm:text-start text-white text-4xl md:text-5xl lg:text-6xl">
                                        <b>Contact Us</b>
                                    </h3>

                                    {/* Contact Information */}
                                    <div className="flex items-center font-forum gap-3 text-white text-3xl md:text-3xl lg:text-4xl">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <b>DITO:</b> 0991 693 2024
                                    </div>

                                    {/* Additional Information */}
                                    <div className="flex items-center gap-3 text-white text-3xl md:text-3xl lg:text-4xl">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                d="M22.675 0H1.325C.594 0 0 .594 0 1.325v21.351C0 23.406.594 24 1.325 24h11.495v-9.293H9.847v-3.622h2.973V8.413c0-2.945 1.796-4.554 4.417-4.554 1.26 0 2.345.094 2.66.136v3.083h-1.825c-1.432 0-1.709.68-1.709 1.676v2.196h3.416l-.445 3.622h-2.971V24h5.82c.73 0 1.325-.594 1.325-1.325V1.325C24 .594 23.406 0 22.675 0z"
                                            />
                                        </svg>
                                        <a
                                            className="text-white underline hover:underline font-forum text-3xl md:text-3xl lg:text-4xl hover:text-blue-300 transition duration-300 ease-in-out"
                                            href={"https://www.facebook.com/royalmodularcabinet"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Royal Modular Cabinet
                                        </a>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Footer
