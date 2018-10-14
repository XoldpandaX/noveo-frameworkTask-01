export default function (store) {
  return response => {
    store.dispatch('ui/toggleLoader');
    return response;
  };
}
