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

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'

import Image from 'next/image'

import Container from '../Container'
import { Button } from '../Button'

import retangulo from '@/assets/form-bg.svg'
import sonic from '@/assets/images/sonic-black-white.png'

const formSchema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z
    .string()
    .nonempty('E-mail is required')
    .email('E-mail format is invalid'),
  message: z.string().nonempty('Message is required'),
})

type FormFieldsData = z.infer<typeof formSchema>

export default function Contact({ id }: { id: string }) {
  const form = useForm<FormFieldsData>({ resolver: zodResolver(formSchema) })

  async function sendEmail(data: FormFieldsData) {
    /* TODO: Validate if the email was submitted */
    form.reset({
      name: '',
      email: '',
      message: '',
    })
  }
  return (
    <section className="relative min-h-[40rem] overflow-clip" id={id}>
      <Container className="absolute bottom-0 left-0 right-0 z-20 m-auto flex h-[40rem] w-full items-center justify-center gap-8 md:justify-between">
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
                        {...form.register}
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
                        {...form.register}
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
                        {...form.register}
                      />
                    </FormControl>
                    <FormMessage className="dark:text-red-400" />
                  </FormItem>
                )}
              />
              <Button className="text-white" type="submit">
                {form.formState.isLoading ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </Form>
        </div>

        {/* Sonic */}
        <Image
          src={sonic}
          alt="sonic"
          className="hidden h-full w-fit transition-all duration-700 hover:-translate-x-5 md:block"
        />
      </Container>
      {/* Background */}
      <Image
        src={retangulo}
        alt="retangulo background"
        className="absolute right-0 hidden min-h-full md:block"
      />
    </section>
  )
}
