import useFetch from "../useFetch";

const BookByTitle = ({title}) => {

    const { data, loading, error } = useFetch(`https://be-4-assignment1-sandy.vercel.app/books/${title}`);

    console.log(data);

    //2. Display the details of the book titled - Shoe Dog.
    const book = data?.data?.[0];

    if(loading) {
        return <p>Loading...</p>
    }
    if(error) {
        return <p>Error: {error}</p>
    }
    if(!book) {
        return <p>Book Not Found.</p>
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p><strong>Author: </strong>{book.author}</p>
            <p><strong>Release Year: </strong>{book.publishedYear}</p>
            <p><strong>Genre: </strong>{book.genre}</p>
            <br />
        </div>
    )
};

export default BookByTitle;