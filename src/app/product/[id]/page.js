
const dynamicPage = ({params, searchParams}) => {
    console.log(searchParams);
    return (
        <div>
          <h1>this is dynamic page: {params.id} </h1>
           <h2>searched by: {searchParams.category} & {searchParams.price} </h2>
        </div>
    );
};

export default dynamicPage;