"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: any) => {
    // console.log("Form Submitted", data);
    // toast.success("Form submitted successfully!");
    // form.reset();

    setIsFormSubmitted(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_email: "setthawut.p@yahoo.com",
      message: data.message,
    };

    emailjs
      .send(
        SERVICE_ID, // Replace with your EmailJS Service ID
        TEMPLATE_ID, // Replace with your EmailJS Template ID
        templateParams,
        PUBLIC_KEY // Replace with your EmailJS Public Key
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        toast.success("Message sent successfully!");
        setIsFormSubmitted(false);

        form.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <div id="contact" className=" lg:py-24">
      <h2 className="text-center text-3xl font-bold py-8">Contact Me</h2>
      <div className="max-w-4xl mx-auto bg-zinc-800 p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-8">
        {/* Left Side - Description */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="text-white-600 mt-2">
            Have questions or feedback? Fill out the form and I will get back to
            you as soon as possible.
          </p>
          <div className="mt-4 space-y-2">
            <p>
              <strong>Email:</strong> setthawut.p@yahoo.com
            </p>
            <p>
              <strong>Phone:</strong> +66 88 260 5687
            </p>
            <p>
              <strong>Address:</strong> Bangkok, Thailand
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Your Message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                disabled={isFormSubmitted}
              >
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
