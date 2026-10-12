import useFetch from "../useFetch"

const BooksByAuthor = ({author}) => {

    const { data, loading, error } = useFetch(`https://be-4-assignment1-sandy.vercel.app/books/author/${encodeURIComponent(author)}`)

    console.log(data);

    //3. Display all the books written by Harper Lee.

    const books = data?.data;

    if(loading) {
        return <p>Loading...</p>
    }
    if(error) {
        return <p>Error: {error} </p>
    }
    if(!books || books.length === 0) {
        return <p>No Books found.</p>        
    }

    return (
        <div>
            <h2>Book by {author}</h2>
            <ul>
                {
                    books.map((book) => (
                        <li key={book._id} >{book.title}</li>
                    ))
                }
            </ul>
        </div>
    )

}
export default BooksByAuthor