import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import OKHealthyLife from '@/images/logos/OKHealthyLife.png'
import welshGov from '@/images/logos/welshGov.png'
import macallanWhisky from '@/images/logos/macallanWhisky.png'
import RMNlogo from '@/images/logos/RMNlogo.webp'
import yodhaWhite from '@/images/logos/yodha-white.png'
import yodhaLogo from '@/images/logos/yodha-logo.png'
import yodhaMobile from '@/images/logos/yodha-yellow.png'
import yodhaTablet from '@/images/logos/yodha-tablet.png'
import wateraid from '@/images/logos/wateraid.png'
import interactiveInvestor from '@/images/logos/Interactive_Investor_logo.jpg'

const projects = [
  {
    name: 'Interactive Investor',
    description:
      `Working within a large enterprise team consisting of multiple API, front end and mobile squads. Interactive Investor is a subscription based online investment service with £59 billion of assets under administration and over 400,000 customers. 
      "ii" were seeking a dev with experience in both the React ecosystem as well as Drupal. Although a rather niche combination, I met the requirements. 
      Originally a 3 month contract, it was extended several times over. I decided to leave the contract after a successful 16 months in order to help look after my first born child, Lilly, during the first weeks of her life.`,
    link: { href: '/articles/interactive-investor', label: 'ii article' },
    logo: interactiveInvestor,
  },
  {
    name: 'WaterAid Website(s)',
    description:
      'WaterAid had one codebase that built out to several independent albeit connected websites. By utilising Drupal, config split and Acquia hosting, one theme and central CMS configuration could be used, while offering bespoke CMS fields and features to each WaterAid country. Improvements to the home page and donation flow increased donations as a whole by 64%.',
    link: { href: 'https://www.wateraid.org/uk/', label: 'WaterAid websites' },
    logo: wateraid,
  },
  {
    name: 'Reward Me Now',
    description:
      'Reward your employees with exclusive discounts & benefits for over 130 top UK brands, all housed in a bespoke company app. Built with a Laravel Nova dashboard and a React Native mobile app. The Simfoni Retailer API is used for vouchers.',
    link: { href: 'https://play.google.com/store/apps/details?id=com.redu.Ashleigh&hl=en&gl=US', label: 'RMN on Google Play' },
    logo: RMNlogo,
  },
  {
    name: 'Health Kiosk App',
    description:
      `A kiosk app made in React Native. The app is placed on Samsung A8 tablets that integrates with a flight case. The flight case also contains
      various health hardware including a blood pressure device, spriometer and audiometry headphones. Various third party API and SDK integrations are used
      to gather health data.`,
    link: { href: 'https://yodha.io', label: 'Yodha landing page' },
    logo: yodhaTablet,
  },
  {
    name: 'Yodha Web App',
    description:
      'Hosted on Azure, utilising Azure CI/CD, devops, API management, Auth0, a .Net backend and React/Bootstrap front end.',
    link: { href: 'https://yodha.io', label: 'yodha.io' },
    logo: yodhaLogo,
  },
  {
    name: 'Yodha Mobile App',
    description:
      `An accompanying mobile app for Yodha. Utilised a Laravel dashboard for voucher / steps management. React Native was used for the app build.
       Integrated with Google and Apple steps.`,
    link: { href: 'https://www.latushealth.co.uk/yodha/', label: 'Yodha Info Page' },
    logo: yodhaWhite,
  },
  {
    name: 'Wellbeing App',
    description:
      `An app that could whitelabel for other companies. The most notable was OK 2 HealthyLife for the steel manufacturer Otokumpu.`,
    link: { href: 'https://apkcombo.com/ok-2-healthylife/uk.co.latushealth.outokumpu/', label: 'Archived App Page' },
    logo: OKHealthyLife,
  },
  {
    name: 'Welsh Government Law Site',
    description:
      'The Welsh Government wanted a website to clarify Welsh Law to citizens of Wales. Built with Drupal 9, utilising a custom theme that followed the Government GEL style guidelines and designed to be bilingual.',
    link: { href: 'https://law.gov.wales/', label: 'law.gov.wales' },
    logo: welshGov,
  },
  {
    name: 'Macallan Whisky Checkout',
    description:
      'During Covid, Macallan wished to provide whisky to US customers. Most EU users checked out via a shopify checkout, Macallan wanted to direct US users off to a US-only checkout that utilised Braintree payment gateway and the Thirstie retailer network for checkout. The solution utilised a middleware with graphQL and a custom Drupal module that utilised React to checkout.',
    link: { href: 'https://www.themacallan.com/en', label: 'Macallan Web Checkout' },
    logo: macallanWhisky,
  }
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made or collaborated on."
      intro="I've worked on mobile apps, CMS sites (in particular Drupal) as well as proprietary 
      web app solutions (React, NextJS, Gatsby) within large enterprise structures. Below are just some of the things I've led on or had a big input."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt="project logo"
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
