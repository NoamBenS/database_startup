

// import { Button } from "@/components/ui/button"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { Input } from "@/components/ui/input"
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { useRouter } from "next/navigation"

// const schema = z.object({
//   name: z.string(),
//   email: z.string().email(),
//   phone: z.string().optional(),
// })

// export function UserForm() {

//   const form = useForm<z.infer<typeof schema>>({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//     },
//   });

//   const router = useRouter()

//   async function onSubmit(data: z.infer<typeof schema>) {
//     const response = await fetch("/api/users",
//       { method: "POST", body: JSON.stringify(data) }
//     ).then((res) => res.json())

//     if (response.message) {
//       return
//     }

//     const id = response.id

//     router.push(`/api/users/${id}`)
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>name</FormLabel>
//               <FormControl>
//                 <Input placeholder="name goes here" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>email</FormLabel>
//               <FormControl>
//                 <Input placeholder="email goes here" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="phone"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>phone number</FormLabel>
//               <FormControl>
//                 <Input placeholder="phone optionally goes here" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <div className="flex justify-center">
//           <Button type="submit">Submit</Button>
//         </div>
//       </form>
//     </Form>
//   )
// }

export default function Home() {
  return (
    <main>
        <div style={{ textAlign: "center", paddingTop: "5%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        </div>
    </main>
  );
}