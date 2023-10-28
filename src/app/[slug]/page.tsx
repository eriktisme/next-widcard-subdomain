interface PageProps {
  slug: string
}

export default function Page({ params }: PageProps) {
  return <h1>Hello world! Greetings, from {params.slug}!</h1>
}
