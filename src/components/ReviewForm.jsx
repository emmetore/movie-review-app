import React from "react";

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props)

    this.props = props;
    
    // console.log(this.props)

    this.state={
      review: ''
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked Submit');
    const newReview = e.target[0].value
    console.log(this)
    // this.props.onSubmit(newReview)

    // return(<p>{this.props.reviews}</p>)
    

  }

  render() {
    return (
      <div>
      <form onSubmit={
        e=>{e.preventDefault()
          this.props.onSubmit(e.target[0].value)}
      }>
        <h4>Leave a Review</h4>
        <textarea value={this.state.review} 
        onChange={e=>this.setState({review:e.target.value})}/>
        <div>
          <button type='submit'>Submit Review</button>
        </div>
      </form>
      </div>
    
  )
}

}






// function ReviewForm() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log('You clicked Submit');

//   }
//   return (
//     <div className='review-form'>
//       <form onSubmit={handleSubmit}>
//         <h4>Leave a Review</h4>
//         <textarea />
//         <div>
//           <button type='submit'>Submit Review</button>
//         </div>
//       </form>

//     </div>
//   )
// }

// export default ReviewForm;