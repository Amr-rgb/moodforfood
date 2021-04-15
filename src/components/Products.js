import useFetch from "./useFetch"

const Products = (title) => {
    let url

    if(title) {
        url = `https://foodish-api.herokuapp.com/api/images/${title}`
    } else {
        url = 'https://foodish-api.herokuapp.com/api/'
    }

    const food = useFetch(url)

    return (
        <div className="products">
            {food && <div></div>}
        </div>
    )
}

export default Products