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
    title: 'Spuk Nocturn',
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
    description:
      'A man in a hood with a bag of coins in his hand, fanart of Dungeons and Dragons rogue character.',
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
  {
    path: 'https://cdna.artstation.com/p/assets/images/images/055/450/118/large/astrov-versao-minhav5.jpg?1666969249',
    title: 'Sol de Atlantida',
    description:
      'Illustration developed for the paranormal experience - thank you very much for this opportunity.',
    isPortrait: true,
    position: 'center',
  },
  {
    path: 'https://cdnb.artstation.com/p/assets/images/images/067/795/183/large/astrov-final-artv2.jpg?1696261536',
    title: 'The Heist',
    description:
      "The magic of cards and the precision of firearms meet in this fanart of Twisted Fate and Graves from League of Legends. In this thrilling scene at the bank's entrance, these two iconic characters prepare for a heist that will leave you speechless. I hope this illustration brings a touch of adventure to your day!",
    isPortrait: false,
    position: 'center',
  },
  {
    path: 'https://cdna.artstation.com/p/assets/images/images/050/488/276/large/astrov-phx-13-087-cleave-final02.jpg?1654968684',
    title: 'Cleave - Eternal Card Game',
    description:
      'I am grateful to Dire Wolf and Art Director Derek Herring for the opportunity to be able to produce this card. ',
    isPortrait: true,
    position: 'center',
  },
]

export { GalleryImages, type GalleryImageProps }
