'use client';

import { useState, FormEvent } from 'react';
import { Header, Footer, Hero, Section } from '@/components';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace 'placeholder' with your actual Formspree form ID
      // Email will be sent to: gracethisplacellc@gmail.com
      const response = await fetch('https://formspree.io/f/placeholder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitError('Something went wrong. Please try again later.');
      }
    } catch {
      setSubmitError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <Header />
      <main className="animate-fade-in">
        <Hero
          title="Contact Us"
          subtitle="We'd love to hear from you"
          imageSrc="/images/hero.png"
        />

        <Section variant="cream">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              {isSubmitted ? (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-sand">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-coral"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-mountain mb-6">
                      Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-coral hover:text-sunrise font-medium transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-sand"
                  noValidate
                >
                  <h2 className="text-2xl font-bold text-navy mb-6">
                    Send Us a Message
                  </h2>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                      {submitError}
                    </div>
                  )}

                  {/* Name Field */}
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block text-navy font-medium mb-2"
                    >
                      Name <span className="text-coral">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-coral/20 ${
                        errors.name
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-sand focus:border-coral'
                      }`}
                      placeholder="Your name"
                      aria-required="true"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-sm mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block text-navy font-medium mb-2"
                    >
                      Email <span className="text-coral">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-coral/20 ${
                        errors.email
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-sand focus:border-coral'
                      }`}
                      placeholder="your@email.com"
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="mb-5">
                    <label
                      htmlFor="phone"
                      className="block text-navy font-medium mb-2"
                    >
                      Phone <span className="text-mountain text-sm">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sand rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-coral/20 focus:border-coral"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-navy font-medium mb-2"
                    >
                      Message <span className="text-coral">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-coral/20 resize-vertical ${
                        errors.message
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-sand focus:border-coral'
                      }`}
                      placeholder="How can we help you?"
                      aria-required="true"
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-coral hover:bg-sunrise text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Info Section */}
            <div className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Get in Touch
                </h2>
                <p className="text-mountain text-lg mb-8 leading-relaxed">
                  Have questions about Sunrise Summit or planning your mountain getaway?
                  We&apos;re here to help make your stay unforgettable.
                </p>

                {/* Response Time */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-coral"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Quick Response</h3>
                    <p className="text-mountain">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-coral"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Location</h3>
                    <p className="text-mountain">
                      Waynesville, North Carolina
                    </p>
                    <p className="text-mountain/70 text-sm mt-1">
                      In the heart of the Great Smoky Mountains
                    </p>
                  </div>
                </div>

                {/* Mountain Illustration */}
                <div className="bg-gradient-to-br from-navy/5 to-mountain/10 rounded-xl p-8 text-center">
                  <div className="mb-4">
                    <svg
                      className="w-24 h-24 mx-auto text-mountain/40"
                      viewBox="0 0 100 60"
                      fill="currentColor"
                    >
                      <polygon points="50,5 80,55 20,55" opacity="0.6" />
                      <polygon points="30,20 55,55 5,55" opacity="0.4" />
                      <polygon points="70,15 95,55 45,55" opacity="0.5" />
                    </svg>
                  </div>
                  <p className="text-navy font-medium">
                    Your mountain retreat awaits
                  </p>
                  <p className="text-mountain text-sm mt-1">
                    Nestled above the clouds in the Smokies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
