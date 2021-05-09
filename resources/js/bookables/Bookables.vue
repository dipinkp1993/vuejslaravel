<template>
  <div>
    <bookable-list-item item-title="Vue Js" item-content="It is a Frontend development Framework" :rating="4.5"></bookable-list-item>
    <bookable-list-item item-title="Laravel" item-content="It is a Backend development Framework" :rating="4.7"></bookable-list-item>
  </div>
</template>
<script>
import BookableListItem from "./BookableListItem";
export default {
  components: {
    BookableListItem
  },
   // beforeCreate() {
  //   console.log("before create");
  // },
  created() {
    console.log("created");
  }
  // beforeMount() {
  //   console.log("before mount");
  // },
  // mounted() {
  //   console.log("mounted");
  // },
  // beforeDestroy() {
  //   console.log("before destroy");
  // },
  // destroyed() {
  //   console.log("destroyed");
  // }
};
</script> 