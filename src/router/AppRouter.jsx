import { Route, Routes } from "react-router-dom"
import { PokemonHomePage } from "../pokemon/pages/PokemonHomePage"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<PokemonHomePage />} />
        </Routes>
    </>
  )
}
