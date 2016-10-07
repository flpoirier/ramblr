export const fetchPosts = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/posts',
    success
  });
};

// note -- when I eventually want to filter this by only followed users
// I'm going to have to add filters (like data: filters)

export const createPost = (post, success) => {
	$.ajax({
		method: 'POST',
		url: 'api/posts',
		data: post,
		success
	});
};
