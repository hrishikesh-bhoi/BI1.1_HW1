import useFetch from "../useFetch";

const Books = () => {

    const { data, loading, error } = useFetch("https://be-4-assignment1-sandy.vercel.app/books");

    console.log(data);
    // 1. Display all the book titles present in your database.
    
    return (
        <div>
            <ul>
                <h2>All Books</h2>
                {
                    data?.data?.map((book) => (<>
                        
                        <li key={book._id}>{book.title}</li>
                        </>
                    ))
                }
            </ul>
        </div>
    )

}

export default Books;