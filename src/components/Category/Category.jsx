import React from 'react'
import './Category.css';
import fashion from '../../img/fashion.png';
import catfood from '../../img/catfood.jpeg';
import culture from '../../img/culture.jpeg';
import style from '../../img/style.jpeg';

const Category = () => {
    return (
        <section className="mt-4 mb-4 category">
            <div className="heading">
                <h5 className="cat-head-title">Category</h5>
            </div>
            <div data-aos="fade-up" className="row ">
                <div className="col-md-3 cat">
                    <div className="clm-container">
                        <img src={fashion} alt="" className="cat-img" />
                        <div className="cat-title">
                            <span>Fashion</span>
                        </div>
                    </div>
                </div>
                {/* cul-2 */}
                <div className="col-md-3 cat">
                    <div className="clm-container">
                        <img src={catfood} alt="" className="cat-img" />
                        <div className="cat-title">
                            <span>Food</span>
                        </div>
                    </div>
                </div>
                {/* cul-2 */}
                <div className="col-md-3 cat">
                    <div className="clm-container">
                        <img src={culture} alt="" className="cat-img" />
                        <div className="cat-title">
                            <span>Culture</span>
                        </div>
                    </div>
                </div>
                {/* cul-2 */}
                <div className="col-md-3 cat">
                    <div className="clm-container">
                        <img src={style} alt="" className="cat-img" />
                        <div className="cat-title">
                            <span>Style</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category