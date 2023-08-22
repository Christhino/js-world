import React, { ReactNode } from 'react'
import LooksOneIcon from '@mui/icons-material/LooksOne';
import Looks3Icon from '@mui/icons-material/Looks3';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks4Icon from '@mui/icons-material/Looks4';

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Créer un compte',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <LooksOneIcon />,
  },
  {
    title: 'Compléter les informations de l’entreprise',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <LooksTwoIcon />,
  },
  {
    title: 'Procéder à la demande de BESC',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <Looks3Icon />,
  },
  {
    title: 'Imprimer votre BESC signé et certifié',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <Looks4Icon />,
  },
]
