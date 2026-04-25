export interface ServiceItem {
  id: number
  icon: string
  title: string
  description: string
}

export const services: ServiceItem[] = [
  {
    id: 1,
    icon: 'io-boat-sharp',
    title: 'Renta de botes',
    description:
      'Botes reservados para viajar a cualquier playa que desees, con la comodidad y seguridad que ofrecemos para que disfrutes al máximo tu experiencia en Mochima.',
  },
  {
    id: 2,
    icon: 'gi-wood-cabin',
    title: 'Alojamiento',
    description:
      'Hospedese en la posada isla piscina mochima, ubicada en la isla piscina, una de las playas más hermosas del parque nacional mochima, con una vista espectacular y un ambiente tranquilo para disfrutar de tu estadía.',
  },
  {
    id: 3,
    icon: 'gi-hot-meal',
    title: 'Alimentos',
    description: 'Pruebe el gran legado multi-cultural sucrense.',
  },
  {
    id: 4,
    icon: 'io-people-circle-outline',
    title: 'Guia Turistico',
    description:
      'Nuestros guías turísticos expertos te acompañarán durante tu aventura en Mochima, brindándote información fascinante sobre la flora, fauna y cultura local, asegurando que tu experiencia sea inolvidable y enriquecedora.',
  },
  {
    id: 5,
    icon: '',
    title: 'Planificación de Bodas',
    description:
      'Planifica tu boda en el paraíso de Mochima, con servicios completos para hacer realidad tu sueño de una boda inolvidable.',
  },
  {
    id: 6,
    icon: 'gi-canoe',
    title: 'Recreacion',
    description:
      'Disfruta de actividades recreativas emocionantes en Mochima, desde deportes acuáticos hasta excursiones por la naturaleza, para una experiencia llena de diversión y aventura.',
  },
]
