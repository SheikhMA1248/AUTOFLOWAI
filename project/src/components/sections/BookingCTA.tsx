import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const BookingCTA: React.FC = () => {
  return (
    <section id="book-meeting" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white opacity-5 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white opacity-5 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl">
              Schedule a no-obligation consultation with our team. We'll discuss your business challenges and explore how our AI solutions can help you achieve your goals.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                What to expect in your consultation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-400 flex items-center justify-center text-blue-900 font-bold text-sm mr-3 mt-0.5">1</div>
                  <p>A discussion of your business challenges and objectives</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-400 flex items-center justify-center text-blue-900 font-bold text-sm mr-3 mt-0.5">2</div>
                  <p>An overview of our AI capabilities and approach</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-400 flex items-center justify-center text-blue-900 font-bold text-sm mr-3 mt-0.5">3</div>
                  <p>Initial recommendations tailored to your needs</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-400 flex items-center justify-center text-blue-900 font-bold text-sm mr-3 mt-0.5">4</div>
                  <p>Next steps and implementation timeline</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-center">Book Your Meeting</h3>
            <div className="bg-white rounded-lg overflow-hidden">
              <div style={{width:'100%',height:'600px',overflow:'scroll'}} id="my-cal-inline"></div>
              <script type="text/javascript">
                {`
                  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
                  Cal("init", "30min", {origin:"https://cal.com"});

                  Cal.ns["30min"]("inline", {
                    elementOrSelector:"#my-cal-inline",
                    config: {"layout":"month_view"},
                    calLink: "sheikh-ahmad-b9aecf/30min",
                  });

                  Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
                `}
              </script>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;