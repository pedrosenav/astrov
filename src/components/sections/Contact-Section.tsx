'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'

import Image from 'next/image'

import Container from '../Container'
import { Button } from '../Button'

import retangulo from '@/assets/form-bg.svg'
import sonic from '@/assets/images/sonic-black-white.png'
import { CircleNotch } from '@phosphor-icons/react'

const formSchema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z
    .string()
    .nonempty('E-mail is required')
    .email('E-mail format is invalid'),
  message: z.string().nonempty('Message is required'),
})

export type FormFieldsData = z.infer<typeof formSchema>

export default function Contact({ id }: { id: string }) {
  const form = useForm<FormFieldsData>({ resolver: zodResolver(formSchema) })

  const { toast } = useToast()

  async function sendEmail(data: FormFieldsData) {
    const response = await fetch('/api/contact-1111', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data, null, 2),
    })

    if (response.ok) {
      toast({
        duration: 2000,
        title: 'Email sent successfully',
        description: 'Thanks for reaching out :)',
      })
      console.log('Email sent successfully!')
      form.reset({
        name: '',
        email: '',
        message: '',
      })
    } else {
      toast({
        duration: 2000,
        title: 'Email could not be sent',
        description: 'An error occurred, please try again',
      })
      console.log(
        'Email could not be sent: An error occurred, please try again',
      )
    }
  }

  return (
    <section className="relative min-h-[44rem] overflow-clip" id={id}>
      <Container className="absolute bottom-0 left-0 right-0 z-20 flex h-[40rem] w-full items-center justify-center gap-8 md:justify-between">
        {/* Contact Form */}
        {/* TODO: Botão muito perto da section */}

        <div className="flex w-96 flex-col gap-12 sm:min-w-[26rem]">
          {/* Title */}
          <div className="space-y-2">
            <h4 className="tracking-wider text-slate-400">
              Want to start a project?
            </h4>
            <h3 className="font-alt text-5xl font-bold text-astrov-600 dark:text-astrov-500">
              Get in touch
            </h3>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(sendEmail)} className="space-y-4">
              {/* FormField: Used to build controlled fields */}
              {/* Name */}
              <FormField
                disabled={form.formState.isSubmitting}
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-astrov-600 dark:text-astrov-400 ">
                      Name *
                    </FormLabel>
                    <FormControl className="ring-0 focus-visible:ring-offset-0">
                      <Input
                        className="border-b-4 border-astrov-400 bg-white/60 text-lg backdrop-blur-lg transition-all hover:border-astrov-500 focus:border-astrov-500 focus-visible:ring-0 dark:border-astrov-400/30 dark:bg-zinc-900/90"
                        type="text"
                        {...field}
                        {...form.register('name')} // This will make its value available for both the form validation and submission
                      />
                    </FormControl>
                    <FormMessage className="dark:text-red-400" />
                  </FormItem>
                )}
              />
              {/* E-mail */}
              <FormField
                disabled={form.formState.isSubmitting}
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className=" focus-visible:outline-none focus-visible:ring-0">
                    <FormLabel className="text-base text-astrov-600 dark:text-astrov-400">
                      E-mail *
                    </FormLabel>
                    <FormControl className="ring-0 focus-visible:ring-offset-0">
                      <Input
                        className="border-b-4 border-astrov-400 bg-white/60 text-lg backdrop-blur-lg transition-all hover:border-astrov-500 focus:border-astrov-500 focus-visible:ring-0 dark:border-astrov-400/30 dark:bg-zinc-900/90"
                        type="email"
                        {...field}
                        {...form.register('email')}
                      />
                    </FormControl>
                    <FormMessage className="dark:text-red-400" />
                  </FormItem>
                )}
              />
              {/* Message */}
              <FormField
                disabled={form.formState.isSubmitting}
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-astrov-600 dark:text-astrov-400">
                      Message *
                    </FormLabel>
                    <FormControl className="ring-0 focus-visible:ring-offset-0">
                      <Textarea
                        className="max-h-[10rem] min-h-[5rem] border-b-4 border-astrov-400 bg-white/60 text-lg backdrop-blur-lg transition-all hover:border-astrov-500 focus:border-astrov-500 focus-visible:ring-0 dark:border-astrov-400/30 dark:bg-zinc-900/90"
                        rows={5}
                        {...field}
                        {...form.register('message')}
                      />
                    </FormControl>
                    <FormMessage className="dark:text-red-400" />
                  </FormItem>
                )}
              />
              <Button className="text-white" type="submit">
                {form.formState.isSubmitting ? (
                  <CircleNotch size={20} className="mx-auto animate-spin" />
                ) : (
                  'Submit'
                )}
              </Button>
            </form>
          </Form>
        </div>

        {/* Sonic */}
        <Image
          src={sonic}
          alt="sonic"
          className="hidden min-h-full w-fit transition-all duration-700 hover:-translate-x-5 md:block"
        />
      </Container>
      {/* Background */}
      {/* TODO: Retangulo quebrando no resposivo */}
      <Image
        src={retangulo}
        alt="Background"
        className="absolute right-0 hidden min-h-full md:block"
      />
    </section>
  )
}
