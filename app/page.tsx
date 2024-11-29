import { Metadata } from "next";
import PDFUploader from "@/components/pdf-uploader";
import PDFViewer from "@/components/pdf-viewer";
import Summary from "@/components/summary";
import Chat from "@/components/chat";

export const metadata: Metadata = {
  title: "Summarize and chat with your documents",
  description: "Upload a PDF, get a summary, and chat with its content.",
};

export default function Home() {
  return (
    <main className="container mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Menu Bar */}
      <nav className="bg-white shadow-md rounded-lg mb-6">
        <div className="flex justify-between items-center p-4">
          <div className="text-lg font-bold text-blue-600">ResumDoc</div>
          <div className="flex space-x-4">
            <a href="#products" className="text-gray-700 hover:text-blue-600">Products</a>
            <a href="#signin" className="text-gray-700 hover:text-blue-600">Sign In</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
        ResumDoc
      </h1>
      <p className="text-center text-lg text-gray-700 mb-6">
        Upload a PDF, get a summary, and chat with its content.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div id="uploader" className="bg-white shadow-lg rounded-lg p-6 mb-4">
          <PDFUploader />
          <PDFViewer />
        </div>
        <div id="summary" className="bg-white shadow-lg rounded-lg p-6 space-y-8">
          <Summary />
          <Chat />
        </div>
      </div>

      {/* Additional Sections for Navigation */}
      <section id="products" className="bg-white shadow-lg rounded-lg p-6 mt-4">
        <h2 className="text-xl font-semibold mb-4">Our Products</h2>
        {/* Add product details here */}
        <p>Details about products will go here.</p>
      </section>

      <section id="signin" className="bg-white shadow-lg rounded-lg p-6 mt-4">
        <h2 className="text-xl font-semibold mb-4">Sign In</h2>
        {/* Add sign-in form or link here */}
        <p>Sign in form or link will go here.</p>
      </section>

      <section id="about" className="bg-white shadow-lg rounded-lg p-6 mt-4">
        <h2 className="text-xl font-semibold mb-4">About Us</h2>
        {/* Add about us details here */}
        <p>Information about the company will go here.</p>
      </section>

      <section id="contact" className="bg-white shadow-lg rounded-lg p-6 mt-4">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        {/* Add contact information here */}
        <p>Contact details will go here.</p>
      </section>
    </main>
  );
}