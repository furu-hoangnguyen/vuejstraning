<template>
  <b-container fluid class="bv-example-row p-0">
    <div class="_navbar">
      <div class="_nav">
        <b-nav vertical>
          <b-nav-item @click="getPage('dashboard')"
            ><div class="logo">
              <img src="../assets/logo.png" alt="error image" />
            </div>
            Paper Dashboard</b-nav-item
          >
          <b-nav-item
            :class="{ active: activeNav == 1 }"
            @click="getPage('dashboard')"
            ><b-icon icon="house-fill"></b-icon>Dashboard</b-nav-item
          >
          <b-nav-item
            :class="{ active: activeNav == 2 }"
            @click="getPage('user')"
            ><b-icon icon="person"></b-icon>User Profile</b-nav-item
          >
          <b-nav-item
            :class="{ active: activeNav == 3 }"
            @click="getPage('list')"
            ><b-icon icon="card-list"></b-icon>Table List</b-nav-item
          >
          <b-nav-item
            :class="{ active: activeNav == 4 }"
            @click="getPage('typography')"
            ><b-icon icon="fonts"></b-icon>Typography</b-nav-item
          >
          <b-nav-item
            :class="{ active: activeNav == 5 }"
            @click="getPage('icon')"
            ><b-icon icon="pencil"></b-icon>Icons</b-nav-item
          >
          <b-nav-item
            :class="{ active: activeNav == 6 }"
            @click="getPage('map')"
            ><b-icon icon="map"></b-icon>Map</b-nav-item
          >
          <b-nav-item
            :class="{ active: activeNav == 7 }"
            @click="getPage('notifications')"
            ><b-icon icon="bell"></b-icon>Notifications</b-nav-item
          >
        </b-nav>
      </div>
      <div class="_navcontent">
        <div class="page_header">
          <b-container fluid class="bv-example-row bv-example-row-flex-cols">
            <b-row align-v="center">
              <b-col cols="auto">{{ title }}</b-col>
              <b-col>
                <b-container fluid class="bv-example-row">
                  <b-row align-h="end">
                    <b-col cols="auto">Stats</b-col>
                    <b-col cols="auto">
                      <b-dropdown id="dropdown-1" text="Dropdown Button">
                        <b-dropdown-item>First Action</b-dropdown-item>
                        <b-dropdown-item>Second Action</b-dropdown-item>
                        <b-dropdown-item>Third Action</b-dropdown-item>
                      </b-dropdown>
                    </b-col>
                    <b-col cols="auto">Settings</b-col>
                  </b-row>
                </b-container>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      activeNav: 1,
      title: "DASHBORD",
    };
  },
  methods: {
    getPage(name) {
      this.title = name.toUpperCase();
      switch (name) {
        case "dashboard":
          this.activeNav = 1;
          break;
        case "user":
          this.activeNav = 2;
          break;
        case "list":
          this.activeNav = 3;
          break;
        case "typography":
          this.activeNav = 4;
          break;
        case "icon":
          this.activeNav = 5;
          break;
        case "map":
          this.activeNav = 6;
          break;
        case "notifications":
          this.activeNav = 7;
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style lang="css" scope>
@import url("../styles/dashboard.css");
</style>
