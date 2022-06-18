<template>
  <the-header></the-header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
export default {
  name: 'App',
  components: {
    TheHeader,
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*color: #2c3e50;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /*flex-flow: row wrap;*/
  min-width: 40rem;
  margin: 0 auto;
}

/* common */
.box {
  border-radius: 25px;
  -webkit-box-shadow: 0px 7px 12px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 7px 12px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 7px 12px 0px rgba(0, 0, 0, 0.4);
  padding: 1rem;
  margin: 1rem 0;
}

.box-square {
  border:1px solid grey;
  padding: 1rem;
  margin: 1rem 0;
}

button {
  border-radius: 20px;
  padding: 0.8rem 1.5rem;
  background: white;
  border: 1px solid black;
  color: black;

  &.purple-d {
    background: #380c87;
    color: white;
  }
}

.btn-group {
  text-align: right;

  button:not(:last-child) {
    margin-right: 0.5rem;
  }
}

.cb {
  input {
    margin-right: 0.4rem;
  }

  label {
  }
}

ul.label-group {
  list-style-type: none;
  margin: 1rem 0;

  li {
    display: inline;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    color: white;
    font-size: 0.9rem;
    background: grey;
    text-transform: uppercase;

    &.purple {
      background: purple;
    }

    &.purple-d {
      background: #380c87;
    }

    &.purple-l {
      background: #8d1266;
    }

    &.blue {
      background: blue;
    }
  }

  li:not(:last-child) {
    margin-right: 0.5rem;
  }
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.input-group {
  &:not(:first-child){
    margin-top: 1rem;
  }

  label {
    display: block;
  }

  input, textarea{
    width: 100%;
  }

  input {
    height: 2rem;
  }

  textarea {
    height: 5rem;
  }
}

.d-flex {
  display: flex;
}

.jc-center {
  justify-content: center;
}

.page {
  .title {
    text-align: center;
  }
}
</style>
