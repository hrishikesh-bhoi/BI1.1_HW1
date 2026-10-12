import './App.css'
import Books from './components/Books'
import BookByTitle from './components/BookByTitle'
import BooksByAuthor from './components/BooksByAuthor'

function App() {
  return <main>
    <Books />
    <BookByTitle title="Shoe Dog" />
    <BooksByAuthor author = "Harper Lee" />
  </main>
}

export default App
