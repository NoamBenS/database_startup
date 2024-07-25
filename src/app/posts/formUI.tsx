"use client"

import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const schema = z.object({
  title: z.string(),
  content: z.string(),
})

export function UserForm() {

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  async function onSubmit(data: z.infer<typeof schema>) {
    console.log(data)
    // const response = await fetch("/api/users",
    //   { method: "POST", body: JSON.stringify(data) }
    // ).then((res) => res.json())

    // if (response.message) {
    //   return
    // }

    // const id = response.id

    // router.push(`/api/users/${id}`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>title</FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>content</FormLabel>
              <FormControl>
                <Input placeholder="lorum ipsum..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}

export default function FormUI({ userId }: { userId: string }) {
  return (
    <main>
      <div style={{ textAlign: "center", paddingTop: "5%" }}>
        <UserForm/>
      </div>
    </main>
  );
}
