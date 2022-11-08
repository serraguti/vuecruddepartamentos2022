import Global from './../Global';
import axios from 'axios';

export default class ServiceDepartamentos {
    getDepartamentos() {
        return new Promise(function(resolve) {
            var request = "/api/departamentos";
            var url = Global.urldepartamentos + request;
            var departamentos = [];
            axios.get(url).then(response => {
                departamentos = response.data;
                resolve(departamentos);
            });
        });
    }

    //METODO QUE RECIBIRA UN OBJETO DEPARTAMENTO
    //DESDE LA PETICION
    insertarDepartamento(departamento) {
        return new Promise(function(resolve) {
            var request = "/api/departamentos";
            var url = Global.urldepartamentos + request;
            // departamento.numero = parseInt(departamento.numero);
            // console.log(departamento);
            axios.post(url, departamento).then(response => {
                resolve(response);
            });
        });
    }

    //METODO PARA BUSCAR UN DEPARTAMENTO EN EL API
    //RECIBIMOS EL ID DEL DEPARTAMENTO
    findDepartamento(id) {
        return new Promise(function(resolve){
            var request = "/api/departamentos/" + id;
            var url = Global.urldepartamentos + request;
            var departamento = {};
            axios.get(url).then(response => {
                departamento = response.data;
                resolve(departamento);
            });
        });
    }

    //METODO PARA MODIFICAR UN DEPARTAMENTO
    //RECIBIMOS EL DATO DEL OBJETO DEPARTAMENTO
    updateDepartamento(departamento) {
        return new Promise(function(resolve){
            var request = "/api/departamentos";
            var url = Global.urldepartamentos + request;
            axios.put(url, departamento).then(response => {
                resolve(response);
            });
        });
    }

    //METODO PARA ELIMINAR RECIBIENDO UN ID
    deleteDepartamento(id){
        return new Promise(function(resolve) {
            var request = "/api/departamentos/" + id;
            var url = Global.urldepartamentos + request;
            axios.delete(url).then(response => {
                resolve(response);
            });
        });
    }
}