

function RatingForm({rater, rated, handleRating}) {

  function handleClick(evt) {
    let isLiked = Boolean(evt.target.dataset.isliked);
    handleRating(rater, rated, isLiked);
  }

  return (
    <div className="RatingForm">
      <button data-isliked="true" onClick={handleClick}>Like</button>
      <button data-isliked="false" onClick={handleClick}>Dislike</button>
    </div>
  );
}


export default RatingForm;