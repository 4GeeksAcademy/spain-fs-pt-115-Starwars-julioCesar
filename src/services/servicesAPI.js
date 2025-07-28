export const getPersonajes = async () => {
    try {
    const respuesta = await fetch("https://dragonball-api.com/api/characters");
    const datos = await respuesta.json();
    return datos.items; 
  } catch (error) {
    console.error('Error al obtener personajes:', error);
    return [];
  }
}
export const getPersonajePorId = async (id) => {
  try {
    const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
    if (!response.ok) throw new Error("Personaje no encontrado");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al traer el personaje:", error);
    return null;
  }
};
export const getPlanetas = async () => {
    try {
    const respuesta = await fetch("https://dragonball-api.com/api/planets");
    const datos = await respuesta.json();
    return datos.items; 
  } catch (error) {
    console.error('Error al obtener planetas:', error);
    return [];
  }
}