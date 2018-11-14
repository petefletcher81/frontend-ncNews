import axios from 'axios';

const BASE_URL = "https://ncnew-pete.herokuapp.com/api";

export const getArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles`);
  return data.newArticles;
}

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
}

export const getArticle = async (article_id) => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`)
  return data.searchedArticle;
}

export const getTopic = async (topic_slug) => {
  console.log(topic_slug)
  const { data } = await axios.get(`${BASE_URL}/topics/${topic_slug}/articles`)
  console.log(data, 'this is data')
  return data.newArticle;
}

export const getComments = async (article_id) => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}/comments`)
  return data.comments;
}

export const userLogin = async (username) => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`)
  //console.log(data.username, 'this is data')
  return data.username;
}

export const postComment = async (commentToAdd, article_id) => {
  const { newComment, created_by } = commentToAdd
  //console.log(newComment, article_id, created_by)
  const { data } = await axios.post(`${BASE_URL}/articles/${article_id}/comments`,
    {
      body: newComment,
      belongs_to: article_id,
      created_by: created_by
    });
  return data.createdComment
}

export const postArticle = async ({ postTitle, postBody, belongs_to, created_by }) => {
  const { data } = await axios.post(`${BASE_URL}/topics/${belongs_to}/articles`,
    {
      title: postTitle,
      body: postBody,
      created_by,
      belongs_to
    })
  return data.createdArticle
}

export const deleteComment = async (commentID) => {
  await axios.delete(`${BASE_URL}/comments/${commentID}`)
}

export const votePatch = async (article_id, section, direction) => {
  console.log(article_id, section, direction)
  const { data } = await axios.patch(`${BASE_URL}/${section}/${article_id}?vote=${direction}`)
  return data
}