import { useEffect, useMemo, useState } from "react";
import { X, Send, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const bookingReceiverEmail = import.meta.env.VITE_BOOKING_RECEIVER_EMAIL || "sales@rajapushpa.in";

  const isEmailConfigured = useMemo(
    () => Boolean(emailJsPublicKey && emailJsServiceId && emailJsTemplateId),
    [emailJsPublicKey, emailJsServiceId, emailJsTemplateId]
  );

  useEffect(() => {
    if (!isEmailConfigured || window.emailJSInitialized) return;

    emailjs.init(emailJsPublicKey);
    window.emailJSInitialized = true;
  }, [emailJsPublicKey, isEmailConfigured]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Validate form
      if (!form.name || !form.phone || !form.email) {
        setSubmitStatus("error");
        setErrorMessage("Please fill in all required fields");
        setIsSubmitting(false);
        return;
      }

      if (!isEmailConfigured) {
        setSubmitStatus("error");
        setErrorMessage("Email setup is pending. Please try again later or contact us by phone.");
        setIsSubmitting(false);
        return;
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          to_email: bookingReceiverEmail,
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
          subject: `New Site Visit Booking Request from ${form.name}`,
        }
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => {
          onClose();
          setSubmitStatus("idle");
        }, 2000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Failed to send booking request. Please try again or contact us directly.");
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-scale-in"
        style={{
          animation: "scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="text-center mb-6">
          <h2 className="font-heading text-2xl font-bold text-blue-500">
            Schedule Site Visit
          </h2>
        </div>

        {submitStatus === "success" ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              Your booking request has been sent successfully. We'll contact you soon!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isEmailConfigured && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  Booking email is not configured yet. You can still fill the form after EmailJS keys are added.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                <p className="text-sm text-red-700">{errorMessage}</p>
              </div>
            )}

            {/* Name Field */}
            <input
              type="text"
              placeholder="Name*"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            {/* Phone and Email Row */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone*"
                required
                maxLength={15}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="px-4 py-3 border border-gray-300 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email*"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="px-4 py-3 border border-gray-300 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Message Field */}
            <textarea
              placeholder="Message"
              rows={4}
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-800 hover:bg-gray-900 disabled:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={18} />
                  SUBMIT
                </>
              )}
            </button>
          </form>
        )}
      </div>

      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

// Global type augmentation for window
declare global {
  interface Window {
    emailJSInitialized?: boolean;
  }
}

export default BookingModal;
