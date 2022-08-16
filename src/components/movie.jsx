import React from "react";
import Stars from "./stars";
import Review from "./review";
import ReviewForm from "./ReviewForm";
import ap from '../images/ap.png'
import incept from '../images/incept.png'
import mip from '../images/mip.png'

const images = {
    ap: ap,
    incept: incept,
    mip: mip
}


export default class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        // console.log(this.props.image)
        this.state = {
            userReviews: []
        }

    }

    render() {

        return (
            <div className="movie-carousel container">
                <div className="card">

                    <div className="card-body">
                        <img
                            src={images[this.props.image]}
                            alt={' '}
                            width={200}
                            height={300}>
                            
                        </img>
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.director}</h2>
                        <p>{this.props.year}</p>
                        <p>{this.props.reviews}</p>
                        {this.state.userReviews.map(review => { return <div>{review}</div> })}
                        <Stars />
                        <Review />
                        <ReviewForm reviews={this.props.reviews} 
                            onSubmit={newReview => 
                            { 
                                console.log('on submit called')
                                this.setState({userReviews: this.state.userReviews.concat([newReview])}) 
                            }
                            } />
                    </div>
                </div>
            </div>


        )
    }

}




