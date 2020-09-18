class Lists {
  constructor(list) {
    this.list = list;
  }
  //funcao fetch item and return it/feito
  fetchItems() {
    
      const result = {};
      for (const item of this.list)
          result[item.id] = item;
      return result;

}

    
  
  //funcao adicionar valores na lista/feito
  addItem(item) {
    return (this.list = [...this.list, item]);
    
  }
  //function remover
  removeItem(itemId) {
    this.list = this.list.filter((list) => list.id !== itemId);
  }
  //function updateItem atualiza um item
  /*updatedItem(itemId, key, value) {
    this.list.map((element) => {
      if (element.id === itemId) {
        element[key] = value;
      }
      return element;
    });
  }*/
  updatedItem(id,property){
    this.list = this.list.map((element)=>{
      if(element.id == id){
        return {...element,...property};
      }

    })
  }

  //function clearList
  clearList() {
    return (this.list = []);
  }  
}
module.exports = Lists;