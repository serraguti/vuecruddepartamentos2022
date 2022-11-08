<template>
    <div>
        <h1>Update</h1>
        <div style="width: 500px; margin: 0 auto" v-if="departamento">
            <form method="post">
                <input type="hidden"
                    v-model="departamento.numero"/><br/>
                <label>Nombre: </label>
                <input type="text" class="form-control"
                    v-model="departamento.nombre"/><br/>
                <label>Localidad: </label>
                <input type="text" class="form-control"
                    v-model="departamento.localidad"/><br/>
                <button class="btn btn-warning">Update</button>
            </form>
        </div>
    </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos';
const service = new ServiceDepartamentos();

    export default {
        name: "UpdateDepartamento",
        data() {
            return {
                departamento: null, id: 0
            }
        }, 
        mounted() {
            this.id = this.$route.params.id;
            service.findDepartamento(this.id).then(result => {
                this.departamento = result;
            });
        }
    }
</script>