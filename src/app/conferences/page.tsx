import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Conferences and podcasts',
  description:
    `Conferences, podcasts and resources I've found useful`,
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Conferences, podcasts and resources I've found useful."
      intro="I love to listen to keep up to date with the latest in software, design and business. Here are some of my favourite resources."
    >
      <div className="space-y-20">
        <SpeakingSection title="Conferences">
          <Appearance
            href="#"
            title="Front End North 2025"
            description="A welcoming one-track, one-day conference in Sheffield for developers and designers who work on the web."
            event="Front End North, July 2025"
            cta="Read Article"
          />
          <Appearance
            href="#"
            title="Drupal Camp London"
            description="Just before the UK announced lockdowns and travel restrictions I attended Drupal Camp London 2019 with my colleagues at Access."
            event="Drupal Camp London, December 2019"
            cta="Read Article"
          />
        </SpeakingSection>
        <SpeakingSection title="Podcasts">
          <Appearance
            href="https://www.youtube.com/@ThePrimeTimeagen"
            title="The Prime Time Agen"
            description="Lots of insight across videos and shorts"
            event="Youtube Channel"
            cta="Listen to podcast"
          />
          <Appearance
            href="https://www.youtube.com/@BeyondCoding"
            title="Beyond Coding"
            description="Beyond Coding is a weekly podcast with conversations that go beyond coding in a fireside chat format.
Common topics are tech, entrepreneurship, and career journeys."
            event="Youtube Channel"
            cta="Listen to podcast"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
