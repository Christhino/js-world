import { tw } from 'twind';
import Check from '@/app/image/check.svg';

const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    
      category: { title: 'Innovation', href: '#' },
    
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      
        category: { title: 'Sécuriser', href: '#' },
       
      },
      {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      
        category: { title: 'Assistance', href: '#' },
      
      },
      {
        id: 4,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
       
        category: { title: 'Flexibilité et stabilité', href: '#' },
       
      },
      {
        id: 5,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        
        category: { title: 'Une expertise métier', href: '#' },
       
      },
      {
        id: 6,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
     
        category: { title: 'Accessibilité', href: '#' },
       
      },
    // More posts...
]
  
export default function Why() {
    return (
      <section className="bg-white pb-6">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="container mx-auto px-6 p-6 bg-white">
                <div className="mb-16 text-center">
                  <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase" >Pourquoi nous choisir? </h4>
                  <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
                    Pourquoi choisir la plateforme BESC  JLS  WORLD
                  </p>
                </div>
                <div className="flex flex-wrap my-12">
                    <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                      <div className="flex items-center mb-6">
                        {/* <Check width={20} height={20} fill="currentColor" className="h-6 w-6 text-indigo-500" /> */}
                        <div className="ml-4 text-xl">Innovation</div>
                      </div>
                      <p className="leading-loose text-gray-500">
                        Consectetur pariatur irure exercitation sit amet id consectetur consecteturmagna et Lorem labore qui
                        velit.
                      </p>
                    </div>
                    <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
            <div className="flex items-center mb-6">
              {/* <Check width={20} height={20} fill="currentColor" className="h-6 w-6 text-indigo-500" /> */}
              <div className="ml-4 text-xl">Assistance</div>
            </div>
            <p className="leading-loose text-gray-500 ">
              Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
            <div className="flex items-center mb-6">
              {/* <Check width={20} height={20} fill="currentColor" className="h-6 w-6 text-indigo-500" /> */}
              <div className="ml-4 text-xl">Une expertise métier</div>
            </div>
            <p className="leading-loose text-gray-500">
              Elit deserunt nisi esse duis cupidatat proident sit minim mollit officia pariatur incididunt in tempor.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
            <div className="flex items-center mb-6">
              {/* <Check width={20} height={20} fill="currentColor" className="h-6 w-6 text-indigo-500" /> */}
              <div className="ml-4 text-xl">Sécuriser</div>
            </div>
            <p className="leading-loose text-gray-500">
              Velit sit tempor pariatur quis pariatur incididunt culpa dolor voluptate officia incididunt velit dolore.
            </p>
          </div>
          <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
            <div className="flex items-center mb-6">
              {/* <Check width={20} height={20} fill="currentColor" className="h-6 w-6 text-indigo-500" /> */}
              <div className="ml-4 text-xl">Flexibilité et stabilité</div>
            </div>
            <p className="leading-loose text-gray-500">
              Laboris elit consectetur sint nisi eu mollit proident sit magna velit adipisicing consequat amet
              reprehenderit.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-8">
             <div className="flex items-center mb-6">
              {/* <Check width={20} height={20} fill="currentColor" className="h-6 w-6 text-indigo-500" /> */}
              <div className="ml-4 text-xl">Accessibilité</div>
            </div>
            <p className="leading-loose text-gray-500">
              Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia
              consectetur.
            </p>
          </div> 
                </div>
            </div>
        </div>
      </section>
    )
  }
  