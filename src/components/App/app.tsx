import { LifeTime } from '@pages/lifetime'
import { Progress } from '@pages/progress'
import { Routes, Route, Navigate } from 'react-router-dom'

const App = () => {
    return (
        <Routes>
            <Route path="/lifetime" element={<LifeTime />} />
            <Route path="/great" element={<><div>Great day, man</div> <Progress /></>} />
            <Route path="*" element={<Navigate to="/lifetime" />} />
        </Routes>
    )
}

export default App
