"use client";

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
import Topic from "./Topic";
import { useContactForm } from "@/hooks";

export default function ContactForm() {
  const { form, isSubmitting, onSubmit } = useContactForm();

  return (
    <div id="contact" className=" lg:py-32">
      <Topic title="Contact" />
      <div className="max-w-4xl mx-auto p-8 rounded-xl border shadow-lg flex flex-col md:flex-row gap-8">
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
            <form onSubmit={onSubmit} className="space-y-4">
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

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
