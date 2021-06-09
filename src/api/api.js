const API_HOST_DEV = "http://localhost:5000/api";
const API_HOST_PROD = 'https://dye-api.herokuapp.com/api'

export const addPhoto = async (title, photo) => {
  const formData = new FormData();
  formData.append("photo", photo);
  formData.append("title", title);
  const response = await fetch(`${API_HOST_PROD}/add-photo`, {
    method: "POST",
    body: formData,
  });
  return response.json();
};
export const getPhotos = async () => {
  const response = await fetch(API_HOST_PROD);
  return response.json();
};
export const destroyPhoto = async (id, public_id) => {
  const data = { public_id, id };
  const response = await fetch(`${API_HOST_PROD}/delete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};
