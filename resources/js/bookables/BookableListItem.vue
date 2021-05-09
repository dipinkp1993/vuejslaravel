<template>
  <div>
    <h1>{{itemTitle}}</h1>
    <p>{{itemContent}}</p>
    <p>{{rating}} / 5</p>
  </div>
</template>
<script>
export default {
    props:{'itemTitle':String,'itemContent':String,'rating':Number}
}
</script>