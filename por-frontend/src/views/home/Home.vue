<template>
  <div>
    <breadcrumb :items="breadcrumb"></breadcrumb>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue';

export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {
      breadcrumb: [{title: "Students"}],
      items: [],
      columns: [
        { field: "id", label: "#", numeric: true },
        { field: "student_code", label: "Student Code" },
        { field: "first_name", label: "First Name" },
        { field: "last_name", label: "Last Name" }
      ],
    };
  },
  mounted(){
    this.getStudents()
  },
  methods:{
    async getStudents(){
      let { res: { data } } = await this.GetHttp("students");
      if (data.status) {
        this.items = data.data
      }
    }
  }
};
</script>
