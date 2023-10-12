import Container from '@/components/Container'
import { SocialProps, Social } from '@/lib/social'
import astrovFilho from '@/assets/images/theo2.png'

export default function AboutSection({ id }: { id: string }) {
  function SocialIcon({ icon: Icon, url, platformName }: SocialProps) {
    return (
      <a
        className="rounded-md bg-astrov-600 p-1 transition-all hover:bg-astrov-500 "
        href={url}
        title={platformName}
        target="_blank"
      >
        <Icon
          size={28}
          weight="regular"
          className="fill-sky-100 transition-all"
        />
      </a>
    )
  }

  return (
    <section
      id={id}
      className="relative flex h-[40] min-h-[40rem] w-full items-center justify-center overflow-hidden bg-white"
    >
      <Container className="absolute z-20 flex w-full items-center justify-start py-32">
        <div className="flex w-full max-w-[30rem] flex-col gap-16 text-slate-100">
          <div className="w-full max-w-[30rem]">
            {/* Title */}
            <h3 className="font-alt text-6xl sm:text-7xl">About</h3>
            <h3 className="font-alt text-8xl font-extrabold sm:text-9xl">
              Astrov
            </h3>
          </div>
          {/* Separator */}
          <span className="h-1 w-28 bg-astrov-600"></span>
          {/* Caption */}
          <p className="text-xl">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Hello! I'm Astrov, an artist who dreams big and finds inspiration in
            every corner of the world. My journey is shaped by my unwavering
            passion for art and the ability to transform concepts into
            captivating digital illustrations.
          </p>
          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-astrov-600">Follow me</h3>
            <div className="flex items-center gap-4">
              {Social.map((social) => (
                <SocialIcon key={social.title} {...social} />
              ))}
            </div>
          </div>
        </div>
      </Container>
      {/* Background Image */}
      <div className="absolute z-10 h-full w-full bg-astrov-500/60 backdrop-blur-md transition-all duration-300 md:backdrop-blur-none lg:bg-astrov-500/10"></div>
      {/* TODO: Efeito scroll mais lento entre o Astrov e o fundo */}
      <img
        src={astrovFilho}
        alt="Astrov e Theo, seu filho"
        className="md min-h-[52rem] object-cover "
      />
    </section>
  )
}
