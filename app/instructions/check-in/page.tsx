import type { Metadata } from 'next';
import { Header, Footer, Hero, Section } from '@/components';
// import { YouTubeEmbed } from '@/components';

export const metadata: Metadata = {
  title: 'Check-in & Check-out | Sunrise Summit',
  description: 'Step-by-step check-in and check-out instructions for your stay at Sunrise Summit. Learn about arrival procedures, door codes, and departure checklist.',
  openGraph: {
    title: 'Check-in & Check-out | Sunrise Summit',
    description: 'Step-by-step check-in and check-out instructions for your stay at Sunrise Summit.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sunrise Summit',
  },
};

export default function CheckInPage() {
  return (
    <>
      <Header />
      <main className="animate-fade-in">
        <Hero
          title="Check-in & Check-out"
          subtitle="Step-by-step instructions for a smooth arrival and departure"
          imageSrc="/images/front-porch-yellow-door-garden.jpg"
        />

        {/* Before Arrival Section */}
        <Section variant="cream">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
              Before Arrival
            </h2>
            <div className="bg-white rounded-xl border border-sand p-6 md:p-8">
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy text-lg mb-2">
                      Confirmation Details
                    </h3>
                    <p className="text-mountain leading-relaxed">
                      You will receive a confirmation email with your booking details, door code,
                      and contact information. Please save this email for reference during your stay.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy text-lg mb-2">
                      Directions to the Property
                    </h3>
                    <p className="text-mountain leading-relaxed">
                      GPS coordinates and detailed directions will be provided in your confirmation email.
                      We recommend using the address provided for navigation. The cabin is located on
                      a mountain road with some curves - please drive carefully, especially after dark.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy text-lg mb-2">
                      Parking Information
                    </h3>
                    <p className="text-mountain leading-relaxed">
                      The driveway can accommodate up to 4 vehicles. Please park in the designated
                      areas and avoid blocking the turnaround area. If you have a large
                      vehicle or trailer, please contact us in advance.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Placeholder for YouTube video */}
            {/* <div className="mt-8">
              <h3 className="font-semibold text-navy text-lg mb-4">
                Arrival Video Guide
              </h3>
              <YouTubeEmbed videoId="YOUR_VIDEO_ID" title="Arrival instructions" />
            </div> */}
          </div>
        </Section>

        {/* Check-in Process Section */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
              Check-in Process
            </h2>
            <div className="bg-cream rounded-xl border border-sand p-6 md:p-8">
              <div className="mb-6 p-4 bg-navy/5 rounded-lg">
                <p className="text-navy font-semibold text-lg">
                  Check-in Time: 4:00 PM
                </p>
                <p className="text-mountain text-sm mt-1">
                  Early check-in may be available upon request, subject to availability.
                </p>
              </div>

              <ol className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-mountain text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy text-lg mb-2">
                      Locate the Front Door
                    </h3>
                    <p className="text-mountain leading-relaxed">
                      The main entrance is located on the front of the cabin, facing the driveway.
                      You will see a keypad lock on the door.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-mountain text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy text-lg mb-2">
                      Enter Your Door Code
                    </h3>
                    <p className="text-mountain leading-relaxed">
                      Use the unique door code provided in your confirmation email. Enter the 4-digit
                      code on the keypad and press the checkmark button. The lock will beep and unlock.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-mountain text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy text-lg mb-2">
                      Scan the QR Codes
                    </h3>
                    <p className="text-mountain leading-relaxed">
                      Look for the QR codes posted on the wall by the front door and by the back
                      porch exterior door. Scan them to access WiFi information, appliance instructions,
                      local recommendations, and emergency contact numbers.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Placeholder for YouTube video */}
            {/* <div className="mt-8">
              <h3 className="font-semibold text-navy text-lg mb-4">
                Door Lock Tutorial
              </h3>
              <YouTubeEmbed videoId="YOUR_VIDEO_ID" title="Door lock instructions" />
            </div> */}
          </div>
        </Section>

        {/* Check-out Process Section */}
        <Section variant="cream">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
              Check-out Process
            </h2>
            <div className="bg-white rounded-xl border border-sand p-6 md:p-8">
              <div className="mb-6 p-4 bg-navy/5 rounded-lg">
                <p className="text-navy font-semibold text-lg">
                  Check-out Time: 10:00 AM
                </p>
                <p className="text-mountain text-sm mt-1">
                  Late check-out may be available upon request, subject to availability and additional fees.
                </p>
              </div>

              <h3 className="font-semibold text-navy text-lg mb-4">
                Check-out Checklist
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-sand rounded flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-navy">Trash</p>
                    <p className="text-mountain text-sm">
                      Gather all trash and place it in the outdoor trash bins. Do not leave food waste inside.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-sand rounded flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-navy">Towels</p>
                    <p className="text-mountain text-sm">
                      Leave used towels on the tile floor of the main bathroom or near the laundry room.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-sand rounded flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-navy">Lights & Locks</p>
                    <p className="text-mountain text-sm">
                      Turn off all lights and fans. Lock all doors and windows when you leave.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Placeholder for YouTube video */}
            {/* <div className="mt-8">
              <h3 className="font-semibold text-navy text-lg mb-4">
                Check-out Walkthrough
              </h3>
              <YouTubeEmbed videoId="YOUR_VIDEO_ID" title="Check-out walkthrough" />
            </div> */}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
