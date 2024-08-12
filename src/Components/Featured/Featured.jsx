import SectionTitle from "../SectionTitle/SectionTitle";
import './Featured.css'
import featuredImg from '../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white my-5">
            <SectionTitle heading={'Featured Item'} subHeading={'Check it out'} />
            <div className="md:flex justify-center items-center py-16 px-32">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 space-y-2">
                    <p>{new Date().toDateString()}</p>
                    <p className="uppercase">Where i can get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo fugiat fuga nostrum labore corrupti quia similique illum, minima nihil aspernatur voluptatum velit distinctio temporibus ea perspiciatis facilis quidem ut.</p>
                    <button className="btn btn-outline border-0 border-b-2 font-bold text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;