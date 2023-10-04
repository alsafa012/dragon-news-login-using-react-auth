import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
     return (
          <div className="p-3 rounded-md bg-[#F3F3F3]">
               <div className="flex">
               <button className="btn btn-secondary">Latest</button>
               <Marquee pauseOnHover={true} speed={100}>
                    <Link className="ml-8" to="/">
                         I can be a React component, multiple React
                         components....
                    </Link>
                    <Link className="ml-8" to="/">
                         I can be a React component, multiple React
                         components....
                    </Link>
                    <Link className="ml-8" to="/">
                         I can be a React component, multiple React
                         components....
                    </Link>
               </Marquee>
               </div>
          </div>
     );
};

export default BrakingNews;
