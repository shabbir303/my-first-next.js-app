
const dynamicPage = ({params, searchParams}) => {
    console.log(params,searchParams);
    return (
        <div className="m-[50px] text-[30px] font-extrabold">
          <h1 >this is dynamic page: {params.id} </h1>
          {/* in the browser you will type next the params url/category=Laptop&price=100 */}
           <h2>searched by: {searchParams.category} & {searchParams.price} </h2>
           
        </div>
    );
};

export default dynamicPage;