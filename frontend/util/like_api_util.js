export const like = (like, success) => {
	$.ajax({
		method: 'POST',
		url: '/api/likes',
		data: like,
		success
	});
};

export const dislike = (success) => {
  const id = like.id;
	$.ajax({
		method: 'DELETE',
		url: `/api/likes/${id}`,
		success
	});
};
