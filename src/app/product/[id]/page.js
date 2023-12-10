
const dynamicPage = ({params}) => {
    console.log(params);
    return (
        <div>
          <h1>this is dynamic page:{params.id} </h1>
        </div>
    );
};

export default dynamicPage;