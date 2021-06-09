export const addPhoto = async (title, photo) => {
  const formData = new FormData();
  formData.append("photo", photo);
  formData.append("title", title);
  const response = await fetch(`https://dye-api.herokuapp.com/api/add-photo`, {
    method: "POST",
    body: formData,
  });
  return response.json();
};
export const getPhotos = async  ()=>{
    const response = await fetch('https://dye-api.herokuapp.com/api')
    return response.json()
}