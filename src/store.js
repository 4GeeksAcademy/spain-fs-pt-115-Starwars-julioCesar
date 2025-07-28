export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    personajes: [],
    planetas: [],
    favoritos: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'set_personajes':
      return {
        ...store,
        personajes: action.payload
      };
    case 'set_planetas':
      return {
        ...store,
        planetas: action.payload
      };
    case "toggle_favorito":
      const existe = store.favoritos.find(
        (item) => item.id === action.payload.id && item.tipo === action.payload.tipo
      );

      return {
        ...store,
        favoritos: existe
          ? store.favoritos.filter(
            (item) => !(item.id === action.payload.id && item.tipo === action.payload.tipo)
          )
          : [...store.favoritos, action.payload],
      };

    default:
      throw Error('Unknown action.');
  }
}
