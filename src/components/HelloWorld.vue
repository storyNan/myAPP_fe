<template>
  <div class="hello">
    aaaaa
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'HelloWorld',
  data: () => {
    return {
      title: ''
    }
  },
  methods: {
    getData: () => {
      axios.get('http://localhost:3000/user')
        .then((res) => {
          console.log(res);
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
