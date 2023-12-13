const lista = ["Um","Dois","Três"]

function getlista(){
    return lista
}

function limpaLista(){
    lista.splice(0)
}

function adicionaNaLista(novoItem){
    lista.push(novoItem)
}

function removeDaLista(indice){
    lista.splite(intice,1)   
}

export {getlista, limpaLista, adicionaNaLista, removeDaLista}