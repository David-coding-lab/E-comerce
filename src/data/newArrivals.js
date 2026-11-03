import ps5 from '../assets/ps5.png'
import speakers from '../assets/jblSpeakers.png'
import gucciPerfumes from '../assets/GucciPerfuems.png'
import womenHair from '../assets/attractive-woman-wearing-hat-posing.png'

export const newArrivals = [
  {
    id: 'playstation-5',
    variant: 'large',
    title: 'PlayStation 5',
    description:
      'Black and White version of the PS5 coming out on sale.',
    image: ps5,
    imageAlt: 'PlayStation 5',
    link: '/category/gaming',
  },
  {
    id: 'womens-collections',
    variant: 'wide',
    title: 'Women’s Collections',
    description:
      'Featured woman collections that give you another vibe.',
    image: womenHair,
    imageAlt: 'Women’s Collections',
    link: '/category/womans-fashion',
  },
  {
    id: 'speakers',
    variant: 'small',
    title: 'Speakers',
    description: 'Amazon wireless speakers',
    image: speakers,
    imageAlt: 'Speakers',
    link: '/category/electronics',
  },
  {
    id: 'perfume',
    variant: 'small',
    title: 'Perfume',
    description: 'GUCCI INTENSE OUD EDP',
    image: gucciPerfumes,
    imageAlt: 'Perfume',
    link: '/category/health-beauty',
  },
]

export default newArrivals
