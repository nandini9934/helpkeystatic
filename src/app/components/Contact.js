export default function Contact() {
    return (
        <>
            <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center text-gray-700 py-10">
                <div className="col-span-1 p-10">
                    <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                    <ul className="text-red-600">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Help Key Card</li>
                        <li>Helpkey Point</li>
                        <li>Helpkey Services</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="col-span-1 p-10">
                    <h2 className="text-2xl font-bold mb-4">Important Links</h2>
                    <ul className="text-red-600">
                        <li>Refunds/Cancellations</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="col-span-1 p-10">
                    <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                    <ul className="text-red-600">
                        <li>Phone: +918062180646</li>
                        <li>Email: support@helpkey.in</li>
                    </ul>
                </div>
            </section>

        </>
    );
}
