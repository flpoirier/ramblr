export const fetchPosts = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/posts',
    success
  });
};

// note -- when I eventually want to filter this by only followed users
// I'm going to have to add filters (like data: filters)

export const createPost = (formData, success) => {
	$.ajax({
    url: '/api/posts',
		method: 'POST',
    dataType: "json",
    contentType: false,
    processData: false,
		data: formData,
		success
	});
};

export const updatePost = (post, success) => {
  let id = post.id;
  $.ajax({
    url: `/api/posts/${id}`,
		method: 'PATCH',
    dataType: "json",
    contentType: false,
    processData: false,
		data: formData,
		success
	});
};

export const deletePost = (post, success) => {
  let id = post.id;
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`,
    success
  });
};
