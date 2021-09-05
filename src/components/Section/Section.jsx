export default function Section ({title, children}) {
  return (
    <Section>
      <h1>{title}</h1>
      {children}
    </Section>
  )
};