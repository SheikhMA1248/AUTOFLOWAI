import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';

interface CalApi {
  (...args: any[]): void;
  q: any[];
  ns: Record<string, any>;
  loaded?: boolean;
}

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

const BookingCTA: React.FC = () => {
  useEffect(() => {
    // Cal.com initialization script
    (function (C: typeof window, A: string, L: string) {
      const p = function (a: { q: any[] }, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        (function (this: any, ...args: any[]) {
          const cal = C.Cal;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (args[0] === L) {
            const api = function (...apiArgs: any[]) {
              p(api, apiArgs);
            };
            const namespace = args[1] as string;
            api.q = [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], args);
              p(cal, ['initNamespace', namespace]);
            } else p(cal, args);
            return;
          }
          p(cal, args);
        } as CalApi);
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    // Initialize Cal
    window.Cal?.('init', '30min', { origin: 'https://cal.com' });

    // Configure inline embedding
    window.Cal?.ns['30min']('inline', {
      elementOrSelector: '#my-cal-inline',
      config: { layout: 'month_view' },
      calLink: 'autoflow-ai-b9aecf/30min',
    });

    // Configure UI theme
    window.Cal?.ns['30min']('ui', {
      cssVarsPerTheme: {
        light: { 'cal-brand': '#373737' },
        dark: { 'cal-brand': '#482ad8' },
      },
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  }, []);

  return (
    <section
      id='book-meeting'
      className='py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden'
    >
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute top-10 left-10 w-40 h-40 rounded-full bg-white opacity-5 animate-blob'></div>
        <div className='absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white opacity-5 animate-blob animation-delay-2000'></div>
        <div className='absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white opacity-5 animate-blob animation-delay-4000'></div>
      </div>

      <div className='container mx-auto px-4 md:px-8 relative z-10'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Ready to Transform Your Business with AI?
          </h2>
          <p className='text-white/90 text-lg mb-8 max-w-2xl mx-auto'>
            Schedule a no-obligation consultation with our team. We'll discuss
            your business challenges and explore how our AI solutions can help
            you achieve your goals.
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 mb-8'>
            <h3 className='text-xl font-semibold mb-6 flex items-center justify-center'>
              <Calendar className='mr-2 h-5 w-5' />
              What to expect in your consultation
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
              <div className='flex items-start'>
                <div className='flex-shrink-0 h-8 w-8 rounded-full bg-green-400 flex items-center justify-center text-blue-900 font-bold text-lg mr-4 mt-0.5'>
                  1
                </div>
                <p className='text-base md:text-lg'>
                  A discussion of your business challenges and objectives
                </p>
              </div>
              <div className='flex items-start'>
                <div className='flex-shrink-0 h-8 w-8 rounded-full bg-green-400 flex items-center justify-center text-blue-900 font-bold text-lg mr-4 mt-0.5'>
                  2
                </div>
                <p className='text-base md:text-lg'>
                  An overview of our AI capabilities and approach
                </p>
              </div>
              <div className='flex items-start'>
                <div className='flex-shrink-0 h-8 w-8 rounded-full bg-green-400 flex items-center justify-center text-blue-900 font-bold text-lg mr-4 mt-0.5'>
                  3
                </div>
                <p className='text-base md:text-lg'>
                  Initial recommendations tailored to your needs
                </p>
              </div>
              <div className='flex items-start'>
                <div className='flex-shrink-0 h-8 w-8 rounded-full bg-green-400 flex items-center justify-center text-blue-900 font-bold text-lg mr-4 mt-0.5'>
                  4
                </div>
                <p className='text-base md:text-lg'>
                  Next steps and implementation timeline
                </p>
              </div>
            </div>
          </div>

          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-xl'>
            <h3 className='text-2xl font-semibold mb-6 text-center'>
              Book Your Meeting
            </h3>
            <div
              style={{ width: '100%', height: '100%', overflow: 'scroll' }}
              id='my-cal-inline'
              className='w-full min-h-[600px] md:h-[600px] rounded-xl overflow-hidden touch-manipulation'
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
