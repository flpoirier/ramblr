export const like = (like, success) => {
	$.ajax({
		method: 'POST',
		url: `/api/posts/${like.post_id}/like`,
		success
	});
};

export const dislike = (like, success) => {
	$.ajax({
		method: 'DELETE',
		url: `/api/posts/${like.post_id}/like`,
		success
	});
};
