'use client';

import * as React from 'react';
import { useState } from 'react';

import {
  FormProvider,
  useForm,
} from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import {
  Anchor,
  H2,
  Large,
} from '../typography';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

interface Props {
  className?: string;
  [key: string]: any;
}

const socials = [
  {
    site: 'LinkedIn',
    link: 'https://linkedin.com/in/bkschatzki',
  },
  {
    site: 'Github',
    link: 'https://github.com//bkschatzki',
  },
  {
    site: 'Twitter',
    link: 'https://x.com/in/bkschatzki',
  },
];

const formSchema = z.object({
  name: z.string().min(1, { message: 'Enter your name.' }),
  email: z.string().email('Enter a valid email.'),
  message: z.string().min(70, {
    message: 'Message length should be >= half a classic tweet.',
  }),
});

const Contact = React.forwardRef<HTMLDivElement, Props>(({ className, ...props }, ref) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitIsFailed, setSubmitIsFailed] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const handleFormSubmission = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...values,
        }).toString(),
      });
      if (res.ok) {
        // Handle successful submission
      } else {
        setSubmitIsFailed(true);
        console.error('Form submission failed: ', res.statusText);
        setTimeout(() => setSubmitIsFailed(false), 5000);
      }
    } catch (error) {
      setSubmitIsFailed(true);
      console.error('Form submission error: ', error);
      setTimeout(() => setSubmitIsFailed(false), 5000);
    }
    setIsSubmitting(false);
  };

  return (
    <div ref={ref}>
      <H2 className="header-space:px-6 border-0">Let&apos;s connect.</H2>
      <Card className="bg-secondary/50">
        <CardHeader>
          <CardTitle>
            <Large className="underline decoration-primary decoration-[0.3333rem] underline-offset-4">
              {socials.map((social, index) => (
                <React.Fragment key={social.site}>
                  <Anchor
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold no-underline"
                  >
                    {social.site}
                  </Anchor>
                  {index === socials.length - 2 ? ', or ' : ', '}
                </React.Fragment>
              ))}{' '}
              or via form below:
            </Large>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form
              name="contact"
              onSubmit={form.handleSubmit(handleFormSubmission)}
              className="flex flex-col gap-6"
            >
              <input
                type="hidden"
                name="form-name"
                value="contact"
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="sr-only">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        {...field}
                        className="focus:bg-background"
                      />
                    </FormControl>
                    <FormMessage className="absolute -bottom-5 left-3" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your email"
                        {...field}
                        className="focus:bg-background"
                      />
                    </FormControl>
                    <FormMessage className="absolute -bottom-5 left-3" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="sr-only">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message"
                        rows={5}
                        {...field}
                        className="focus:bg-background"
                      />
                    </FormControl>
                    <FormMessage className="absolute -bottom-5 left-3" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 hover:brightness-150"
              >
                Submit
              </Button>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
});
Contact.displayName = 'Contact';

export default Contact;