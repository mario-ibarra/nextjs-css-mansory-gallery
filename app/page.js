'use client'

import { useState } from 'react'
import List from './components/List'
import Modal from './components/Modal'

export default function Home() {
 const [selected, setSelected] = useState(null)

  return (
    <main>
      <List setSelected={setSelected} />
      <Modal selected={selected} setSelected={setSelected} />
    </main>
  )
}
