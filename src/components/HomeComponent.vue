<template>
  <section class="section p-0 m-0">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-full-width has-text-centered mb-6 mt-6">
          <div class="announcement">
            <div class="announcement-text">
              <span>V has laid claim to our</span>
              <a
                href="https://dextools.io/app/en/base/pair-explorer/0xA2b9436D567A740357ca432b35582E93191e6a2F"
                target="_blank"
                class="has-text-yellow link-hover address-wrap dextools-link"
              >
                <img src="@/assets/images/chart-sites/dextools.svg" alt="Dextools Logo" class="dextools-logo"/> Dextools page
              </a>
              <span>!</span>
            </div>
            <div class="claim-id" style="display: none; visibility: hidden">Claim ID: XXXXXXX</div>
          </div>
          <div class="title rubik-glitch-regular has-text-yellow" style="font-size: 6rem">
            v are money
          </div>
          <div class="is-size-2 has-text-yellow">
            Stand with us, be the spark,<br />
            In this revolution’s arc,<br />
            A new era is in sight,<br />
            Join the movement, claim your right.
          </div>
        </div>
      </div>
    </div>
    <img
      src="@/assets/images/v-www-img-02.png"
      alt="making bars"
      class="is-fullwidth m-0 p-0"
      style="width: 100%"
      width="100%"
    />
    <div class="container">
      <div class="columns is-centered">
        <div
          class="column is-full-width has-text-centered mb-3 mt-6 is-size-2 space-mono-bold has-text-yellow ca-container"
        >
          <span class="ca-text">CA:</span>
          <a
            href="https://basescan.org/token/0xA2b9436D567A740357ca432b35582E93191e6a2F"
            target="_blank"
            class="has-text-yellow link-hover address-wrap"
          >
            0xA2b9436D567A740357ca432b35582E93191e6a2F
          </a>
          <font-awesome-icon
            :icon="['fas', 'copy']"
            class="copy-icon link-hover has-text-yellow"
            :class="{ active: isActive }"
            @click="copyToClipboard"
            @mouseover="isHovered = true"
            @mouseleave="isHovered = false"
          />
          <span v-if="showTooltip" class="tooltip">Copied</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTelegram, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCopy as faCopySolid } from '@fortawesome/free-solid-svg-icons'

const showTooltip = ref(false)
const isHovered = ref(false)
const isActive = ref(false)

const copyToClipboard = () => {
  const textToCopy = '0xA2b9436D567A740357ca432b35582E93191e6a2F'
  navigator.clipboard.writeText(textToCopy).then(() => {
    showTooltip.value = true
    isActive.value = true
    setTimeout(() => {
      showTooltip.value = false
      isActive.value = false
    }, 2000)
  })
}
</script>

<style scoped>
.copy-icon {
  cursor: pointer;
  margin-left: 10px;
  transition: color 0.3s ease;
}

.copy-icon.active {
  color: inherit; /* Reset to default color on click */
}

.tooltip {
  display: inline-block;
  margin-left: 10px;
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.tooltip.fade-out {
  opacity: 0;
}

.address-wrap {
  word-wrap: break-word; /* Allows breaking long words onto the next line */
  word-break: break-all; /* Forces breaks in long words if necessary */
  white-space: normal; /* Normal white-space behavior */
  display: inline-block; /* Ensure the element can shrink */
  max-width: 90%; /* Ensure it does not overflow its container */
}

.ca-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 90%; /* Ensure container does not overflow */
  overflow-wrap: anywhere; /* Ensure the address can break anywhere */
}

.ca-text {
  margin-right: 10px;
}

@media (max-width: 768px) {
  .address-wrap {
    font-size: 1rem; /* Adjust font size if necessary */
  }
  .ca-container {
    flex-direction: column;
  }
  .ca-text,
  .copy-icon {
    margin: 5px 0;
  }
}

.announcement {
  /*display: flex;*/
  display: none;
  visibility: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.1rem;
}

.announcement-text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.claim-id {
  text-align: center;
  font-size: 2.1rem;
  margin-top: 0.5rem; /* Adjust this value to control spacing between lines */
}

.dextools-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  margin: 0 0.3rem;
}

.dextools-logo {
  height: 2.1rem;
  margin-right: 0.2rem;
  margin-left: 0.4rem;
}

</style>
