export async function apiClient(url:string){
 const response=await fetch(url);
 return response.json();
}
