interface GalleryImageProps {
  path: string
  title: string
  description: string
  isPortrait: boolean
  position: 'center' | 'right' | 'left'
}

const GalleryImages: GalleryImageProps[] = [
  {
    path: 'https://cdna.artstation.com/p/assets/images/images/063/908/440/large/astrov-fina3.jpg?1693673660',
    title: 'Spuk Nocturne',
    description:
      'Fan-art of Nocturn, a character from the game League of Legends, made for personal study.',
    isPortrait: false,
    position: 'center',
  },
  {
    path: 'https://cdnb.artstation.com/p/assets/images/images/065/030/831/large/astrov-ahi.jpg?1689330223',
    title: 'Ahri',
    description:
      'Fan-art of ahri, a character from the game League of Legends, made for personal study.',
    isPortrait: false,
    position: 'right',
  },
  {
    path: 'https://cdnb.artstation.com/p/assets/images/images/066/782/255/large/astrov-final-render4.jpg?1693771956',
    title: 'Cowboy hero ',
    description:
      'A gunslinging cowboy hero fighting a giant monster. (commission done)',
    isPortrait: false,
    position: 'center',
  },
  {
    path: 'https://cdna.artstation.com/p/assets/images/images/061/692/400/large/astrov-fullrender.jpg?1681405858',
    title: 'Desert Elf Witch ',
    description:
      'A desert elf witch with her little flying pet. (commission done)',
    isPortrait: false,
    position: 'center',
  },
  {
    path: 'https://cdnb.artstation.com/p/assets/images/images/066/138/449/large/astrov-treining2.jpg?1692135922',
    title: 'Midnight rogue',
    description: 'A man in a hood with a bag of coins in his hand, fanart of Dungeons and Dragons rogue character.',
    isPortrait: true,
    position: 'center',
  },
  {
    path: 'https://cdna.artstation.com/p/assets/images/images/055/860/748/large/astrov-estudo-outro.jpg?1667919037',
    title: 'Runner',
    description: 'A very fast runner, made for personal study.',
    isPortrait: false,
    position: 'right',
  },
  {
    path: 'https://instagram.fsdu2-2.fna.fbcdn.net/v/t51.2885-15/362652916_673029517518552_9077798556053289850_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fsdu2-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=8Kvo57Isji8AX_DtrTb&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE1MzU1NDA4OTg0NDg4NDQ4Mg%3D%3D.2-ccb7-5&oh=00_AfAJb9d74yjlocpS9Zniw5AuQv4KRt5cvc3zMoB7GXl5pw&oe=65175BCB&_nc_sid=ee9879',
    title: 'Toxonic',
    description:
      'Toxonic is a fast and agile hedgehog who possesses the unique ability to control toxins and toxic substances.',
    isPortrait: true,
    position: 'center',
  },
  {
    path: 'https://cdnb.artstation.com/p/assets/images/images/051/830/163/large/astrov-final-scene.jpg?1658272245',
    title: 'Viking',
    description:
      'A Viking woman with an axe sailing along with her warriors in their boat, made for the Panorama School Digital Painting course.',
    isPortrait: false,
    position: 'left',
  },
  {
    path: 'https://cdna.artstation.com/p/assets/images/images/058/272/124/large/astrov-sl3.jpg?1673796619',
    title: 'A street fighter',
    description:
      'A street fighter throwing a punch towards the camera, fan-art from the game Street Fighter, made for personal study.',
    isPortrait: false,
    position: 'left',
  },
  {
    path: 'https://cdna.artstation.com/p/assets/images/images/056/419/458/large/astrov-tang-xuan-v4.jpg?1669199276',
    title: 'Dislyte',
    description:
      "Project made for deviantart's contest about the new game Dislyte, I didn't win any of the positions but it was a great training for my development",
    isPortrait: false,
    position: 'left',
  },
  {
    path: 'https://cdnb.artstation.com/p/assets/images/images/053/967/677/large/astrov-for-artstation.jpg?1663451863',
    title: 'Forest Elf',
    description: 'A forest elf with his little dragon. (Commission done)',
    isPortrait: false,
    position: 'center',
  },
  {
    path: 'https://cdnb.artstation.com/p/assets/images/images/050/959/373/large/astrov-cacador-v2.jpg?1656093960',
    title: 'Spice Hunter',
    description:
      'A spice hunter sitting on a throne holding his weapon in his right hand and a precious stone in his left. (Commission done)',
    isPortrait: true,
    position: 'center',
  },
  {
    path: 'https://cdna.artstation.com/p/assets/images/images/058/574/208/large/astrov-tracy-final2.jpg?1674492924',
    title: 'Gnome Witch',
    description:
      'Finished illustration commission gave an umbral gnome witch character named Kye with a spider familiar.',
    isPortrait: false,
    position: 'center',
  },
  {
    path: 'https://cdnb.artstation.com/p/assets/images/images/048/308/151/large/astrov-finav2l22.jpg?1649722406',
    title: 'Scrapyard Goblin',
    description:
      'A goblin scientist on top of his giant robot, fanart I made for wizard of the coast MTG',
    isPortrait: true,
    position: 'center',
  },
  {
    path: 'https://cdnb.artstation.com/p/assets/images/images/056/406/969/large/astrov-concurso-unhide-woman-v3.jpg?1669164529',
    title: 'Afrofuturism',
    description:
      'An Afro warrior with her axe, a personal project based on the aesthetics of Afrofuturism.',
    isPortrait: false,
    position: 'center',
  },
  {
    path: 'https://cdna.artstation.com/p/assets/images/images/057/705/746/large/astrov-woman-muay.jpg?1672416375',
    title: 'High Tech Low Life ',
    description:
      'A woman fighter ready to kick, Character art studie based on artist Will Murai.',
    isPortrait: true,
    position: 'center',
  },
  {
    path: 'https://cdna.artstation.com/p/assets/images/images/049/586/106/large/astrov-study-3.jpg?1652830051',
    title: 'Oyabun',
    description:
      'An Asian woman seated holding her sword, study of art in production with the yakuza theme.',
    isPortrait: true,
    position: 'center',
  },
]

export { GalleryImages, type GalleryImageProps }
