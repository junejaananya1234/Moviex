import "./style.scss"
const HeroBanner = ()=>{
    return(
        <div className="heroBanner">
         <div className="Wrapper">
            <div className="heroBannerContent">
                <span className="title">Welcome,</span>
                <span className="subTitle">Millions of movies, TV shows and people to discover. Explore now.</span>
                <div className="searchInput">
                   <input 
                   type="text"
                   placeholder="Search for a TV OR Movie...."></input>
                   <button>Search</button>
                </div>
            </div>
         </div>
        </div>
    )
}
export default HeroBanner;