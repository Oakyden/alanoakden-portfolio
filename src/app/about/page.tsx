import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/image-4.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Alan Oakden. I live in York, England, I love all things software and coding, and the opportunities they bring.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {`I’m Alan Oakden. I live in York, England, I love all things creative, particularly coding and software.`}
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              {`I’ve always had an interest in technology from a young age. I'd been
              a hobbyist web designer since my teens, but in late 2017 I decided to 
              really push on with my career and study it with the aim of getting a
              career in software and web development. I temporarily reduced my working 
              hours to four days a week and focused Friday through to Sunday on learning
              additional web developer skills as well as mobile app development.`}
            </p>
            <p>
              {`Since
              then, I've gone strength to strength. I landed a role as a sole mobile app 
              developer at Latus Health in 2018, which was a baptism of fire but a successful one where 
              I learned so much in a short space of time. We released a wellbeing app for Outokumpu steelmakers - a €7.7 billion revenue company.
              I then became a team-lead at one of Manchester's leading agencies Access (now GAIN) in 2019 where we managed large clients such as Edrington (owners of Famous Grouse, Brugal Rum, Macallan Whisky etc), WaterAid and the Welsh Government
              to name a few. From there, I was asked to rejoin Latus Health in 2021 in order to build my own team to work 
              on a proprietary health solution that entailed - a health dashboard for occ health appointments, data recording and compliance and a wellbeing app that would partially sync with the health dashboard for appointment scheduling while offering online GP, Physio and Counselling services.
              We also handled an acquisition of an app called 'Reward Me Now' that'd incentivise healthier habits for employees in return for monetary rewards and vouchers off top brands. Since then I've focused on becoming a contractor and building my own business. 
              Most recently I've been doing React and Drupal CMS work for Interactive Investor, revitalising their editor experience with draggable layout paragraphs, and creating a new suite of components in the nextJS frontend that consumes Drupal in a headless manner.`}
            </p>
            <p>
              {`Outside of coding I love anything that can keep me actively engaged. The 
              occasional Netflix series and film is fine, but I much prefer gaming, 
              going for hikes with my dog, playing bass or doing creative work with 
              photography - especially film photography recently. Most recently the arrival of my daughter, Lilly, has been keeping me busy!`}
            </p>
            <p>
              {`I'm currently seeking to be engaged in any project that utilises 'JAMstack'
              - Javascript, APIs and Markup. My ideal project would include one or more of; React 
              (Gatsby, Next, React Native, Expo etc too), Typescript, Node, GraphQL, Cypress, Docker,
               Azure / AWS / Firebase and noSQL DBs. I also have experience with various CMS software, especially Drupal.`}
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/alanoakden" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://github.com/Oakyden" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/alan-oakden-b46832111/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:admin@alanoakden.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              admin@alanoakden.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
