<template>
 <div class="auth-user">
   <div class="auth-user__card">
     <img src="@/assets/Icon.svg" alt="User Avatar">
   </div>

   <!-- Authorization form -->
   <form class="auth-user__form vld-parent" ref="auth-user-popup" @submit.prevent="submit">
    <div class="rood"><span @click="$emit('close')"></span></div>
     <div class="form-element">
       <label for="email"><span class="label">E-mail</span></label>
       <input id="email" type="email" :class="{ error: $v.form.email.$invalid }" placeholder="ivan@mail.ru" v-model.trim="$v.form.email.$model"/>
       <!-- Error message -->
       <div class="error-message"><span v-if="!$v.form.email.required">Field is required</span><span v-if="!$v.form.email.email">Not valid E-mail address</span></div>
     </div>

     <div class="form-element">
       <label for="password"><span class="label">Password</span></label>
       <input id="password" type="password" :class="{ error: $v.form.password.$invalid }" v-model.trim="$v.form.password.$model"/>
       <!-- Error message -->
       <div class="error-message"><span v-if="!$v.form.password.required">Field is required</span></div>
     </div>
     <button class="btn" type="submit" :disabled="$v.$invalid">Login</button>
     <!-- Links -->
     <div class="links">
       <span>Forgot password?</span>
       <div class="point"><span></span></div>
       <span>User registration</span>
     </div>
   </form>

 </div>
</template>

<script>
import mixin from '@/plugins/popup/popupMixin'
import { email, required } from "vuelidate/lib/validators";
export default {
  mixins: [mixin],
  name: "UserAuth",
  data() {
    return {
      form: {
        email    : null,
        password : null
      }
    }
  },
  computed: {
    users() { return this.$store.state.auth.users.data },
  },
  mounted() {
    // Listener / anti pattern DOM
    document.addEventListener('keydown', this.listener);
  },
  validations: {
    form: {
      email               : { required, email },
      password            : { required }
    }
  },
  methods: {

    listener(event) {
      if(event.keyCode === 88) this.$emit('close')
    },

    // Auth user
    submit() {
      const user = this.users.filter( el => el.email === this.form.email && el.password === this.form.password)

      if(user.length) {
        // Animation loader.
        const loader = this.$loader.show({ container: this.$refs['auth-user-popup'] })
        setTimeout(() => {
          // Checking successful login attempts
          if(localStorage.getItem('successful')) {
            let payload = JSON.parse(localStorage.getItem('successful'))
            payload += 1
            this.$store.commit('auth/user/SUCCESSFUL_TRY', payload)
            localStorage.setItem('successful', payload)
          } else {
            this.$store.commit('auth/user/SUCCESSFUL_TRY', 1)
            localStorage.setItem('successful', '1')
          }
          // Add user in localStorage and store
          this.$store.commit('auth/AUTH_USER', true)
          this.$store.commit('auth/user/SET', ...user)
          this.$notification.show('success', 'SUCCESS')
          localStorage.setItem('user',JSON.stringify(user))
          loader.hide()
          this.$emit('close')
        },3000)
      } else {
        // Checking unsuccessful login attempts
        if(localStorage.getItem('unsuccessful')) {
          let payload = JSON.parse(localStorage.getItem('unsuccessful'))
          payload += 1
          this.$store.commit('auth/user/UNSUCCESSFUL_TRY', payload)
          localStorage.setItem('unsuccessful', payload)
        } else {
          this.$store.commit('auth/user/UNSUCCESSFUL_TRY', 1)
          localStorage.setItem('unsuccessful', '1')
        }
        this.$notification.show('error', 'Login or password entered incorrectly')
      }
    },

    // Delete listener
    beforeDestroy() {
      document.removeEventListener('keydown', this.listener);
    },
  }
}
</script>

<style lang="scss">
.auth-user {
  width: 750px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.02);
  display: flex;
  background-color: #fff;
  @media (max-width: 780px) {
    flex-direction: column;
    width: 375px;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    width: 300px;
    .error-message {
     :after {
       right: -13.5em!important;
     }
    }
  }
  &__card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 50%;
    background-color: #5988d9;
    img {
      width: 248px;
      height: 248px;
    }
  }
  &__form {
    flex: 0 0 50%;
    padding: 20px;
    .rood {
      text-align: end;
      margin-bottom: 12px;
      span {
        display: inline-block;
        width: 24px;
        height: 24px;
        background-image: url("../../assets/rood-blue.svg");
        cursor: pointer;
      }
    }
    .form-element {
      display: flex;
      flex-direction: column;
      margin-bottom: 34px;
      position: relative;
      &:last-child {
        margin-bottom: 0;
      }
      .label {
        font-size: 14px;
        font-weight: 600;
        text-decoration: none solid rgb(0, 0, 0);
      }
      input {
        height: 48px;
        border: none;
        padding-left: 1rem;
        border-radius: 3px;
        background-color: #f7f7f7;
      }
      .error {
        border: 1px solid #db6969;
        &:focus-visible {
          outline:none;
        }
      }
      .error-message {
        position: absolute;
        bottom: -1.3rem;
        left: 0;
        font-size: 12px;
        color: #dc6d6f;
        :after {
          content: url("../../assets/error-oval.svg");
          position: absolute;
          right: -19.5em;
          top: -3.1em;
          width: 23px;
          height: 23px;
        }
      }
    }
    .btn {
      display: flex;
      align-items: center;
      height: 48px;
      width: 100%;
      border-radius: 3px;
      background-color: #5988d9;
      color: #fff;
      padding-left: 77px;
      font-size: 14px;
      transition: 0.3s ease;
      margin-bottom: 14px;
      cursor: pointer;
    }
    .links {
      display: flex;
      justify-content: center;
      span {
        font-size: 14px;
        color: #000000;
        text-decoration: underline;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover {
          color: #5988d9;
        }
      }
      .point {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 7px 0 7px;
        span {
          background-image: url("../../assets/Oval.svg");
          width: 4px;
          height: 4px;
        }
      }
    }
  }
}
</style>
