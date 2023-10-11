import { Link } from "react-router-dom";

const News = ({ singleNews }) => {
     const { title, image_url, details, _id } = singleNews;
     return (
          <div>
               <div className="card bg-base-100 shadow-xl mb-6">
                    <img src={image_url} alt="Shoes" />

                    <div className="card-body">
                         <h2 className="card-title">{title}</h2>
                         <div>
                              {details.length > 200 ? (
                                   <p>
                                        {details.slice(0, 200)}...
                                        <Link
                                             to={`news/${_id}`}
                                             className="text-[#FF8C47] hover:underline font-bold"
                                        >
                                             Read more
                                        </Link>
                                   </p>
                              ) : (
                                   <p>{details}</p>
                              )}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default News;
