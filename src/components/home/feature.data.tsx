import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Asesor Legal',
    description:
      'Proporcionar soluciones legales a empresas y autónomos, garantizando el cumplimiento de la normativa vigente y previniendo posibles conflictos legales.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Auditorría Externa',
    description:
      'Permite conseguir una visión del entorno asegurador de cada empresa analizando las pólizas de seguro existentes y su correspondencia e idoneidad frente a los riesgos a los que pudiera estar sujeta la empresa. Es el punto de partida del tratamiento de riesgos.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Especialista en Seguros',
    description:
      'Prestar servicio a compañías aseguradoras y de reaseguros, cubriendo todas las necesidades de clientes nacionales e internacionales en este sector.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Capacitaciones',
    description:
      'programas de formación y capacitación de especialización profesional, atendiendo las necesidades formativas de la sociedad, tanto presentes como futuras, con el objetivo de estar un paso adelante en la lucha contra la delicuencia organizada.',
    icon: <ContactSupportIcon />,
  },
]
