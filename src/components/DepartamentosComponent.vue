<template>
    <div>
        <h1>Departamentos CRUD</h1>
        <div v-if="status == false">
            <img src="./../assets/images/loading.gif"/>
        </div>
        <table class="table table-bordered table-warning" v-else>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>LOCALIDAD</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dept in departamentos" :key="dept.numero">
                    <td>{{dept.numero}}</td>
                    <td>{{dept.nombre}}</td>
                    <td>{{dept.localidad}}</td>
                    <td>
<router-link 
:to="'/details/' + dept.numero + '/' + dept.nombre + '/' + dept.localidad"
class="btn btn-success">
    Details
</router-link>
<router-link :to="'/update/' + dept.numero" class="btn btn-info">
    Edit
</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos';
const service = new ServiceDepartamentos();

    export default {
        name: "DepartamentosComponent",
        data() {
            return {
                departamentos: [],
                status: false
            }
        }, mounted() {
            service.getDepartamentos().then(result => {
                this.departamentos = result;
                this.status = true;
            });
        }
    }
</script>