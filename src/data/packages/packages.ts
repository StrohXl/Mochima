export interface Package {
  icons: string[]
  title: string
  price: number
  description: string
  services: string[]
  urlImageVertical: string
  urlImageHorizontal: string
  popularity: boolean
}

export const packages: Package[] = [
  {
    icons: ['io-boat-sharp', 'gi-hot-meal', 'md-emojipeople-twotone', 'gi-water-bottle'],
    title: 'Paquete Estandar',
    services: ['Traslado', 'Comida', 'Recreacion', 'Hidratacion'],
    price: 60,
    description:
      '¡Escápate a Mochima con nuestro Paquete Estándar! Disfruta de un día de relax con traslado incluido, una deliciosa comida playera, hidratación constante y actividades de recreación para toda la familia. Todo listo para que solo te preocupes por disfrutar del sol.',
    urlImageVertical: '/packages/20271.jpg',
    urlImageHorizontal: '/packages/6468.jpg',
    popularity: false,
  },
  {
    icons: [
      'io-boat-sharp',
      'gi-hot-meal',
      'md-emojipeople-twotone',
      'gi-water-bottle',
      'io-people-circle',
      'gi-bathtub',
    ],
    title: 'Paquete Especial',
    services: [
      'Traslado',
      'Comida',
      'Recreacion',
      'Hidratacion',
      'Guia Turistico',
      'Baños y Duchas',
    ],
    price: 80,
    description:
      'Vive la experiencia Mochima Premium con nuestro paquete especial. Disfruta de traslado exclusivo, comida típica, hidratación y recreación, todo acompañado por un guía turístico experto. Además, garantizamos tu comodidad con acceso privado a baños y duchas durante toda la jornada.',
    urlImageVertical: '/packages/20271.jpg',
    urlImageHorizontal: '/packages/especial-horizontal.jpg',
    popularity: true,
  },
  {
    icons: [
      'io-boat-sharp',
      'gi-hot-meal',
      'md-emojipeople-twotone',
      'gi-water-bottle',
      'io-people-circle',
      'gi-bathtub',
      'gi-wood-cabin',
      'gi-photo-camera',
      'md-airplaneticket-outlined',
    ],
    title: 'Paquete Completo',
    services: [
      'Traslado',
      'Comida',
      'Recreacion',
      'Hidratacion',
      'Guia Turistico',
      'Baños y Duchas',
      'Alojamiento por dos dias',
      'Fotos dentro y fuera del agua',
      'Seguro de viajes',
    ],
    price: 120,
    description:
      'Vive la Experiencia Total Mochima con nuestro paquete de dos días. Incluye traslado, alojamiento, todas las comidas, hidratación y acceso a baños y duchas. Disfruta de recreación y recorridos con guía turístico, mientras capturamos tus mejores momentos con fotos. Todo respaldado por un seguro de viaje para tu total tranquilidad.',
    urlImageVertical: '/packages/20271.jpg',
    urlImageHorizontal: '/packages/completo-horizontal.jpg',
    popularity: false,
  },
]
