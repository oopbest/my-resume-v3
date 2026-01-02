import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof formSchema>;

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_email: "setthawut.p@yahoo.com",
      message: data.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
