<template>
  <b-navbar class="navbar-custom">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="@/assets/images/v-logo.svg"
          alt="Lightweight UI components for Vue.js based on Bulma"
          class="brand-logo ml-6"
        />
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a href="https://x.com/varemoney" target="_blank" class="icon-link twit-navlink">
            <font-awesome-icon :icon="['fab', 'x-twitter']" class="fa-icon x-icon" />
            <font-awesome-icon :icon="['fab', 'twitter']" class="fa-icon twitter-icon" />
          </a>
          <a href="https://t.me/varemoney" target="_blank" class="icon-link tel-navlink">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fa-icon">
              <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@v_are_money" target="_blank" class="icon-link tiktok-navlink">
            <font-awesome-icon :icon="['fab', 'tiktok']" class="fa-icon" />
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style scoped>
.navbar-custom {
  position: relative;
  z-index: 10;
}

.brand-logo {
  min-height: 256px;
}

.icon-link {
  color: #e0ff00;
  transition: color 0.3s ease;
}

.icon-link:hover {
  color: #b3cc00;
}

.fa-icon {
  height: 64px;
  width: 64px;
  transition: transform 0.3s ease;
}


.icon-link:hover .fa-icon {
  transform: scale(1.1);
}

.tel-navlink {
  position: absolute;
  top: 25px;
  right: 25px;
}
.tel-navlink svg.fa-icon {
  transform: scale(1.2);
  transform-origin: center;
}

.tel-navlink:hover svg.fa-icon {
  transform: scale(1.3);
}



.twit-navlink {
  position: absolute;
  top: 25px;
  right: 70px;
}

.tiktok-navlink {
  position: absolute;
  top: 25px;
  right: 120px;
}

.x-icon, .twitter-icon {
  position: absolute;
  top: 0;
  right: 0;
  transition: opacity 0.3s ease;
}

.twitter-icon {
  opacity: 0;
}

.twit-navlink:hover .x-icon {
  opacity: 0;
}

.twit-navlink:hover .twitter-icon {
  opacity: 1;
}
</style>