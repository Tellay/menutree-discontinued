import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <svg
        className="absolute inset-0 -z-10 -mt-4 w-full rotate-180 fill-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="current"
          fillOpacity="1"
          d="M0,192L18.5,176C36.9,160,74,128,111,128C147.7,128,185,160,222,149.3C258.5,139,295,85,332,90.7C369.2,96,406,160,443,170.7C480,181,517,139,554,133.3C590.8,128,628,160,665,186.7C701.5,213,738,235,775,234.7C812.3,235,849,213,886,218.7C923.1,224,960,256,997,266.7C1033.8,277,1071,267,1108,229.3C1144.6,192,1182,128,1218,128C1255.4,128,1292,192,1329,192C1366.2,192,1403,128,1422,96L1440,64L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
        ></path>
      </svg>

      <section className="flex h-screen flex-col justify-center">
        <div className="container flex justify-start">
          <div className="text-balance text-primary 2xl:w-1/2">
            <h1 className="text-4xl font-black sm:text-6xl md:text-7xl">
              Your restaurant in one Link. Less papers, just a QRCode away.
            </h1>

            <p className="mt-6 text-base font-semibold md:text-xl">
              Join us, use less papers and share your meals. Use the link or the
              QRCode generated. Let&apos;s help the planet to help us. Try now!
            </p>

            <form
              action={'/signup/restaurant=menutree'}
              className="mt-12 flex flex-col gap-2 lg:flex-row lg:items-center"
            >
              <div className="flex items-center overflow-hidden rounded-lg bg-white px-4 py-4 font-medium text-foreground">
                <label htmlFor="restaurant">menutr.ee/</label>
                <input
                  className="w-full outline-none placeholder:text-foreground"
                  id="restaurant"
                  type="text"
                  placeholder="yourrestaurant"
                />
              </div>

              <Link
                href="/signup/restaurant=menutree"
                className={buttonVariants({
                  variant: 'tertiary',
                  size: 'lg',
                  className: 'w-full text-nowrap lg:w-fit',
                })}
              >
                Create your MenuTree
              </Link>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-quartiary flex h-screen flex-col justify-center">
        <div className="container flex justify-end">
          <div className="text-balance text-primary 2xl:w-1/2">
            <h1 className="text-4xl font-black sm:text-6xl md:text-7xl">
              Let people know about your restaurant with our leaderboard system.
            </h1>

            <p className="mt-6 text-base font-semibold md:text-xl">
              Use our system to make your restaurant more popular. There is a
              monthly and annual leaderboard. You just need as many positive
              reviews as possible!
            </p>

            <Link
              href="/signup"
              className={buttonVariants({
                variant: 'secondary',
                size: 'lg',
                className: 'mt-12 w-full text-nowrap !rounded-full lg:w-fit',
              })}
            >
              Create your MenuTree
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
