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

export const deletePost = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`,
    success
  });
};
