import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Favourites',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Favourites() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="It's always interesting to know people's setups or favourite items to use - so here's mine!"
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1, (2021)">
           {` I've always switched between Windows and Mac for various things. However for dev work Mac is my preferred machine.
            The reasons are fairly simple. A huge proportion of the dev community uses macbook, guides and how-tos are often written
            on the assumption you are using a macbook or unix-based system. The continuity of hardware / OS also means that if a dev tool has been designed
            to work on mac I can be confident an issue i'm seeing isn't a 'just me' problem.`}
          </Tool>
          <Tool title="LG 27” 270L Monitor">
            {`A large monitor is a must if you want to cater to designs for phone screens all the way up to XXl pixel sizes. 2560x1440 is a great resolution for 
            assessing designs on screens that need max width behaviours.`}
          </Tool>
          <Tool title="Keychron K8 Wirless keyboard">
            {`Are you really a dev if you don't have a mechanical keyboard nowadays!? Not only is it a great tactile keyboard, it also allows me to switch very
            quickly between wired on my PC and wireless bluetooth with my Mac (as well as allowing for quick layout changes between Windows and Mac layouts).`}
          </Tool>
          <Tool title="Positive Grid amp / speaker">
            {`A great practice amp for guitar and bass, as well as being a great speaker for listening to music while I work.`}
          </Tool>
          <Tool title="Audio Technica headphones">
            {`For those times where I need real focus, or I'm not allowed to be as loud!`}
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VSCode">
            {`The amount of extensions and community using VSCode now makes it an almost no-brainer. I previously used Atom for a while, as well as dabbled with Coda
            on my old Mac pro back in 2012.`}
          </Tool>
          <Tool title="zsh">
            {`By no means do I use my terminal to its full potential, but I do use it for git commands and some other things. I like the syntax highlighting in zsh as well as the potential it offers
            whenever I read a blog post about a new command line tool or utility.`}
          </Tool>
          <Tool title="Android Studio / Xcode">
            {`A must-have to run phone emulators when developing mobile apps.`}
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            {`Always the go-to now. I actually used Adobe XD for quite a while as it was part of creative suite, but working with a team of designers often leads to figma being the tool of choice.`}
          </Tool>
          <Tool title="Storybook">
            {`It can often go overlooked, but when there is proper buy-in for a design system as well as design tokens then Storybook is an excellent tool. I used it primarily when working
            with Edrington on their Macallan site, where we had a large design system that needed to be implemented across multiple sites, but I'll always recommend it to anyone who is working on a design system 
            with a larger team.`}
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Youtube">
            {`For some it may be a procastination tool, but I genuinely find putting on a debate or a podcast while I work helps me focus. 
            I also use it to learn new things, whether that be a new coding technique or a new way of doing something in React.`}
          </Tool>
          <Tool title="Spotify">
            {`Similar to Youtube, Spotify is also great for learning content or to listen to interesting topics. I often find I use it more for music though.`}
          </Tool>
          <Tool title="Discord">
            {`Again, for some this may be a procrastination tool, but I find it a great way to keep in touch with friends and colleagues. 
            There's so many communities for various subjects and topics. I've found Discord can; provide work opportunities, advice on self employment as well as networking opportunities in the area.`}
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
