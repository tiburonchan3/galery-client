import {API_HOST} from '../utils/constant';
export class ProductService{
    async addProduct(data){
        const response = await fetch(`${API_HOST}/producto`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        return response.json()
    }
    async addImage(file,id){
        const formData = new FormData()
        formData.append("foto",file)
        const response = await fetch(`${API_HOST}/producto/file-product/${id}`,{
            method:'POST',
            headers:{},
            body:formData
        })
        return response.json()
    }
    async deleteProduct(id){

    }
    async putProduct(data){
        const response = await fetch(`${API_HOST}/producto/${data.id}`,{
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        return response.json()
    }
    async getProducts(){

    }
    async showProducts(page,search){
        const response = await fetch(`${API_HOST}/producto/products-paginate?pagina=${page}&producto=${search}`)
        return response.json();
    }
    async getProductbyId(id){
        const response = await fetch(`${API_HOST}/producto/${id}`)
        return response.json();
    }
    showImage(name){
     return `${API_HOST}/producto/image?image=${name}`   
    }
}