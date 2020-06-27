<template>
  <div>
    <b-form @submit.prevent="register" @reset="onReset">
      <!--Name-->
      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Ingresa tu Nombre"
        ></b-form-input>
      </b-form-group>
      <!--Email-->
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
        description="Nunca compartiremos tu correo con nadie más."
      >
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Ingresa tu Mail"
      ></b-form-input>
      </b-form-group>
      <!--Password-->
      <b-form-group
        id="input-group-1"
        label="Contraseña:"
        label-for="input-1"
      >
      <b-input
        id="text-password"
        v-model="form.password"
        aria-describedby="password-help-block"
        type="password"
        required
        placeholder="Ingresa tu Contraseña"
      ></b-input>
      <b-form-text id="password-help-block">
        Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales o emoji.
      </b-form-text>
      </b-form-group>
      
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        form: {
          name: '',
          email: '',
          password: '',
          error: ''
        }
      }
    },
    methods: {
      register(){
        if( this.form.name && this.form.email && this.form.password){
          //send form
        }else{
          this.error = 'Faltan campos por rellenar'
        }
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = '';
        this.form.name = '';
        this.form.password = '';
        // Trick to reset/clear native browser form validation state
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
