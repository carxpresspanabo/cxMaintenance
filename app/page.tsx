export default function CarXPressMaintenancePage() {
  return (
    <div className="min-h-screen bg-[#08111f] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#17345c]/30 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-[#f3c84b]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[#4da7ff]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_25%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-12">
        <div className="grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur-md">
              <div className="h-2.5 w-2.5 rounded-full bg-[#f3c84b] animate-pulse" />
              <span className="text-sm font-medium tracking-wide text-white/85">
                CarXpressPH Website Status
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                We’re currently undergoing
                <span className="block bg-gradient-to-r from-[#f3c84b] via-[#ffe08a] to-[#f3c84b] bg-clip-text text-transparent">
                  system maintenance
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                CarXpressPH is currently running a scheduled system maintenance to improve our website performance and booking experience. We sincerely apologize for the inconvenience and appreciate your patience while we complete the updates.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/CarXpressPanabo"
                className="rounded-2xl bg-[#f3c84b] px-6 py-3 text-sm font-semibold text-[#08111f] shadow-lg shadow-[#f3c84b]/25 transition hover:-translate-y-0.5"
              >
                Message Us on Facebook
              </a>
              <a
                href="tel:09763514351"
                className="rounded-2xl border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Call 0976 351 4351
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-md">
                <p className="text-sm text-white/50">Status</p>
                <p className="mt-2 text-lg font-semibold">Maintenance in progress</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-md">
                <p className="text-sm text-white/50">Focus</p>
                <p className="mt-2 text-lg font-semibold">System stability</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-md">
                <p className="text-sm text-white/50">Thank you for</p>
                <p className="mt-2 text-lg font-semibold">Your patience</p>
              </div>
            </div>
          </div>

          {/* Right side visual card */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#f3c84b]/20 via-transparent to-[#4da7ff]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[#f3c84b]">CarXpressPH</p>
                  <h2 className="mt-2 text-2xl font-semibold">Maintenance Notice</h2>
                </div>
                <div className="rounded-full border border-[#f3c84b]/30 bg-[#f3c84b]/10 px-3 py-1 text-xs font-medium text-[#ffe08a]">
                  Back on the road soon
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl border border-white/10 bg-[#0b1729]/70 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/50">Service checkpoint</p>
                      <h3 className="mt-1 text-lg font-semibold text-white">What’s happening right now</h3>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65">
                      Temporary pause
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 p-3">
                      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#f3c84b]/15 text-sm font-semibold text-[#ffe08a]">
                        01
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Website optimization</p>
                        <p className="text-xs leading-6 text-white/60">We’re improving performance, reliability, and overall booking experience.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 p-3">
                      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#f3c84b]/15 text-sm font-semibold text-[#ffe08a]">
                        02
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Support remains available</p>
                        <p className="text-xs leading-6 text-white/60">For urgent concerns, you may still contact CarXpressPH through our official channels.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 p-3">
                      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#4da7ff]/15 text-sm font-semibold text-[#9fd0ff]">
                        03
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Back online soon</p>
                        <p className="text-xs leading-6 text-white/60">We’re working to restore full access as quickly and smoothly as possible.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm leading-7 text-white/70">
                    Our team is working behind the scenes to restore full access as soon as possible. For urgent booking concerns, please contact us directly through our official channels.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/50">Website</p>
                    <p className="mt-1 font-medium">www.carxpressph.com</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/50">Location</p>
                    <p className="mt-1 font-medium">Panabo City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
