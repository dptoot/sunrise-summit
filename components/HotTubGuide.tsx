'use client';

export default function HotTubGuide() {
  return (
    <div className="space-y-8">
      {/* Quick Start Guide */}
      <div className="bg-white rounded-xl border border-sand p-6 md:p-8">
        <h3 className="text-xl font-bold text-navy mb-4">Quick Start Guide</h3>
        <p className="text-mountain mb-4">The spa should be hot and ready for you when you arrive. To use it:</p>
        <ol className="space-y-3">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-coral/20 text-coral rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <p className="text-mountain"><span className="font-semibold text-navy">Remove the cover</span> — Lift and set aside</p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-coral/20 text-coral rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div className="text-mountain">
              <p><span className="font-semibold text-navy">Press &quot;Jets&quot;</span> to turn on the jets</p>
              <ul className="mt-2 ml-4 space-y-1 text-sm">
                <li>• Press once = Low speed</li>
                <li>• Press twice = High speed</li>
                <li>• Press three times = Off</li>
              </ul>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-coral/20 text-coral rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <p className="text-mountain"><span className="font-semibold text-navy">Enjoy your soak!</span></p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-coral/20 text-coral rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <p className="text-mountain"><span className="font-semibold text-navy">When finished</span> — Replace the cover securely</p>
          </li>
        </ol>
      </div>

      {/* Control Panel */}
      <div className="bg-white rounded-xl border border-sand p-6 md:p-8">
        <h3 className="text-xl font-bold text-navy mb-4">Control Panel Buttons</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-sand">
                <th className="pb-3 pr-4 font-semibold text-navy">Button</th>
                <th className="pb-3 font-semibold text-navy">What It Does</th>
              </tr>
            </thead>
            <tbody className="text-mountain">
              <tr className="border-b border-sand/50">
                <td className="py-3 pr-4 font-medium text-navy">Jets</td>
                <td className="py-3">Turns on/off the main jets (press multiple times to cycle)</td>
              </tr>
              <tr className="border-b border-sand/50">
                <td className="py-3 pr-4 font-medium text-navy">Blower</td>
                <td className="py-3">Turns on/off gentle air bubbles</td>
              </tr>
              <tr className="border-b border-sand/50">
                <td className="py-3 pr-4 font-medium text-navy">Light</td>
                <td className="py-3">Turns spa light on/off</td>
              </tr>
              <tr className="border-b border-sand/50">
                <td className="py-3 pr-4 font-medium text-navy">Warm ▲</td>
                <td className="py-3">Raises temperature</td>
              </tr>
              <tr className="border-b border-sand/50">
                <td className="py-3 pr-4 font-medium text-navy">Cool ▼</td>
                <td className="py-3">Lowers temperature</td>
              </tr>
              <tr className="border-b border-sand/50">
                <td className="py-3 pr-4 font-medium text-navy">Mode</td>
                <td className="py-3">Do not adjust — leave in current mode</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-navy">Aux</td>
                <td className="py-3">Not connected to anything — you can ignore this one!</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-sand/50 rounded-lg">
          <p className="text-navy text-sm">
            <span className="font-semibold">Temperature is preset to 100°F</span> — Feel free to adjust between 98-102°F for your comfort.
          </p>
        </div>
      </div>

      {/* Spa Rules */}
      <div className="bg-white rounded-xl border border-sand p-6 md:p-8">
        <h3 className="text-xl font-bold text-navy mb-6">Spa Rules for Your Safety</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Do's */}
          <div>
            <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
              <span className="text-lg">✅</span> Please Do
            </h4>
            <ul className="space-y-2 text-mountain">
              <li className="flex gap-2">
                <span className="text-green-600">•</span>
                <span><span className="font-medium">Shower before entering</span> (removes lotions, oils, deodorant)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">•</span>
                <span><span className="font-medium">Stay hydrated</span> — Drink water before and after soaking</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">•</span>
                <span><span className="font-medium">Limit soaks to 15-20 minutes</span> at a time</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">•</span>
                <span><span className="font-medium">Replace cover securely</span> after each use</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">•</span>
                <span><span className="font-medium">Let us know</span> if anything seems wrong</span>
              </li>
            </ul>
          </div>
          {/* Don'ts */}
          <div>
            <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
              <span className="text-lg">❌</span> Please Don&apos;t
            </h4>
            <ul className="space-y-2 text-mountain">
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span><span className="font-medium">No glass</span> in or around the spa (use plastic cups only)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span><span className="font-medium">No food</span> in the spa</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span><span className="font-medium">No oils, bath bombs, or bubbles</span> — These damage the equipment</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span><span className="font-medium">No children under 5</span> in the hot tub</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span><span className="font-medium">No unsupervised children</span> at any time</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span><span className="font-medium">Don&apos;t adjust the Mode button</span> (leave in Standard mode)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span><span className="font-medium">Don&apos;t drain or refill</span> the spa</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Health & Safety Warnings */}
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-6 md:p-8">
        <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
          <span>⚠️</span> Health &amp; Safety Warnings
        </h3>
        <div className="space-y-4 text-amber-900">
          <div>
            <p className="font-semibold mb-2">Do NOT use the spa if you:</p>
            <ul className="space-y-1 ml-4">
              <li>• Have been drinking alcohol</li>
              <li>• Are pregnant (consult your doctor first)</li>
              <li>• Have heart disease or blood pressure issues</li>
              <li>• Have open wounds or skin infections</li>
              <li>• Are feeling lightheaded or unwell</li>
            </ul>
          </div>
          <p className="font-semibold">Water temperature should never exceed 104°F</p>
          <div>
            <p className="font-semibold mb-2">Exit immediately if you feel:</p>
            <ul className="space-y-1 ml-4">
              <li>• Dizzy or lightheaded</li>
              <li>• Nauseous</li>
              <li>• Overheated</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Temperature Adjustment */}
      <div className="bg-white rounded-xl border border-sand p-6 md:p-8">
        <h3 className="text-xl font-bold text-navy mb-4">Temperature Adjustment</h3>
        <p className="text-mountain mb-4">If the water is too hot or too cold:</p>
        <ol className="space-y-3 mb-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-coral/20 text-coral rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <p className="text-mountain">Press <span className="font-semibold text-navy">Warm ▲</span> or <span className="font-semibold text-navy">Cool ▼</span> once to see the current set temperature</p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-coral/20 text-coral rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <p className="text-mountain">Press again to adjust (1 degree per press)</p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-coral/20 text-coral rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <p className="text-mountain">Wait — the spa heats approximately <span className="font-semibold">3-6 degrees per hour</span></p>
          </li>
        </ol>
        <p className="text-navy font-medium">Recommended range: 98-102°F</p>
      </div>

      {/* After Your Soak */}
      <div className="bg-white rounded-xl border border-sand p-6 md:p-8">
        <h3 className="text-xl font-bold text-navy mb-4">After Your Soak</h3>
        <ol className="space-y-3">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-coral/20 text-coral rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <p className="text-mountain">Turn off jets (press Jets button until they stop)</p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-coral/20 text-coral rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <p className="text-mountain">Exit the spa carefully (surfaces may be slippery!)</p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-coral/20 text-coral rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div className="text-mountain">
              <p><span className="font-semibold text-navy">Replace the cover</span> — This is important to:</p>
              <ul className="mt-2 ml-4 space-y-1 text-sm">
                <li>• Keep the water warm</li>
                <li>• Keep debris out</li>
                <li>• Save energy</li>
              </ul>
            </div>
          </li>
        </ol>
      </div>

      {/* Troubleshooting */}
      <div className="bg-white rounded-xl border border-sand p-6 md:p-8">
        <h3 className="text-xl font-bold text-navy mb-4">Troubleshooting</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-sand">
                <th className="pb-3 pr-4 font-semibold text-navy">Problem</th>
                <th className="pb-3 font-semibold text-navy">Solution</th>
              </tr>
            </thead>
            <tbody className="text-mountain">
              <tr className="border-b border-sand/50">
                <td className="py-3 pr-4 font-medium text-navy">Jets won&apos;t turn on</td>
                <td className="py-3">Press the Jets button; make sure cover is fully removed</td>
              </tr>
              <tr className="border-b border-sand/50">
                <td className="py-3 pr-4 font-medium text-navy">Water feels cold</td>
                <td className="py-3">Check display temperature; press Warm ▲ to increase; wait 1-2 hours</td>
              </tr>
              <tr className="border-b border-sand/50">
                <td className="py-3 pr-4 font-medium text-navy">Display shows error code</td>
                <td className="py-3">Note the code and contact us</td>
              </tr>
              <tr className="border-b border-sand/50">
                <td className="py-3 pr-4 font-medium text-navy">Water looks cloudy</td>
                <td className="py-3">Please contact us — do not use until resolved</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-navy">Cover is difficult to remove</td>
                <td className="py-3">Lift from the right side, fold over to the left, then slide the whole cover to rest in the gap between the hot tub and the wall on the left</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-coral/10 rounded-xl border border-coral/20 p-6 md:p-8 text-center">
        <h3 className="text-xl font-bold text-navy mb-2">Questions or Problems?</h3>
        <p className="text-mountain mb-4">Please don&apos;t hesitate to reach out if anything isn&apos;t working properly!</p>
        <a
          href="mailto:gracethisplacellc@gmail.com"
          className="inline-block bg-coral hover:bg-sunrise text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
