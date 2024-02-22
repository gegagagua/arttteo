import { memo } from 'react'
import { Routes, Route } from 'react-router-dom'

import Homepage from '../pages/Home'

const Router= () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Homepage />} />
        <Route path="*" element={<Homepage />} />
      </Route>
    </Routes>
  )
}

export default memo(Router)
