'use client';

import * as React from 'react';
import { useState } from 'react';

import {
  FormProvider,
  useForm,
} from 'react-hook-form';
import { z } from 'zod';

import {
  Anchor,
  H2,
  Large,
} from '@/components/typography';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';

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
    link: 'https://github.com/bkschatzki',
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
  const [submitIsSuccessful, setSubmitIsSuccessful] = useState(false);
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
    setSubmitIsSuccessful(false);
    setSubmitIsFailed(false);
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...values,
        }).toString(),
      });
      if (res.ok) {
        setSubmitIsSuccessful(true);
        form.reset();
      } else {
        setSubmitIsFailed(true);
        console.error('Form submission failed: ', res.statusText);
      }
    } catch (error) {
      setSubmitIsFailed(true);
      console.error('Form submission error: ', error);
    }
    setIsSubmitting(false);
  };

  return (
    <div ref={ref}>
      <Card
        className={
          submitIsSuccessful
          ? 'bg-success/10'
          : submitIsFailed
          ? 'bg-destructive/10'
          : 'bg-secondary/50'
        }
      >
        <CardHeader>
          <CardTitle>
            <Large className="underline decoration-primary decoration-[0.1667rem] underline-offset-4">
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
                  {', '}
                </React.Fragment>
              ))}{' '}
              or form below:
            </Large>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form
              name="contact"
              onSubmit={form.handleSubmit(handleFormSubmission)}
              className="flex flex-col gap-6"
              data-netlify="true"
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
                    <FormMessage className="absolute -bottom-10 left-3 header-space:-bottom-5" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`mt-7 hover:brightness-150 header-space:mt-2`}
              >
                {isSubmitting
                  ? 'Submitting'
                  : submitIsSuccessful
                    ? 'Submit again'
                    : submitIsFailed
                      ? 'Retry submit'
                      : 'Submit'}
              </Button>
            </form>
            <p
              className={cn(
                `mt-5 text-[0.8rem] font-medium ${
                  submitIsSuccessful ? 'text-success' : submitIsFailed ? 'text-destructive' : 'm-0'
                }`
              )}
            >
              {submitIsSuccessful
                ? 'Successfully submitted, looking forward to talking soon!'
                : submitIsFailed
                  ? 'Something went wrong. Please try again.'
                  : ''}
            </p>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  );
});
Contact.displayName = 'Contact';

export default Contact;
