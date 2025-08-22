
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BookOpen, Briefcase, Eye, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="#" className="flex items-center gap-2 font-bold">
            <Icons.LinkedIn className="h-8 w-8 text-primary" />
            <span className="hidden text-xl font-semibold text-foreground sm:inline-block">LinkedIn</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="https://www.linkedin.com/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="https://www.linkedin.com/login">Claim Offer</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container flex flex-col items-center gap-6 px-4 py-16 text-center md:py-24 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            LINKEDIN STUDENT EXCLUSIVE
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Get 2 years of Premium
            <br />
            <span className="relative inline-block">
              <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-foreground"></span>
              <span className="text-muted-foreground">₹44,000 value</span>
            </span>
            <span className="text-primary"> FREE</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Verify your student status to get free access to LinkedIn Premium,
            and stand out to recruiters with exclusive features that help you get hired.
          </p>
          <div className="mt-4 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <Button size="lg" asChild className="group w-full sm:w-auto">
              <Link href="https://www.linkedin.com/login">
                Claim your free Premium
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Free for 24 months. Terms and conditions apply.
          </p>
        </section>

        <section className="w-full bg-card py-16 md:py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you get with Premium Career
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tools to help you get hired faster and develop the skills you
                need to succeed.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, i) => (
                <Card key={i} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="container px-4 py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get started in three easy steps
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              It's quick and simple to unlock your free Premium access.
            </p>
          </div>
          <div className="relative mt-16">
            <div
              className="absolute left-1/2 top-6 hidden h-0.5 w-2/3 -translate-x-1/2 bg-border md:block"
              aria-hidden="true"
            ></div>
            <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center bg-background px-4 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background font-bold text-primary">
                    {i + 1}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-card py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="mt-8 w-full">
              {faqs.map((faq, i) => (
                <AccordionItem value={`item-${i}`} key={i}>
                  <AccordionTrigger className="text-lg text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-2">
            <Icons.LinkedIn className="h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground text-center">
              &copy; {new Date().getFullYear()} LinkedIn Corporation
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground md:gap-6">
            <Link href="#" className="transition-colors hover:text-foreground">
              User Agreement
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Community Guidelines
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Eye,
    title: "Who's Viewed Your Profile",
    description:
      "See who's curious about you in the last 90 days and gain insights into your viewers.",
  },
  {
    icon: Mail,
    title: '5 InMail Credits/Month',
    description:
      "Contact anyone on LinkedIn, including hiring managers, even if you're not connected.",
  },
  {
    icon: Briefcase,
    title: 'Top Applicant Jobs',
    description:
      'Stand out from the crowd and get featured as a top applicant when you apply for jobs.',
  },
  {
    icon: BookOpen,
    title: '16,000+ Learning Courses',
    description:
      'Access expert-led courses on LinkedIn Learning to sharpen your skills and explore new ones.',
  },
];

const steps = [
  {
    title: 'Claim Your Offer',
    description:
      'Click the button above and sign in to your LinkedIn account to begin.',
  },
  {
    title: 'Verify Your Student Status',
    description:
      "We'll guide you through a quick verification with our partner to confirm your eligibility.",
  },
  {
    title: 'Enjoy Premium',
    description:
      'Start using your new Premium features immediately to boost your career prospects.',
  },
];

const faqs = [
  {
    question: 'Who is eligible for this student offer?',
    answer:
      'This offer is available to all full-time and part-time students at accredited colleges and universities. You will need to verify your student status to be eligible.',
  },
  {
    question: 'How long does the free Premium access last?',
    answer:
      'You will receive 24 months (2 years) of LinkedIn Premium Career for free, starting from the day you successfully verify your student status.',
  },
  {
    question: 'What happens after the 2-year free trial ends?',
    answer:
      'After your 24-month free period ends, your subscription will automatically terminate unless you choose to upgrade to a paid Premium plan. We will notify you before your free access expires so you can make a decision.',
  },
  {
    question: 'Can I cancel my free Premium subscription at any time?',
    answer:
      'Yes, you can cancel your Premium subscription at any time through your LinkedIn account settings without any charge. You will retain access until the end of your billing cycle.',
  },
];
