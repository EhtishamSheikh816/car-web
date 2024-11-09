const Contact = () => {
    return (
      <div>
      
        <main className="container mx-auto p-8 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <form className="mt-8">
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="border p-2 w-full" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Your Email" className="border p-2 w-full" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Your Message" className="border p-2 w-full" rows={4}></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2">Send Message</button>
          </form>
        </main>
        
      </div>
    );
  };
  
  export default Contact;