

const Contact = () => {
    return (
        <div className="w-full h-full">
            <div className="hero min-h-screen bg-fixed pb-10" style={{ backgroundImage: "url(https://i.ibb.co/4Tdhrdp/elevate-snnh-GYNqm44-unsplash.jpg)" }}>
                <div className="text-neutral-content w-full h-full flex items-center justify-center">
                    <div className="px-6 md:px-12 mx-8 mt-10 sm:mt-12 lg:mt-10 w-full sm:w-4/5 lg:w-3/4">
                        <h1 className="h1-text mb-5 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wider text-[#FDF6D2]">Get in Touch with Us</h1>
                        <p className="mb-5 text-xl sm:text-2xl lg:text-3xl text-[#FDF6D2]">We are here to help and answer any questions you might have. We look forward to hearing from you.</p>
                        <form className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message" rows="5"></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-[#A30000] hover:bg-[#FFB500] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-[#53B725] text-[#FDF6D2] py-0 sm:py-0 md:py-10">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Our Location</h2>
                    <p className="text-xl">1234 Street Name, City, State, ZIP</p>
                </div>
                <div className="flex justify-center mt-6">
                    <iframe
                        title="Our Location"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d116710.85149010732!2d90.3836732!3d23.91747120000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sbd!4v1720809975624!5m2!1sen!2sbd"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="eager"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;

