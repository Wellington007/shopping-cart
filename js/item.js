funcion Add(){
    var boton=document.getElementById('Add');
    boton.addEventListener('click',novoitem,false);
}

function setarSoma(obj) {
     var total = 0;
     for (var i = 0; i < obj.length; i++) {
           total += obj.valorReal;
     }
}

   var ListService = {

    names: [],

    getList: function () {
        return ListService.names;
    },

    addName: function (name) {
        ListService.names.push(name);
    },

    loadNames: function () {
        //TODO to be implemented   
    },

    saveNames: function () {
        //TODO to be implemented
    }
};

window.addEventListener('load',iniciar,false);