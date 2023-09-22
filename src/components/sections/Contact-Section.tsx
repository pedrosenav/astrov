import Container from '../Container'

export default function Contact({ id }: { id: string }) {
  return (
    <section id={id}>
      <Container>
        <h3>Get in touch</h3>
      </Container>
    </section>
  )
}
